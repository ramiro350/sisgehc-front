'use client'
import React, { useState, useRef } from 'react';
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";
import DataInput from "../components/DataInput/DataInput";
import TextArea from "../components/TextArea/TextArea";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import InputFile from "../components/InputFile/InputFile";
import TimeInput from "../components/TimeInput/TimeInput";
import ModalQrcode from '../components/ModalQrcode/modalQrcode';
import { QRCodeCanvas } from 'qrcode.react';
import "./style.css";

export default function Cadevento() {

  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Estados para armazenar os valores dos inputs
  const [nomeEvento, setNomeEvento] = useState('');
  const [horasEvento, setHorasEvento] = useState('');
  const [descricaoEvento, setDescricaoEvento] = useState('');
  const [logoEvento, setLogoEvento] = useState(null); // Para o arquivo
  const [responsavel, setResponsavel] = useState('');
  const [local, setLocal] = useState('');
  const [curso, setCurso] = useState<number | null>(null);
  const [dataInicio, setDataInicio] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [horaFim, setHoraFim] = useState('');

  // parametros usados para a geracao do qrcode
  const qrCodeData = JSON.stringify({
    nomeEvento,
    horasEvento,
    descricaoEvento,
    responsavel,
    local,
    curso,
    dataInicio,
    horaInicio,
    dataFim,
    horaFim,
  });

  const canvasRef = useRef(null);

  const downloadQrCodeAsJpg = () => {
    const canvas = canvasRef.current.querySelector('canvas');
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'QrcodeEvento.jpg';
      link.click();
    }
  };

  // Função para enviar os dados via POST
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', nomeEvento);
    formData.append('horasComplementares', horasEvento);
    formData.append('descricao', descricaoEvento);

    if (logoEvento) {
      formData.append('imagem', logoEvento); 
    }
    formData.append('professor', 'professor');
    formData.append('responsavel', responsavel);
    formData.append('local', local);
    formData.append('curso', curso);
    formData.append('dataInicio', dataInicio);
    formData.append('horaInicio', horaInicio);
    formData.append('dataFim', dataFim);
    formData.append('horaFim', horaFim);

    // Usando forEach para depurar o FormData
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/eventos/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Evento cadastrado com sucesso:', result);
        alert("Evento cadastrado com sucesso :)");
      } else {
        console.error('Erro ao cadastrar o evento:', response.statusText);
        alert("Erro ao cadastrar Evento");
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="titulo">
        <h4>Cadastro de Evento</h4>
      </div>
      <form onSubmit={handleSubmit} className="frame">
        <div className="coluna">
          <Input
            placeholder="Adicione um nome"
            text="Nome do evento"
            value={nomeEvento}
            onChange={(e) => setNomeEvento(e.target.value)}
          />
          <Input
            placeholder="Defina uma quantidade de horas"
            text="Quantidade de horas do evento"
            value={horasEvento}
            onChange={(e) => setHorasEvento(e.target.value)}
          />
          <TextArea
            placeholder="Descreva seu evento"
            text="Descrição do evento"
            value={descricaoEvento}
            onChange={(e) => setDescricaoEvento(e.target.value)}
          />
          <InputFile
            name="imgEvento"
            text="Logo do evento"
            onChange={(e) => setLogoEvento(e.target.files[0])} // Para arquivos
          />
          <button className='button-qrcode' onClick={toggleModal}>QR-code</button>
          <ModalQrcode isVisible={isModalVisible} onClose={toggleModal}>
            {}
            <div ref={canvasRef} className="qrcode-container">
              <QRCodeCanvas
                value={qrCodeData}
                size={256}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={true}
              />
            </div>
            <div className="button-container">
              <button onClick={downloadQrCodeAsJpg}>Baixar QR Code como JPG</button>
            </div>
          </ModalQrcode>
          <div id="buttonDivLeft">
            <Button text="Voltar" color="" pagina='/HomeProfessor'/>
          </div>
        </div>
        <div className="coluna">
          <Input
            placeholder="Professor, Grupo, Laboratório ou Movimento"
            text="Responsável pelo evento"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
          />
          <Input
            placeholder="Adicione um local"
            text="Local"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
          <Select
              text="Curso"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
          ></Select>

          <div className="frame">
            <div>
              <DataInput
                text="Data de início"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
              />
              <TimeInput
                text="Horário de início"
                value={horaInicio}
                onChange={(e) => setHoraInicio(e.target.value)}
              />
            </div>
            <div>
              <DataInput
                text="Data de término"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
              />
              <TimeInput
                text="Horário de término"
                value={horaFim}
                onChange={(e) => setHoraFim(e.target.value)}
              />
            </div>
          </div>
          <div id="buttonDivRight">
            <Button text="Salvar" color="btn-verde"/>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
}
