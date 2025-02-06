'use client'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import './style.css'

export default function Home() {
  const linkHorasExtras = 'https://www.uece.br/cesa/wp-content/uploads/sites/32/2021/12/resolucao_atividades_complementares.pdf'

  return (
    <>
      <Header/>
      <div className="login__container">
        <p className='mainPage__title'>Quem está Acessando?</p>
        <Button color='btn-verdeg' text='Professor' pagina='/HomeProfessor'></Button>
        <Button color='btn-verdeg' text='Aluno'pagina='login'></Button>
        <Button color='btn-verdeg' text='Resolução de Horas Complementares' pagina={linkHorasExtras}></Button>
      </div>
      <Footer/>
    </>
  );
}
