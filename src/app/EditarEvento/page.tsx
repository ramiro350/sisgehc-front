import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Select from "../components/Select/Select";
import DataInput from "../components/DataInput/DataInput";
import TextArea from "../components/TextArea/TextArea";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./style.css"

export default function cadevento() {
    return (
      <>
      <Header isLoginScreen></Header>
      <div className="titulo">
      <h4>Editar evento</h4>
      </div>
      <div className="frame">
        <div className="coluna">
          <Input placeholder={"Adicione um nome"} text={"Nome do evento"}></Input>
          <Select></Select>
          <TextArea placeholder="Descreva seu evento" text="Descrição do evento"></TextArea>
          <div id="buttonDivLeft">
            <Button text={"Voltar"} color={""} pagina="/HomeProfessor"></Button>
            <Button text="Deletar" color="btn-vermelho" pagina="/HomeProfessor"></Button>
          </div>
        </div>
        <div className="coluna">
          <Input placeholder="Professor, Grupo, Laboratório ou Movimento" text="Responsavel pelo evento"></Input>
          <Input placeholder={"Adicione um local"} text={"Local"}></Input>
          <Input placeholder={"Adicione um curso"} text={"Curso"}></Input>
          <div className="frame">
            <div>
              <DataInput text="Data de início"></DataInput>
              <DataInput text="Início das inscrições"></DataInput>
            </div>
            <div>
              <DataInput text="Data de termino"></DataInput>
              <DataInput text="Data limíte de inscrições"></DataInput>
            </div>
          </div>
          <div id="buttonDivRight">
            <Button text="Salvar" color="btn-verde" pagina="/HomeProfessor"></Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
      </>
    );
  }