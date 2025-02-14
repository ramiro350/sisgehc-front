"use client"; 

import { buttonProps, IFrameProps } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './Iframe.css'
import Button from '../Button/Button';

const IFrame = ({id}: IFrameProps) =>
{
  const [pdfURL, setPdfURL] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfURL(url);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/certificado/${id}`, {
        method: "GET",
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfURL(url);
        console.log("Certificado carregado.");
      } else {
        console.error("Erro ao visualizar certificado:", response.statusText);
        alert("Erro ao visualizar certificado");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };
  
    

    return (
      <div className=''>
        <p className='page__titulo'>Visualizar Certificado</p>
        {/* <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <button onClick={handleSubmit} className="btn btn-primary">
          Buscar Certificado
        </button> */}
        <div className='align-self-left' style={{"marginLeft": "2.5rem"}}>
        {(
          <iframe src="/teste.pdf#toolbar=0" width="700px" height="400px" style={{ border: "none" }} />
        )}
        </div>
        <div  style={{"alignItems": "left", "display": "flex", "flexDirection": "row", "justifyContent": "start"}}>
        <div id="buttonDivLeft ">
              <Button text="Voltar" color="" pagina='/HomeProfessor'/>
            </div>
        <div id="buttonDivRight ">
              <Button text="Download" color="btn-verde"/>
            </div>
        </div>
      </div>
    );
  };


export default IFrame;
