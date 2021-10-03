import React from 'react';

class PetTile extends React.Component {
  render() {
    return (
      <li>
        <figure>
          <img className="petTile"
               src={this.props.image}
               alt={"Cute picture of " + this.props.name} />
          <figcaption>{this.props.name} says {this.props.call}</figcaption>
        </figure>
        <button id={this.props.id} onClick="deleteEntry(this.id)"
                className="delete">Delete
        </button>
      </li>
    )
  }

  /*deleteEntry (clickedId) {
    const body = JSON.stringify({"id": clickedId});
    fetch( '/delete', {
      method:'POST',
      body
    })
    .then( function( response ) {
      return response.json();
    })
    .then( function(json) {
      this.setState({ json })
    })
  }*/
}

export default PetTile;