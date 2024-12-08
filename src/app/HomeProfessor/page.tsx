'use client'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Card from '../components/Card/Card';
import './style.css'
import CardCriarEvento from '../components/CardCriarEvento/CardCriarEvento';
import Button from '../components/Button/Button';

export default function HomeProfessor() {

    return(
        <>
            <div className='wrapper'>
                <Header isProfessor/>
                <p className='page__title'>Seus Eventos</p>
                <div className='container'>
                    <CardCriarEvento/>
                    <div className='container__button'>
                        <Button text='Sair' color='' pagina='/'></Button>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}