import n from '../../node_modules/rollup-plugin-styles/dist/runtime/inject-css.js';
var css = "/* Input.module.css */\n.Input_module_input__0a6afa82 {\n  font-family: 'Acme';\n  border: 3px solid #000205;\n  font-size: 2.4rem;\n  border-radius: 0;\n  box-shadow: 5px 5px black;\n  outline: 0;\n  padding: 0.4rem 0.4rem 0.4rem 0.8rem;\n  transition: 0.2s;\n}\n\n.Input_module_input__0a6afa82::placeholder {\n  color: #838383;\n  font-family: 'Acme';\n}\n\n.Input_module_input__label__0a6afa82 {\n  font-family: 'Acme';\n  font-size: 1.8rem;\n  margin-bottom: 0.4rem;\n  display: block;\n}\n\n.Input_module_input__0a6afa82:focus {\n  border: 3px solid #002356;\n  box-shadow: 5px 5px #002356;\n}\n\n.Input_module_error__0a6afa82 {\n  margin-top: 1rem;\n  font-family: 'Acme';\n  color: red;\n  font-size: 1.4rem;\n}\n";
var modules_d963aab3 = {
  "input": "Input_module_input__0a6afa82",
  "input__label": "Input_module_input__label__0a6afa82",
  "error": "Input_module_error__0a6afa82"
};
n(css, {});
export { css, modules_d963aab3 as default };
//# sourceMappingURL=Input.module.css.js.map
