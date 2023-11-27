import { Link, useHistory } from "react-router-dom"
import { FormEvent, useState } from "react"

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"

import "../styles/auth.scss"

import { Button } from "../components/button"
import { database } from "../services/firebase"
import { useAuth } from "../hooks/useAuth"

export function NewRoom() {
  const history = useHistory()
  const { user } = useAuth()
  const [newRoom, setNewRoom] = useState("")

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()
    if (newRoom.trim() === "") {
      return
    }

    const roomRef = database.ref("rooms")

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

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
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da Sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?
            <Link to="/">Clique aqui!</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
