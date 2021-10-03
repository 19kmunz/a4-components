
import React from "react";
import './css/style.css';
import PetTile from "./PetTile.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pets: []}
    this.load()
  }
  load() {
    fetch( '/get', { method:'get', 'no-cors':true })
    .then( response => response.json() )
    .then( json => {
      console.log(json);
      this.setState({ pets: json })
    })
  }
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
          { this.state.pets.map( (pet, i) => <PetTile name={pet.name} image={pet.link} call={pet.call} id={pet.id}/> ) }
        </ul>
      </>
    );
  }
}

export default App;
