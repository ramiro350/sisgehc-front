export default interface headerProps{
    isLoginScreen?: boolean; 
    isProfessor?: boolean;
    isCoordenador?: boolean;
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
    tipo: string;
    // responsavel: string;
    dataInicio: string;
    dataFim: string;
    horaInicio: string; 
    horaFim: string;
    limiteInscricao: string;
    descricao: string;
    curso: number
    // imagem: string;
    // inscrito: boolean;
}

export interface AtividadeComplementar {
    id_atividade: number;
    carga_horaria: number;
    data_submissao: string;
    data_validacao: string;
    arquivo_certificado: string;
    tipo_atividade: string;
    sub_tipo: string;
    area_de_conhecimento: string;
    aluno: number;
    coordenador: number;
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

export interface IFrameProps{
    id: string;
}