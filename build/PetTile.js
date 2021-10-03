import React from "./_snowpack/pkg/react.js";
class PetTile extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("img", {
      className: "petTile",
      src: this.props.image,
      alt: "Cute picture of " + this.props.name
    }), /* @__PURE__ */ React.createElement("figcaption", null, this.props.name, " says ", this.props.call)), /* @__PURE__ */ React.createElement("button", {
      id: this.props.id,
      onClick: "deleteEntry(this.id)",
      className: "delete"
    }, "Delete"));
  }
}
export default PetTile;
