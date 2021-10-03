// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/*Style your own assignment! This is fun! */\r\n@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nhtml, body, div, img {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\nh1, form, li{\r\n  text-align: center;\r\n}\r\nbody {\r\n  line-height: 1;\r\n  margin: 0 auto;\r\n  max-width: 60em;\r\n}\r\nul\r\n{\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#gallery {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\nimg {\r\n  width: 150px;\r\n  height:200px;\r\n  object-fit: cover;\r\n}\r\n\r\n\r\nbody, select, button, input {\r\n  font-family: 'Fredoka One', cursive;\r\n}\r\nbutton {\r\n  background-color: black;\r\n  border: none;\r\n  color: white;\r\n  padding: 5px 7px;\r\n}\r\nselect {\r\n  border: none;\r\n  background-color: black;\r\n  color: white;\r\n  padding: 5px 7px;\r\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}