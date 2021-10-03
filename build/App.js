import React from "./_snowpack/pkg/react.js";
import "./css/style.css.proxy.js";
import PetTile from "./PetTile.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pets: []};
    this.load();
  }
  load() {
    fetch("/get", {method: "get", "no-cors": true}).then((response) => response.json()).then((json) => {
      console.log(json);
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
    }, /* @__PURE__ */ React.createElement("option", null, "Dog"), /* @__PURE__ */ React.createElement("option", null, "Cat"), /* @__PURE__ */ React.createElement("option", null, "Snake"), /* @__PURE__ */ React.createElement("option", null, "Bird"), /* @__PURE__ */ React.createElement("option", null, "Other"))), /* @__PURE__ */ React.createElement("button", {
      id: "createPet"
    }, "Post That Pet!")), /* @__PURE__ */ React.createElement("ul", {
      id: "gallery"
    }, this.state.pets.map((pet, i) => /* @__PURE__ */ React.createElement(PetTile, {
      name: pet.name,
      image: pet.link,
      call: pet.call,
      id: pet.id
    }))));
  }
}
export default App;
