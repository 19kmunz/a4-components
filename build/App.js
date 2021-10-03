import React from "./_snowpack/pkg/react.js";
import "./css/style.css.proxy.js";
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
    }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      className: "petTile",
      src: "https://cdn.discordapp.com/attachments/428381972545404928/884522236025913374/image0.jpg",
      alt: "Cute picture of Pippi"
    }), /* @__PURE__ */ React.createElement("figcaption", null, "Pippi says WOOF")), /* @__PURE__ */ React.createElement("button", {
      id: "1",
      onClick: "deleteEntry(this.id)",
      className: "delete"
    }, "Delete")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      className: "petTile",
      src: "https://cdn.discordapp.com/attachments/428381972545404928/884522261237882910/image0.jpg",
      alt: "Cute picture of Mordecai"
    }), /* @__PURE__ */ React.createElement("figcaption", null, "Mordecai says MEOW")), /* @__PURE__ */ React.createElement("button", {
      id: "2",
      onClick: "deleteEntry(this.id)",
      className: "delete"
    }, "Delete")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      className: "petTile",
      src: "https://i.imgur.com/Db4cRax.png",
      alt: "Cute picture of Bubba"
    }), /* @__PURE__ */ React.createElement("figcaption", null, "Bubba says HI")), /* @__PURE__ */ React.createElement("button", {
      id: "3",
      onClick: "deleteEntry(this.id)",
      className: "delete"
    }, "Delete"))));
  }
}
export default App;
