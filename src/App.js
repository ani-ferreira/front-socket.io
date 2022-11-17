import io from "socket.io-client"
import { useEffect } from "react"


//paso el url del socket del server para crear una conexion 
//tenemos una conexion para emit o listen to events 
const socket = io.connect("http://localhost:3001")

function App() {

  //ENVIAR/EMIT DATA AL BACK 
  //el back es necesario como layer para conectar los events

const sendMessage = () =>{
  //le damos nombre al evento q emitimos
  //y enviamos data 
  //el back tiene q escuchar el evento con este nombre para recibirlo
socket.emit("send-message", {message: "Hello"})
}

//RECIBIR DESDE EL BACK
//esta funcion es llamada siempre q se recibe un mensaje
//por eso [socket]
useEffect(()=>{
socket.on("receive_message", (data) =>{
  alert(data.message)
})

},[socket])

  return (
    <div>
     <input placeholder="message"/>
     <button onClick={sendMessage}>send message</button>
    </div>
  );
}

export default App;
