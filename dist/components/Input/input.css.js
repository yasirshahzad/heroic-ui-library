import n from '../../node_modules/rollup-plugin-styles/dist/runtime/inject-css.js';
var css = "/* Input filed */\n.input {\n  font-family: 'Acme';\n  border: 3px solid #000205;\n  font-size: 2.4rem;\n  border-radius: 0;\n  box-shadow: 5px 5px black;\n  outline: 0;\n  padding: 0.4rem 0.4rem 0.4rem 0.8rem;\n  transition: 0.2s;\n}\n.input::placeholder {\n  color: #838383;\n  font-family: 'Acme';\n}\n/* Input Filed Label */\n.input__label {\n  font-family: 'Acme';\n  font-size: 1.8rem;\n  margin-bottom: 0.4rem;\n  display: block;\n}\n.input:focus {\n  border: 3px solid #002356;\n  box-shadow: 5px 5px #002356;\n}\n\n/* Error */\n.error {\n  margin-top: 1rem;\n  font-family: 'Acme';\n  color: red;\n  font-size: 1.4rem;\n}\n";
n(css, {});
export { css, css as default };
//# sourceMappingURL=Input.css.js.map
