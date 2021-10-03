import React from "./_snowpack/pkg/react.js";
import "./css/style.css.proxy.js";
import PetTile from "./PetTile.js";
class App extends React.Component {
  render() {
    const {name} = this.props;
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
    }, /* @__PURE__ */ React.createElement(PetTile, {
      name: "Pippi",
      image: "https://cdn.discordapp.com/attachments/428381972545404928/884522236025913374/image0.jpg",
      call: "WOOF",
      id: "1"
    }), /* @__PURE__ */ React.createElement(PetTile, {
      name: "Mordecai",
      image: "https://cdn.discordapp.com/attachments/428381972545404928/884522261237882910/image0.jpg",
      call: "MEOW",
      id: "2"
    }), /* @__PURE__ */ React.createElement(PetTile, {
      name: "Bubba",
      image: "https://i.imgur.com/Db4cRax.png",
      call: "I LOVE YOU",
      id: "3"
    })));
  }
}
export default App;
