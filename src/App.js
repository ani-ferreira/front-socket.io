
import io from "socket.io-client"
import { useEffect } from "react"



//paso el url del socket del server
//conexion con el socket server 
//tenemos una conexion para emit o listen to events 
const socket = io.connect("http://localhost:3001")

function App() {

  //utilizamos esa conexion para enviar/emit un mensaje
  //va a ser recibido por el back, 
  //y va a emitir otro mensaje para q sea recibido
  //el back es necesario como layer para conectar los events

const sendMessage = () =>{
  //le damos nombre al evento q emitimos
  //y podemos mandar data 
  //el back tiene q escuchar el evento con este nombre para recibirlo
socket.emit("send-message", {message: "Hello"})
}

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
