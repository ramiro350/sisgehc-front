'use client'
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Image from 'next/image'
import './style.css'
import Button from '../components/Button/Button'
import { useRouter } from 'next/navigation'
;

const page = () => {

    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/HomeAluno');
    }

  const [data, setData] = useState<any[]>([]); // Estado para armazenar os dados
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Função para buscar os dados
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/alunos/');
        const result = await response.json();
        setData(result); // Atualiza os dados
        console.log(result); // Verifique os dados aqui no console
      } catch (error) {

        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchData();
  }, []); // O array vazio faz com que useEffect execute apenas uma vez ao montar o componente

  if (loading) {
    return <p>Carregando...</p>; // Mensagem enquanto os dados estão sendo carregados
  }


  return (
    <>
      <Header isLoginScreen/>
      <div className='perfil__container'>
          
              <div className='perfil__informacao'>
                  <h1>{data[0].nome}</h1>
                  <p>Matricula : {data[0].matricula}</p>
                  <p>Horas complementares: {data[0].horasComplementares}</p>
                  <p>Curso : {data[0].curso}</p>
                  <a href="https://www.google.com/url?q=https://www.uece.br/fafidam/wp-content/uploads/sites/35/2024/07/RES-5034-CEPE-atividades-complementares-2-2.pdf&sa=U&ved=2ahUKEwiM9_r1vuWHAxUgO7kGHf1ZMcQQFnoECC8QAQ&usg=AOvVaw3KotDNNUJNcCo_hJAbdv2E">informações horas complementares</a>
                  <div className='perfil__button' onClick={handleButtonClick} >
                      <Button color='' text='Voltar'/>
                      <Button color='btn-vermelho' text='Sair' pagina='/'/>
                  </div>
              </div>
              <Image
                  src="./images/imagemPerfil.svg"
                  alt='imagem default perfil'
                  width={256}
                  height={256}/>

          
      </div>
      <Footer/>
    </>
  )
}

export default page