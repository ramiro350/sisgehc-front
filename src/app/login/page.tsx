'use client'
import { useRouter } from "next/navigation";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import "./style.css";
import { useState } from "react";
import { json } from "stream/consumers";

export default function login() {

  const [matricula, setMatricula] = useState('')
  const [senha, setSenha] = useState('')

  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: matricula, password: senha }),
      });

      if (response.ok) {
        const result = await response.json();
        router.push('/HomeAluno');
      } else {
        console.error('Erro ao cadastrar o evento:', response.statusText);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

    return (
      <>
      <Header></Header>
      <div className="container">
        <div className="coluna">
          <p className="loginText">Login</p>
          <Input text="Matrícula" placeholder={"Digite sua matrícula"} value={matricula} onChange={(e) => setMatricula(e.target.value)}></Input>
          <Input id="password" text="Senha" placeholder="Digite sua senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
          <button className="login__button" onClick={handleSubmit}>Entrar</button>
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
  