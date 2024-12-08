'use client'
import './Card.css';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { Evento } from '@/types';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";

function Card() {
  const [data, setData] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [idEvento, setIdEvento] = useState<number | null>();

  
  const handleSubmit = async () => {
    
    const formData = new FormData();
    formData.append('evento', idEvento);
    formData.append('Aluno', 6 );

    try {
      const response = await fetch('http://127.0.0.1:8000/inscricao/', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Inscrição realizada com sucesso', result);
        alert("Inscrição Realizada com sucesso :)");
      } else {
        console.error('Erro ao inscrever Aluno:', response.statusText);
        alert("Erro ao inscrever Aluno");
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  function sendIdEvento(id: number){
    setIdEvento(id)
    console.log(id)
    handleSubmit()
  }
  
  useEffect(() => {
    // Função para buscar os dados
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/eventos/');
        const result = await response.json();
        setData(result); // Atualiza os dados
        console.log(result); // Verifique os dados aqui no console
      } catch (error) {
        
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false); 
      }
    };
    
    fetchData();
  }, []); 
  
  if (loading) {
    return <p>Carregando...</p>; 
  }
  
  return (
  <>
    <p className='page__titulo'>Eventos Disponíveis</p>
    <div className='cards'>
      {data.map((item: Evento) => (
        <Fragment key={item.id}>
          <div className="card__container">
            <div className="card__titulo">
                <Image src={item.imagem} alt="Imagem evento" width={375} height={190} className="card__image"/>
                <p className='ajuste__titulo'>{item.nome}</p>
            </div>

            <div className="card__informacoes">
                <div>
                        <p>De {format(new Date(item.dataInicio), "dd 'de' MMMM", {locale: ptBR })} até {format(new Date(item.dataFim), "dd 'de' MMMM", {locale: ptBR })}</p>
                        <p>{item.responsavel}</p>
                        <p>{item.horaInicio} - {item.horaFim}</p>
                </div>
                <div className='ajuste__texto'>
                        <p>Descrição:</p>
                        <p className='ajuste__texto2'>{item.descricao}</p>
                </div>
                <button className='card__button' onClick={() => sendIdEvento(item.id)}>Se inscrever</button>
             </div>
           </div>
        </Fragment>
      ))}
    </div>
  </>
  );
}

export default Card;
