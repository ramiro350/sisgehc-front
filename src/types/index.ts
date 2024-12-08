export default interface headerProps{
    isLoginScreen?: boolean; 
    isProfessor?: boolean;
}

export interface inputProps{
    id?: string;
    placeholder: string;
    text: string;
    value?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface buttonProps{
    text: string;
    color: string;
    pagina?: string;
}

export interface selectProps{
    text: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface dataProps{
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export interface textProps{
    placeholder: string;
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface Evento{
    id: number;
    nome: string;
    professor: number;
    responsavel: string;
    dataInicio: string;
    dataFim: string;
    horaInicio: string; 
    horaFim: string;
    descricao: string;
    imagem: string;
}

export interface inputFileProps {
    id?: string;
    name: string;
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface footerProps{
    logoUece?: boolean;
}