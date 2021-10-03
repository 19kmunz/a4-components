
import React from "react";
import './css/style.css';
import PetTile from "./PetTile.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Pet Gallery!</h1>
        <form action="">
          <label>Pet Name: <input name="name"/></label>
          <label>Image Link: <input name="link"/></label>
          <label>Pet Type:
            <select name="type">
              <option>Dog</option>
              <option>Cat</option>
              <option>Snake</option>
              <option>Bird</option>
              <option>Other</option>
            </select>
          </label>
          <button id="createPet">Post That Pet!</button>
        </form>
        <ul id="gallery">
          <PetTile name="Pippi" image="https://cdn.discordapp.com/attachments/428381972545404928/884522236025913374/image0.jpg" call="WOOF" id="1"/>
          <PetTile name="Mordecai" image="https://cdn.discordapp.com/attachments/428381972545404928/884522261237882910/image0.jpg" call="MEOW" id="2"/>
          <PetTile name="Bubba" image="https://i.imgur.com/Db4cRax.png" call="I LOVE YOU" id="3"/>
        </ul>
      </>
    );
  }
}

export default App;
