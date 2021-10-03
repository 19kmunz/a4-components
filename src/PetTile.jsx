import React from 'react';

class PetTile extends React.Component {
  render() {
    return (
      <li>
        <figure>
          <img className="petTile"
               src={this.props.image}
               alt={"Cute picture of" + this.props.name} />
          <figcaption>{this.props.name} says {this.props.call}</figcaption>
        </figure>
        <button id={this.props.id} onClick="deleteEntry(this.id)"
                className="delete">Delete
        </button>
      </li>
    )
  }
}

export default PetTile;