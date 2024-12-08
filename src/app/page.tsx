'use client'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import './style.css'

export default function Home() {
  return (
    <>
      <Header/>
      <div className="login__container">
        <p className='mainPage__title'>Quem está Acessando?</p>
        <Button color='btn-verdeg' text='Professor' pagina='/HomeProfessor'></Button>
        <Button color='btn-verdeg' text='Aluno'pagina='login'></Button>
      </div>
      <Footer/>
    </>
  );
}
