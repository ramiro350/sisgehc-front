'use client'
import { useRouter } from "next/navigation";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import "./style.css";
import { useState } from "react";

export default function login() {
  const matricula = "1574022"
  const senha = "caio123"
  const [m1, setm1] = useState('')
  const [s1, sets1] = useState('')

  const router = useRouter();
  const handleAlunoHome = () => {
    if(m1 === matricula && s1 === senha){
        router.push('/HomeAluno');
    }
  }
    return (
      <>
      <Header></Header>
      <div className="container">
        <div className="coluna">
          <p className="loginText">Login</p>
          <Input text="Matrícula" placeholder={"Digite sua matrícula"} value={m1} onChange={(e) => setm1(e.target.value)}></Input>
          <Input id="password" text="Senha" placeholder="Digite sua senha" type="password" value={s1} onChange={(e) => sets1(e.target.value)}/>
          <button className="login__button" onClick={handleAlunoHome}>Entrar</button>
        </div>
        <div className="coluna">
          <p className="createText">Ainda não tem conta?</p>
          <Button text={"Criar conta"} color={"btn-verdeclarog"} ></Button>
        </div>
      </div>
      <Footer></Footer>
      </>
    );
  }
  