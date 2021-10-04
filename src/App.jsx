
import React from "react";
import './css/style.css';


class PetTile extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.change = this.change.bind(this);
  }

  render()
  {
    return (
        <li>
          <figure>
            <img className="petTile"
                 src={this.props.image}
                 alt={"Cute picture of " + this.props.name}/>
            <figcaption>{this.props.name} says {this.props.call}</figcaption>
          </figure>
          <button id={this.props.id} onClick={this.change}
                  className="delete">Delete
          </button>
        </li>
    );
  }

  change() {
    this.props.onclick(this.props.id)
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pets: []}
    this.addEntry = this.addEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.load()
  }
  load() {
    fetch( '/get', { method:'get', 'no-cors':true })
    .then( response => response.json() )
    .then( json => {
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
              <option>Snake</option>
              <option>Bird</option>
              <option>Other</option>
            </select>
          </label>
          <button id="createPet" onClick={ e => this.addEntry(e) }>Post That Pet!</button>
        </form>
        <ul id="gallery">
          { this.state.pets.map( (pet, i) => <PetTile name={pet.name} image={pet.link} call={pet.call} id={pet._id} onclick={this.deleteEntry}/> ) }
        </ul>
      </>
    );
  }

  addEntry(e) {
    e.preventDefault();

    const name = document.querySelector( 'input[name="name"]' ),
        link = document.querySelector( 'input[name="link"]' ),
        type = document.querySelector( 'select[name="type"]' ),
        json = { name: name.value, link: link.value, type: type.value },
        body = JSON.stringify( json );

    fetch( '/create', {
      method:'POST',
      body: body,
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then( function( response ) {
      return response.json();
    })
    .then( arg => {
      this.setState({ pets: arg })
    });
  }

  deleteEntry (clickedId) {
    const body = JSON.stringify({"id": clickedId});
    fetch( '/delete', {
      method:'POST',
      body: body,
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then( function( response ) {
      return response.json();
    })
    .then( json => {
      this.setState({ pets: json })
    });
  }
}

export default App;
