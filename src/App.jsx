
import React from "react";
import './css/style.css';

class App extends React.Component {
  render() {
    const { name } = this.props;
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
          <li>
            <figure>
              <img className="petTile"
                   src="https://cdn.discordapp.com/attachments/428381972545404928/884522236025913374/image0.jpg"
                   alt="Cute picture of Pippi"/>
                <figcaption>Pippi says WOOF</figcaption>
            </figure>
            <button id="1" onClick="deleteEntry(this.id)"
                    className="delete">Delete
            </button>
          </li>
          <li>
            <figure>
              <img className="petTile"
                   src="https://cdn.discordapp.com/attachments/428381972545404928/884522261237882910/image0.jpg"
                   alt="Cute picture of Mordecai"/>
                <figcaption>Mordecai says MEOW</figcaption>
            </figure>
            <button id="2" onClick="deleteEntry(this.id)"
                    className="delete">Delete
            </button>
          </li>
          <li>
            <figure>
              <img className="petTile" src="https://i.imgur.com/Db4cRax.png"
                   alt="Cute picture of Bubba"/>
                <figcaption>Bubba says HI</figcaption>
            </figure>
            <button id="3" onClick="deleteEntry(this.id)"
                    className="delete">Delete
            </button>
          </li>
        </ul>
      </>
    );
  }
}

export default App;
