import React from "react";
import Form from "./components/Form";
import tower from "./towers";
import floors from "./floors";
import confRoom from "./confRoom";

function App() {
  return (
      <div className="App">
        <div className="img-logo">
          <p className="title">
            <img width={30} height={30} src="/img/vk-logo.png" alt="logo"/>
            Форма бронирования
          </p>
          <img src="/img/backLogo.svg" alt="picture"/>
        </div>
        <div className="form">
          <Form towers={tower} floors={floors} confRooms={confRoom}/>
        </div>
      </div>
  )
}

export default App;
