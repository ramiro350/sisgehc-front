'use client'
import './CardsValidacao.css';
import Image from 'next/image';
import Button from '../Button/Button';
import { Fragment, useEffect, useState } from 'react';
import { AtividadeComplementar, Evento } from '@/types';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const mockDataInscritos: Evento[] = [
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
    inscrito: false
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
    inscrito: false
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
    inscrito: false
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
    inscrito: false
  }
  // Add more mock data as needed
];

function Cards() {
  const [data, setData] = useState<AtividadeComplementar[]>([]);
  const [loading, setLoading] = useState(true);
  const [idEvento, setIdEvento] = useState<number | null>();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/atividades_complementares/', {
          method: 'GET',
        });

        if (response.ok) {
          const result = await response.json();
          setData(result);
          console.log('Data fetched successfully', result);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('evento', idEvento);
    formData.append('Aluno', 6);

    try {
      const response = await fetch(`http://127.0.0.1:8000/inscricao/validar/${idEvento}`, {
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
    // setIdEvento(id);
    // console.log(id);
    // handleSubmit();
    router.push("/visualizarCertificadoExterno")
  }

  // useEffect(() => {
  //   // Simulate data fetching with mock data
  //   setData(mockData);
  //   setLoading(false);
  // }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <p className='page__titulo'>Validações de certificados externos pendentes</p>
      <div className='cards row'>
        {data.map((item) => (
          <div key={item.id_atividade} className="card__container col-3">
            <div className="card__titulo">
              <Image src={"/images/imagem_teste.png"} width={350} height={190} className="img-fluid" alt="Imagem Teste" />
            </div>
            <div className="card__informacoes">
              <div>
                <p>Tipo:</p>
                <p className='ajuste__titulo'>{item.tipo_atividade}</p>
                <p>Sub-Tipo:</p>
                <p className='ajuste__texto2'>{item.sub_tipo}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "end" }}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green", fontSize: "32px" }} />
              </div>
                <div className='ajuste__texto'>
                  <p>Área:</p>
                  <p className='ajuste__texto2'>{item.area_de_conhecimento}</p>
                </div>
              <p>Data de submissão {format(new Date(item.data_submissao), "dd 'de' MMMM", { locale: ptBR })} | Data de validação {format(new Date(item.data_validacao), "dd 'de' MMMM", { locale: ptBR })}</p>
              <button className='card__button' onClick={() => sendIdEvento(item.id_atividade)}>Validar</button>
            </div>
          </div>
        ))}
      </div>
      <p className='page__titulo'>Validações ou recusas feitas</p>
      <div className='cards row'>
        {data.map((item) => (
          <div key={item.id_atividade} className="card__container col-3">
            <div className="card__titulo">
              <Image src={"/images/imagem_teste.png"} width={350} height={190} className="img-fluid" alt="Imagem Teste" />
            </div>
            <div className="card__informacoes">
              <div>
                <p>Tipo:</p>
                <p className='ajuste__titulo'>{item.tipo_atividade}</p>
                <p>Sub-Tipo:</p>
                <p className='ajuste__texto2'>{item.sub_tipo}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "end", justifyContent: "end" }}>
                <FontAwesomeIcon icon={faCircleXmark} style={{ color: "red", fontSize: "32px" }} />
              </div>
              <div className='ajuste__texto'>
                <p>Área:</p>
                <p className='ajuste__texto2'>{item.area_de_conhecimento}</p>
              </div>
              <p>Data de submissão {format(new Date(item.data_submissao), "dd 'de' MMMM", { locale: ptBR })} | Data de validação {format(new Date(item.data_validacao), "dd 'de' MMMM", { locale: ptBR })}</p>
              <button className='card__button' onClick={() => sendIdEvento(item.id_atividade)}>Detalhes</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
        <div id="buttonDivLeft">
          <Button text="Voltar" color="" pagina='/HomeProfessor' />
        </div>
      </div>
    </div>
  );
    
}


export default Cards;
