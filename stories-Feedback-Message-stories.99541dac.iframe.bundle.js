"use strict";(self.webpackChunkdr_pe_ui_storybook=self.webpackChunkdr_pe_ui_storybook||[]).push([[5069],{"./src/stories/Feedback/Message.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomMessageArgs:()=>BottomMessageArgs,BottomMessageArgs2:()=>BottomMessageArgs2,RightError:()=>RightError,RightInfo:()=>RightInfo,RightNone:()=>RightNone,RightSuccess:()=>RightSuccess,RightWarning:()=>RightWarning,TopError:()=>TopError,TopInfo:()=>TopInfo,TopNone:()=>TopNone,TopSuccess:()=>TopSuccess,TopWarning:()=>TopWarning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_zmz_Documents_GitHub_dr_Front_ComponentStoryBook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Components_Feedback_Message__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Components/Feedback/Message/index.ts"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/Message",parameters:{docs:{source:{type:"code"}}}};var Template=function Template(args){var handler=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.zxk,{type:"none",height:"2.5rem",width:"10rem",label:"click",onClick:function fn(){switch(args.position){case"auto":_Components_Feedback_Message__WEBPACK_IMPORTED_MODULE_0__.Z.auto(args);break;case"top":_Components_Feedback_Message__WEBPACK_IMPORTED_MODULE_0__.Z.top(args);break;case"right":_Components_Feedback_Message__WEBPACK_IMPORTED_MODULE_0__.Z.right((0,C_Users_zmz_Documents_GitHub_dr_Front_ComponentStoryBook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,C_Users_zmz_Documents_GitHub_dr_Front_ComponentStoryBook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},args),{},{persist:!0,bindSetVisibleStatus:function bindSetVisibleStatus(handleEvent){handler.current=handleEvent}}));break;case"bottom":_Components_Feedback_Message__WEBPACK_IMPORTED_MODULE_0__.Z.bottom(args)}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function onClick(){var _handler$current;null===(_handler$current=handler.current)||void 0===_handler$current||_handler$current.call(handler,!1)},children:"自定义关闭"})]})},TopSuccess={args:{type:"success",position:"top",content:"this is success message",onClose:function onClose(){console.log("close")},onClick:function onClick(){console.log("click")},ref:function ref(el){console.log(el)},duration:3e3,style:{boxSizing:"border-box"},icon:null},render:Template},TopInfo=Template.bind({});TopInfo.args={type:"info",position:"top",duration:5e3,content:"custom icon"};var TopWarning=Template.bind({});TopWarning.args={type:"warning",position:"top",content:"this is warn message"};var TopError=Template.bind({});TopError.args={type:"error",content:"this is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error messagethis is error message",position:"top"};var TopNone=Template.bind({});TopNone.args={type:"none",content:"this is none message",duration:5e3,position:"top"};var RightSuccess=Template.bind({});RightSuccess.args={type:"success",position:"right",content:"this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message,this is success message",onClose:function onClose(){console.log("close")},onClick:function onClick(){console.log("click")},duration:1e3,ref:function ref(el){console.log(el)},style:{boxSizing:"border-box"}};var RightInfo=Template.bind({});RightInfo.args={type:"info",position:"right",duration:5e3,content:"custom icon"};var RightWarning=Template.bind({});RightWarning.args={type:"warning",position:"right",content:"custom icon,custom close icon",duration:5e3,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.JO$,{type:"warningTriangle",style:{fontSize:"1.6rem",color:"rgba(0,255,255,0.5)"}}),closeIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.JO$,{type:"closeDetails",style:{fontSize:"1.6rem",color:"rgba(255,0,255,0.5)"}})};var RightError=Template.bind({});RightError.args={type:"error",content:"this is error message",position:"right"};var RightNone=Template.bind({});RightNone.args={type:"none",content:"this is none message",duration:5e3,position:"right"};var BottomMessageArgs=Template.bind({});BottomMessageArgs.args={content:"this is bottom message",duration:5e3,position:"bottom"};var BottomMessageArgs2=Template.bind({});BottomMessageArgs2.args={content:"this is bottom message3,this is bottom message3,this is bottom message3,this is bottom message3,this is bottom message3,this is bottom message3",duration:1e3,position:"bottom"};var __namedExportsOrder=["TopSuccess","TopInfo","TopWarning","TopError","TopNone","RightSuccess","RightInfo","RightWarning","RightError","RightNone","BottomMessageArgs","BottomMessageArgs2"];TopSuccess.parameters={...TopSuccess.parameters,docs:{...TopSuccess.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "success",\n    position: "top",\n    content: "this is success message",\n    onClose: function onClose() {\n      console.log("close");\n    },\n    onClick: function onClick() {\n      console.log("click");\n    },\n    ref: function ref(el) {\n      console.log(el);\n    },\n    duration: 3000,\n    style: {\n      boxSizing: "border-box"\n    },\n    icon: null\n  },\n  render: Template\n}',...TopSuccess.parameters?.docs?.source},description:{story:"normal notification",...TopSuccess.parameters?.docs?.description}}},TopInfo.parameters={...TopInfo.parameters,docs:{...TopInfo.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...TopInfo.parameters?.docs?.source},description:{story:"info notification",...TopInfo.parameters?.docs?.description}}},TopWarning.parameters={...TopWarning.parameters,docs:{...TopWarning.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...TopWarning.parameters?.docs?.source},description:{story:"waring notification",...TopWarning.parameters?.docs?.description}}},TopError.parameters={...TopError.parameters,docs:{...TopError.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...TopError.parameters?.docs?.source},description:{story:"error notification",...TopError.parameters?.docs?.description}}},TopNone.parameters={...TopNone.parameters,docs:{...TopNone.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...TopNone.parameters?.docs?.source},description:{story:"top none",...TopNone.parameters?.docs?.description}}},RightSuccess.parameters={...RightSuccess.parameters,docs:{...RightSuccess.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...RightSuccess.parameters?.docs?.source},description:{story:"right success",...RightSuccess.parameters?.docs?.description}}},RightInfo.parameters={...RightInfo.parameters,docs:{...RightInfo.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...RightInfo.parameters?.docs?.source},description:{story:"right info notification",...RightInfo.parameters?.docs?.description}}},RightWarning.parameters={...RightWarning.parameters,docs:{...RightWarning.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...RightWarning.parameters?.docs?.source},description:{story:"right waring notification",...RightWarning.parameters?.docs?.description}}},RightError.parameters={...RightError.parameters,docs:{...RightError.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...RightError.parameters?.docs?.source},description:{story:"error notification",...RightError.parameters?.docs?.description}}},RightNone.parameters={...RightNone.parameters,docs:{...RightNone.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...RightNone.parameters?.docs?.source},description:{story:"top none",...RightNone.parameters?.docs?.description}}},BottomMessageArgs.parameters={...BottomMessageArgs.parameters,docs:{...BottomMessageArgs.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...BottomMessageArgs.parameters?.docs?.source},description:{story:"bottom",...BottomMessageArgs.parameters?.docs?.description}}},BottomMessageArgs2.parameters={...BottomMessageArgs2.parameters,docs:{...BottomMessageArgs2.parameters?.docs,source:{originalSource:'function Template(args) {\n  var handler = useRef();\n  var fn = function fn() {\n    switch (args.position) {\n      case "auto":\n        // It can decide for itself whether to use top or right\n        Message.auto(args);\n        break;\n      case "top":\n        // For mobile\n        Message.top(args);\n        break;\n      case "right":\n        // For PC\n        Message.right(_objectSpread(_objectSpread({}, args), {}, {\n          persist: true,\n          bindSetVisibleStatus: function bindSetVisibleStatus(handleEvent) {\n            handler.current = handleEvent;\n          }\n        }));\n        break;\n      case "bottom":\n        Message.bottom(args);\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsxs("div", {\n    children: [/*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    }), /*#__PURE__*/_jsx("button", {\n      onClick: function onClick() {\n        var _handler$current;\n        (_handler$current = handler.current) === null || _handler$current === void 0 ? void 0 : _handler$current.call(handler, false);\n      },\n      children: "\\u81EA\\u5B9A\\u4E49\\u5173\\u95ED"\n    })]\n  });\n}',...BottomMessageArgs2.parameters?.docs?.source}}};try{TopSuccess.displayName="TopSuccess",TopSuccess.__docgenInfo={description:"normal notification",displayName:"TopSuccess",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#TopSuccess"]={docgenInfo:TopSuccess.__docgenInfo,name:"TopSuccess",path:"src/stories/Feedback/Message.stories.tsx#TopSuccess"})}catch(__react_docgen_typescript_loader_error){}try{TopInfo.displayName="TopInfo",TopInfo.__docgenInfo={description:"info notification",displayName:"TopInfo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#TopInfo"]={docgenInfo:TopInfo.__docgenInfo,name:"TopInfo",path:"src/stories/Feedback/Message.stories.tsx#TopInfo"})}catch(__react_docgen_typescript_loader_error){}try{TopWarning.displayName="TopWarning",TopWarning.__docgenInfo={description:"waring notification",displayName:"TopWarning",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#TopWarning"]={docgenInfo:TopWarning.__docgenInfo,name:"TopWarning",path:"src/stories/Feedback/Message.stories.tsx#TopWarning"})}catch(__react_docgen_typescript_loader_error){}try{TopError.displayName="TopError",TopError.__docgenInfo={description:"error notification",displayName:"TopError",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#TopError"]={docgenInfo:TopError.__docgenInfo,name:"TopError",path:"src/stories/Feedback/Message.stories.tsx#TopError"})}catch(__react_docgen_typescript_loader_error){}try{TopNone.displayName="TopNone",TopNone.__docgenInfo={description:"top none",displayName:"TopNone",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#TopNone"]={docgenInfo:TopNone.__docgenInfo,name:"TopNone",path:"src/stories/Feedback/Message.stories.tsx#TopNone"})}catch(__react_docgen_typescript_loader_error){}try{RightSuccess.displayName="RightSuccess",RightSuccess.__docgenInfo={description:"right success",displayName:"RightSuccess",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#RightSuccess"]={docgenInfo:RightSuccess.__docgenInfo,name:"RightSuccess",path:"src/stories/Feedback/Message.stories.tsx#RightSuccess"})}catch(__react_docgen_typescript_loader_error){}try{RightInfo.displayName="RightInfo",RightInfo.__docgenInfo={description:"right info notification",displayName:"RightInfo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#RightInfo"]={docgenInfo:RightInfo.__docgenInfo,name:"RightInfo",path:"src/stories/Feedback/Message.stories.tsx#RightInfo"})}catch(__react_docgen_typescript_loader_error){}try{RightWarning.displayName="RightWarning",RightWarning.__docgenInfo={description:"right waring notification",displayName:"RightWarning",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#RightWarning"]={docgenInfo:RightWarning.__docgenInfo,name:"RightWarning",path:"src/stories/Feedback/Message.stories.tsx#RightWarning"})}catch(__react_docgen_typescript_loader_error){}try{RightError.displayName="RightError",RightError.__docgenInfo={description:"error notification",displayName:"RightError",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#RightError"]={docgenInfo:RightError.__docgenInfo,name:"RightError",path:"src/stories/Feedback/Message.stories.tsx#RightError"})}catch(__react_docgen_typescript_loader_error){}try{RightNone.displayName="RightNone",RightNone.__docgenInfo={description:"top none",displayName:"RightNone",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#RightNone"]={docgenInfo:RightNone.__docgenInfo,name:"RightNone",path:"src/stories/Feedback/Message.stories.tsx#RightNone"})}catch(__react_docgen_typescript_loader_error){}try{BottomMessageArgs.displayName="BottomMessageArgs",BottomMessageArgs.__docgenInfo={description:"bottom",displayName:"BottomMessageArgs",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Message.stories.tsx#BottomMessageArgs"]={docgenInfo:BottomMessageArgs.__docgenInfo,name:"BottomMessageArgs",path:"src/stories/Feedback/Message.stories.tsx#BottomMessageArgs"})}catch(__react_docgen_typescript_loader_error){}}}]);