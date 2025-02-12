'use client'
import './Card.css';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { Evento } from '@/types';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";

const mockData: Evento[] = [
  {
    id: 1,
    nome: 'Evento 1',
    imagem: '/images/imagem_teste.png',
    dataInicio: '2023-10-01T00:00:00Z',
    dataFim: '2023-10-05T00:00:00Z',
    responsavel: 'Responsável 1',
    horaInicio: '10:00',
    horaFim: '12:00',
    descricao: 'Descrição do Evento 1',
    professor: 1,
    inscrito: true
  },
  {
    id: 2,
    nome: 'Evento 2',
    imagem: '/images/imagem_teste.png',
    dataInicio: '2023-11-01T00:00:00Z',
    dataFim: '2023-11-05T00:00:00Z',
    responsavel: 'Responsável 2',
    horaInicio: '14:00',
    horaFim: '16:00',
    descricao: 'Descrição do Evento 2',
    professor: 2,
    inscrito: true
  },
  {
    id: 3,
    nome: 'Evento 2',
    imagem: '/images/imagem_teste.png',
    dataInicio: '2023-11-01T00:00:00Z',
    dataFim: '2023-11-05T00:00:00Z',
    responsavel: 'Responsável 2',
    horaInicio: '14:00',
    horaFim: '16:00',
    descricao: 'Descrição do Evento 2',
    professor: 2,
    inscrito: true
  },
  {
    id: 4,
    nome: 'Evento 2',
    imagem: '/images/imagem_teste.png',
    dataInicio: '2023-11-01T00:00:00Z',
    dataFim: '2023-11-05T00:00:00Z',
    responsavel: 'Responsável 2',
    horaInicio: '14:00',
    horaFim: '16:00',
    descricao: 'Descrição do Evento 2',
    professor: 2,
    inscrito: true
  }
  // Add more mock data as needed
];

function Card() {
  const [data, setData] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [idEvento, setIdEvento] = useState<number | null>();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('evento', idEvento);
    formData.append('Aluno', 6);

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

  function sendIdEvento(id: number) {
    setIdEvento(id);
    console.log(id);
    handleSubmit();
  }

  useEffect(() => {
    // Simulate data fetching with mock data
    setData(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className=''>
      <p className='page__titulo'>Validações de certificados externos pendentes</p>
      <div className='cards row'>
        {data.map((item: Evento) => (
          <Fragment key={item.id}>
            <div className="card__container col-3">
              <div className="card__titulo">
                <Image src={item.imagem} width={350} height={190} className="img-fluid">
                </Image>
              </div>

              <div className="card__informacoes">
                <div>
                  <p className='ajuste__titulo'>{item.nome}</p>
                    <p>Aluno:</p>
                    <p className='ajuste__texto2'>{item.responsavel}</p>
                </div>
                <div className='ajuste__texto'>
                  <p>Realização:</p>
                  <p className='ajuste__texto2'>{item.responsavel}</p>
                </div>
                <p>De {format(new Date(item.dataInicio), "dd 'de' MMMM", { locale: ptBR })} até {format(new Date(item.dataFim), "dd 'de' MMMM", { locale: ptBR })}</p>
                <button className='card__button' onClick={() => sendIdEvento(item.id)}>Validar</button>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}


export default Card;
