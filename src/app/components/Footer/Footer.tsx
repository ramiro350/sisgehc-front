import { footerProps } from '@/types';
import './Footer.css'
import Image from 'next/image';

const Footer = ({logoUece}: footerProps) => {

    return(
        <footer className="rodape">
            <Image src="./images/LogoEstado.svg" alt="Logo Estado do Ceará" width={205} height={70}/>
            <div className='rodape__texto'>
                <p>Sistema criado para fins acadêmicos</p>
                <p>Governo do Estado do Ceará</p>
                <p>Todos os direitos reservados</p>
            </div>
            {logoUece ? <Image src="/images/LogoUece.svg" alt='Logo Uece' width={300} height={70}/> : <div className='ajuste'></div>}
        </footer>
    );
}

export default Footer