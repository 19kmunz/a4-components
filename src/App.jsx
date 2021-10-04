
import React from "react";
import './css/style.css';


class PetTile extends React.Component {
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
          <button id={this.props.id} onClick={e => {this.change}}
                  className="delete">Delete
          </button>
        </li>
    );
  }

  change(e) {
    this.props.onclick(this.props.id)
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pets: []}
    this.load()
  }
  load() {
    console.log("LOADING")
    fetch( '/get', { method:'get', 'no-cors':true })
    .then( response => response.json() )
    .then( json => {
      console.log("GOT: " + JSON.stringify(json))
      this.setState({ pets: json })
    })
  }
  addEntry(e) {
    e.preventDefault();

    const name = document.querySelector( 'input[name="name"]' ),
        link = document.querySelector( 'input[name="link"]' ),
        type = document.querySelector( 'select[name="type"]' ),
        json = { name: name.value, link: link.value, type: type.value },
        body = JSON.stringify( json );

    console.log(body);
    fetch( '/create', {
      method:'POST',
      'no-cors':true,
      body: body
    })
    .then( function( response ) {
      return response.json();
    })
    .then( function(state) {
      console.log("POSTED: " + JSON.stringify(state))
      this.setState({ pets: state })
    });
  }

  deleteEntry (clickedId) {
    console.log("Delete ID: " + clickedId);
    const body = JSON.stringify({"id": clickedId});
    fetch( '/delete', {
      method:'POST',
      'no-cors':true,
      body: body
    })
    .then( function( response ) {
      return response.json();
    })
    .then( function(json) {
      console.log("DELETED: " + JSON.stringify(json));
      this.setState({ pets: json })
    });
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
          { this.state.pets.map( (pet, i) => <PetTile name={pet.name} image={pet.link} call={pet.call} id={pet._id} onclick={() => { this.deleteEntry }}/> ) }
        </ul>
      </>
    );
  }
}

export default App;
