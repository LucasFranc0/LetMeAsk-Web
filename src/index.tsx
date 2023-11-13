import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./services/firebase"
import "./styles/global.scss"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)



// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
