/*! For license information please see src-components-Notification-Notification-story.f314e690.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkheroic_ui_library=self.webpackChunkheroic_ui_library||[]).push([[519],{"./src/components/Notification/Notification.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExlaminationMark:()=>ExlaminationMark,NumericalCounter:()=>NumericalCounter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Presentation/Notification",component:__webpack_require__("./src/components/Notification/Notification.tsx").Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{size:"radio",options:["green","orange"]}}},NumericalCounter={args:{counter:23,color:"green"}},ExlaminationMark={args:{mark:!0,color:"orange"}};NumericalCounter.parameters={...NumericalCounter.parameters,docs:{...NumericalCounter.parameters?.docs,source:{originalSource:"{\n  args: {\n    counter: 23,\n    color: 'green'\n  }\n}",...NumericalCounter.parameters?.docs?.source}}},ExlaminationMark.parameters={...ExlaminationMark.parameters,docs:{...ExlaminationMark.parameters?.docs,source:{originalSource:"{\n  args: {\n    mark: true,\n    color: 'orange'\n  }\n}",...ExlaminationMark.parameters?.docs?.source}}};const __namedExportsOrder=["NumericalCounter","ExlaminationMark"]},"./src/components/Notification/Notification.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Notification_Notification});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Notification_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Notification/Notification.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Notification_module.Z,options);const Notification_Notification_module=Notification_module.Z&&Notification_module.Z.locals?Notification_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Notification=_ref=>{let{color,counter,mark}=_ref;return(0,jsx_runtime.jsx)("div",{className:[Notification_Notification_module.notification,Notification_Notification_module[`notification--${color}`]].join(" "),children:(0,jsx_runtime.jsx)("div",{className:Notification_Notification_module.text,children:mark?"!":counter})})};Notification.displayName="Notification";const Notification_Notification=Notification;try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"green"'},{value:'"orange"'}]}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"number"}},mark:{defaultValue:null,description:"",name:"mark",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notification/Notification.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"src/components/Notification/Notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Notification/Notification.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/assets/notification/Notification_green.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/assets/notification/Notification_orange.svg"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);___CSS_LOADER_EXPORT___.push([module.id,`/* Notification.module.css */\n.pr55WxxYYuDHYY7uIo4Q {\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  min-width: 5rem;\n  min-height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.FlTnB_dwWHVAKXLLhFTq {\n  text-align: center;\n  line-height: 1.5;\n  font-size: 3rem;\n  text-shadow: 1px 1px black;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  color: white;\n  font-family: 'Brady Bunch Remastered';\n  padding: 0rem 2rem;\n}\n\n.YnBCoETacZfM2kszMKfv {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n.q2hzsy5nFC5QryTTVUBC {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n`,"",{version:3,sources:["webpack://./src/components/Notification/Notification.module.css"],names:[],mappings:"AAAA,4BAA4B;AAC5B;EACE,4BAA4B;EAC5B,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,0BAA0B;EAC1B,8BAA8B;EAC9B,gCAAgC;EAChC,YAAY;EACZ,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,yDAAyE;AAC3E;;AAEA;EACE,yDAA0E;AAC5E",sourcesContent:["/* Notification.module.css */\n.notification {\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  min-width: 5rem;\n  min-height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.text {\n  text-align: center;\n  line-height: 1.5;\n  font-size: 3rem;\n  text-shadow: 1px 1px black;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  color: white;\n  font-family: 'Brady Bunch Remastered';\n  padding: 0rem 2rem;\n}\n\n.notification--green {\n  background-image: url('../../assets/notification/Notification_green.svg');\n}\n\n.notification--orange {\n  background-image: url('../../assets/notification/Notification_orange.svg');\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={notification:"pr55WxxYYuDHYY7uIo4Q",text:"FlTnB_dwWHVAKXLLhFTq","notification--green":"YnBCoETacZfM2kszMKfv","notification--orange":"q2hzsy5nFC5QryTTVUBC"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/assets/notification/Notification_green.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/Notification_green.80f1120a.svg"},"./src/assets/notification/Notification_orange.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/Notification_orange.9eff134a.svg"}}]);