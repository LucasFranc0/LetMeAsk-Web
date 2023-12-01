import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

import "../styles/auth.scss"

import { useHistory } from "react-router-dom"
import { FormEvent, useState } from "react"

import { database } from "../services/firebase"

import { useAuth } from "../hooks/useAuth"

import { Button } from "../components/button"

export function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState("")

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push("/rooms/new")
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode === "") {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert("Room does not exists.")
      return
    }

    if (roomRef.val().endedAt) {
      alert("Room already closed.")
      return
    }

    history.push(`/rooms/${roomCode}`)
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Create room with Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Insira o Código da Sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na Sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}
