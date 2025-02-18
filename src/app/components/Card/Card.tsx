'use client'
import './Card.css';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from 'react';
import { Evento } from '@/types';
import {format, parseISO} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";

// const mockData: Evento[] = [
//   {
//     id: 1,
//     nome: 'Evento 1',
//     imagem: '/images/imagem_teste.png',
//     dataInicio: '2023-10-01T00:00:00Z',
//     dataFim: '2023-10-05T00:00:00Z',
//     responsavel: 'Responsável 1',
//     horaInicio: '10:00',
//     horaFim: '12:00',
//     descricao: 'Descrição do Evento 1',
//     professor: 1
//   },
//   {
//     id: 2,
//     nome: 'Evento 2',
//     imagem: '/images/imagem_teste.png',
//     dataInicio: '2023-11-01T00:00:00Z',
//     dataFim: '2023-11-05T00:00:00Z',
//     responsavel: 'Responsável 2',
//     horaInicio: '14:00',
//     horaFim: '16:00',
//     descricao: 'Descrição do Evento 2',
//     professor: 2
//   },
//   {
//     id: 3,
//     nome: 'Evento 2',
//     imagem: '/images/imagem_teste.png',
//     dataInicio: '2023-11-01T00:00:00Z',
//     dataFim: '2023-11-05T00:00:00Z',
//     responsavel: 'Responsável 2',
//     horaInicio: '14:00',
//     horaFim: '16:00',
//     descricao: 'Descrição do Evento 2',
//     professor: 2
//   },
//   {
//     id: 4,
//     nome: 'Evento 2',
//     imagem: '/images/imagem_teste.png',
//     dataInicio: '2023-11-01T00:00:00Z',
//     dataFim: '2023-11-05T00:00:00Z',
//     responsavel: 'Responsável 2',
//     horaInicio: '14:00',
//     horaFim: '16:00',
//     descricao: 'Descrição do Evento 2',
//     professor: 2
//   }
//   // Add more mock data as needed
// ];

function Card() {
  const [data, setData] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [idEvento, setIdEvento] = useState<number | null>();

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/eventos/', {
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

  const handleSubmit = async (id: number) => {
    if (idEvento === null) return;

    const alunoId = 1;
    console.log(idEvento)
    try {
      const response = await fetch(`http://127.0.0.1:8000/inscricoes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ evento: id, aluno: alunoId }),
      });

      if (response.ok) {
        console.log('Inscrição realizada com sucesso', response);
        router.push('/HomeAlunoPosInscricao');
        alert("Inscrição Realizada com sucesso :)");
      } else {
        console.error('Erro ao inscrever Aluno:', response.statusText);
        alert("Erro ao inscrever Aluno");
      }
    } catch (error) {
      console.error('Erro ao inscrever Aluno:', error);
    }
  };

  const sendIdEvento = (item: Evento) => {
    console.log("sendIdEvento called with id:", item.id);
    setIdEvento(item.id);
    handleSubmit(item.id); // Pass id directly
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <p className='page__titulo'>Eventos Disponíveis</p>
      <div className='cards row'>
        {data.map((item) => {
          // Parse the date strings
          console.log(item)
          const dataInicio = parseISO(item.data_inicio);
          const dataFim = parseISO(item.data_encerramento);
  
          // Check if the dates are valid
          const isValidDateInicio = !isNaN(dataInicio.getTime());
          const isValidDateFim = !isNaN(dataFim.getTime());
          
          const idEvento = item.id_evento
  
          return (
            <div key={item.id} className="card__container col-3">
              <div className="card__titulo">
                <Image
                  src={'/images/imagem_teste.png'}
                  width={350}
                  height={190}
                  className="img-fluid"
                  alt={item.nome}
                />
              </div>
              <div className="card__informacoes">
                <div>
                  <p className='ajuste__titulo'>{item.nome}</p>
                  <p>
                    {isValidDateInicio && isValidDateFim ? (
                      `De ${format(dataInicio, "dd 'de' MMMM", { locale: ptBR })} até ${format(dataFim, "dd 'de' MMMM", { locale: ptBR })}`
                    ) : (
                      'Data inválida'
                    )}
                  </p>
                  <p>{item.descricao_evento}</p>
                  {/* <p>{item.hora_inicio} - {item.hora_fim}</p> */}
                </div>
                <div className='ajuste__texto'>
                  <p>Realização:</p>
                  <p className='ajuste__texto2'>{item.responsavel}</p>
                </div>
                <button className='card__button'  onClick={() => {
                  handleSubmit(idEvento)}
                  }>
                  Se inscrever
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
}


export default Card;
