import React from "./_snowpack/pkg/react.js";
import "./css/style.css.proxy.js";
class PetTile extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  render() {
    return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      className: "petTile",
      src: this.props.image,
      alt: "Cute picture of " + this.props.name
    }), /* @__PURE__ */ React.createElement("figcaption", null, this.props.name, " says ", this.props.call)), /* @__PURE__ */ React.createElement("button", {
      id: this.props.id,
      onClick: this.change,
      className: "delete"
    }, "Delete"));
  }
  change() {
    console.log("This in Change: " + this);
    this.props.onclick(this.props.id);
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pets: []};
    this.addEntry = this.addEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.load();
  }
  load() {
    console.log("LOADING");
    fetch("/get", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      console.log("GOT: " + JSON.stringify(json));
      this.setState({pets: json});
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Pet Gallery!"), /* @__PURE__ */ React.createElement("form", {
      action: ""
    }, /* @__PURE__ */ React.createElement("label", null, "Pet Name: ", /* @__PURE__ */ React.createElement("input", {
      name: "name"
    })), /* @__PURE__ */ React.createElement("label", null, "Image Link: ", /* @__PURE__ */ React.createElement("input", {
      name: "link"
    })), /* @__PURE__ */ React.createElement("label", null, "Pet Type:", /* @__PURE__ */ React.createElement("select", {
      name: "type"
    }, /* @__PURE__ */ React.createElement("option", null, "Dog"), /* @__PURE__ */ React.createElement("option", null, "Cat"), /* @__PURE__ */ React.createElement("option", null, "Snake"), /* @__PURE__ */ React.createElement("option", null, "Snake"), /* @__PURE__ */ React.createElement("option", null, "Bird"), /* @__PURE__ */ React.createElement("option", null, "Other"))), /* @__PURE__ */ React.createElement("button", {
      id: "createPet",
      onClick: (e) => this.addEntry(e)
    }, "Post That Pet!")), /* @__PURE__ */ React.createElement("ul", {
      id: "gallery"
    }, this.state.pets.map((pet, i) => /* @__PURE__ */ React.createElement(PetTile, {
      name: pet.name,
      image: pet.link,
      call: pet.call,
      id: pet._id,
      onclick: this.deleteEntry
    }))));
  }
  addEntry(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]'), link = document.querySelector('input[name="link"]'), type = document.querySelector('select[name="type"]'), json = {name: name.value, link: link.value, type: type.value}, body = JSON.stringify(json);
    console.log("Add Body: " + body);
    fetch("/create", {
      method: "POST",
      body
    }).then(function(response) {
      return response.json();
    }).then(function(arg) {
      console.log("This in AddEntry: " + this);
      this.setState({pets: arg});
    });
  }
  deleteEntry(clickedId) {
    const body = JSON.stringify({id: clickedId});
    console.log("Delete Body: " + body);
    fetch("/delete", {
      method: "POST",
      body
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log("This in Delete: " + this);
      this.setState({pets: json});
    });
  }
}
export default App;
