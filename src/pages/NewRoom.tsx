import { Link } from "react-router-dom"

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"

import "../styles/auth.scss"

import { Button } from "../components/button"

import { useAuth } from "../hooks/useAuth"

export function NewRoom() {
  // const { user } = useAuth();
 
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="illustration symbolizing questions and answers"
        />
        <strong>
          Create rooms to organize all live questions directed to you
        </strong>
        <p className="subtitle">
          {" "}
          Answer all questions from your audience in real-time{" "}
        </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
          <h2> Criar uma nova sala </h2>
          <form>
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?<Link to="/">Clique aqui!</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
