'use client'
import headerProps from '@/types';
import './Header.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Header = ({isLoginScreen, isProfessor}:headerProps) =>{

    const router = useRouter();

    const handleAlunopage = () => {
        router.push('/perfilaluno');
    }

    if(isLoginScreen)
    {
        //Se o sistema estiver logado, o header aparecerá assim
        return(
            <header className='cabecalho'>
                <div className='cabecalho__container1'>
                    <p className='cabecalho__t1'>SISGEHC</p>
                    <div>
                        <p className='cabecalho__t2'>Sistema de Gerenciamento de Horas</p>
                        <p className='cabecalho__t2'>Complementares</p>
                    </div>
                </div>
                <div className='cabecalho__container2' onClick={handleAlunopage}>
                    <p className='cabecalho__t1'>Aluno</p>
                    <p className='cabecalho__t2'>Perfil do Aluno</p>
                </div>
            </header>
        );
    }
    else if(isProfessor){
        return(
            <header className='cabecalho'>
                <div className='cabecalho__container1'>
                    <p className='cabecalho__t1'>SISGEHC</p>
                    <div>
                        <p className='cabecalho__t2'>Sistema de Gerenciamento de Horas</p>
                        <p className='cabecalho__t2'>Complementares</p>
                    </div>
                </div>
                <div className='cabecalho__container2'>
                    <p className='cabecalho__t1'>Professor</p>
                    <p className='cabecalho__t2'>Perfil do Professor</p>
                </div>
            </header>
        );
    }
    else
    {
        //Se não estiver logado, vai aparecer assim 
        return(
            <header className='cabecalho'>
                <div className='cabecalho__container1'>
                    <Image src='./images/LogoUece.svg' alt='Logo UECE'  width={436} height={135}/>
                </div>
                <div className='cabecalho__container2'>
                    <p className='cabecalho__t1'>SISGEHC</p>
                    <p className='cabecalho__t2'>Sistema de Gerenciamento de Horas</p>
                    <p className='cabecalho__t2'>Complementares</p>
                </div>
            </header>
        );
    }
}

export default Header