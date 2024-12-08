'use client'

import { useRouter } from 'next/navigation';
import './CardCriarEvento.css'

export default function criarEvento() {
    const router = useRouter();

    const handleProfessorHome = () => {
        router.push('/cadevento');
    }

    return (
        <div className="card__container" onClick={handleProfessorHome}>
            <div>
                <button id='botao_criar' onClick={handleProfessorHome}>+</button>
                <p>Criar Evento</p>
            </div>
        </div>
    )
}