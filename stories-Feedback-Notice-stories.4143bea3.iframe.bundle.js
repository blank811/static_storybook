"use strict";(self.webpackChunkdr_pe_ui_storybook=self.webpackChunkdr_pe_ui_storybook||[]).push([[6086],{"./src/stories/Feedback/Notice.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ErrorNoIcon:()=>ErrorNoIcon,InfoWhenNoAutoClose:()=>InfoWhenNoAutoClose,Success:()=>Success,WarningNoMouseLeaveClose:()=>WarningNoMouseLeaveClose,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_zmz_Documents_GitHub_dr_Front_ComponentStoryBook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Components_Feedback_notice__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Components/Feedback/notice/index.tsx"),_Components_Buttons_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Components/Buttons/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/Notice",argTypes:{title:{description:"type of React.ReactNode",type:{required:!0}},description:{description:"type of React.ReactNode",type:{required:!0}},type:{description:"Notice type",control:{type:"radio"},options:["success","info","warning","error"]},duration:{description:"type of number,ms value",defaultValue:5e3,control:{type:"number"}},onClose:{description:"type of ()=>void | undefined, this is close function"},showIcon:{description:"type of boolean",defaultValue:!0,control:{type:"boolean"}},confirm:{description:"type of {\n                content:React.ReactNode,\n                },\n            cancel of this component cancel button",control:{type:"text"}},cancel:{description:"type of {\n                content:React.ReactNode,\n                },\n            cancel of this component cancel button",control:{type:"text"}},autoClose:{description:"auto close,type of boolean",defaultValue:!0,control:{type:"boolean"}},closeWhenLeave:{description:"auto close when mouse leave,type of boolean",defaultValue:!0,control:{type:"boolean"}},onClick:{description:"onClick"},position:{description:"Notice position",control:{type:"radio"},defaultValue:"right",options:["left","right"]}}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_Buttons_Button__WEBPACK_IMPORTED_MODULE_1__.z,{type:"none",height:"2.5rem",width:"10rem",label:"click",onClick:function fn(){switch(args.type){case"success":_Components_Feedback_notice__WEBPACK_IMPORTED_MODULE_0__.Z.success((0,C_Users_zmz_Documents_GitHub_dr_Front_ComponentStoryBook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args));break;case"info":_Components_Feedback_notice__WEBPACK_IMPORTED_MODULE_0__.Z.info((0,C_Users_zmz_Documents_GitHub_dr_Front_ComponentStoryBook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args));break;case"warning":_Components_Feedback_notice__WEBPACK_IMPORTED_MODULE_0__.Z.warning((0,C_Users_zmz_Documents_GitHub_dr_Front_ComponentStoryBook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args));break;case"error":_Components_Feedback_notice__WEBPACK_IMPORTED_MODULE_0__.Z.error((0,C_Users_zmz_Documents_GitHub_dr_Front_ComponentStoryBook_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args))}}})})},Success=Template.bind({});Success.args={type:"success",title:"Successfully!",description:"success message",duration:5e3,onClose:function onClose(){console.log("close")},onClick:function onClick(){console.log("onClick")}};var InfoWhenNoAutoClose=Template.bind({});InfoWhenNoAutoClose.args={type:"info",title:"info!",description:"info message",autoClose:!1,confirm:{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"inline-block",marginRight:"2rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_Buttons_Button__WEBPACK_IMPORTED_MODULE_1__.z,{type:"none",height:"2.5rem",width:"10rem",label:"confirm"})})},cancel:{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_Buttons_Button__WEBPACK_IMPORTED_MODULE_1__.z,{height:"2.5rem",width:"10rem",label:"cancel",size:"normal",type:"secondary",onClick:function onClick(){console.log(1213)}})}};var WarningNoMouseLeaveClose=Template.bind({});WarningNoMouseLeaveClose.args={type:"warning",title:"warning!",description:"warning message",closeWhenLeave:!1};var ErrorNoIcon=Template.bind({});ErrorNoIcon.args={type:"error",title:"error!",description:"error message,error message,error message,error message,error message,error message",showIcon:!1};var __namedExportsOrder=["Success","InfoWhenNoAutoClose","WarningNoMouseLeaveClose","ErrorNoIcon"];Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'function Template(args) {\n  var fn = function fn() {\n    switch (args.type) {\n      case "success":\n        Notice.success(_objectSpread({}, args));\n        break;\n      case "info":\n        Notice.info(_objectSpread({}, args));\n        break;\n      case "warning":\n        Notice.warning(_objectSpread({}, args));\n        break;\n      case "error":\n        Notice.error(_objectSpread({}, args));\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsx("div", {\n    children: /*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    })\n  });\n}',...Success.parameters?.docs?.source},description:{story:"normal notification",...Success.parameters?.docs?.description}}},InfoWhenNoAutoClose.parameters={...InfoWhenNoAutoClose.parameters,docs:{...InfoWhenNoAutoClose.parameters?.docs,source:{originalSource:'function Template(args) {\n  var fn = function fn() {\n    switch (args.type) {\n      case "success":\n        Notice.success(_objectSpread({}, args));\n        break;\n      case "info":\n        Notice.info(_objectSpread({}, args));\n        break;\n      case "warning":\n        Notice.warning(_objectSpread({}, args));\n        break;\n      case "error":\n        Notice.error(_objectSpread({}, args));\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsx("div", {\n    children: /*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    })\n  });\n}',...InfoWhenNoAutoClose.parameters?.docs?.source},description:{story:"info notification",...InfoWhenNoAutoClose.parameters?.docs?.description}}},WarningNoMouseLeaveClose.parameters={...WarningNoMouseLeaveClose.parameters,docs:{...WarningNoMouseLeaveClose.parameters?.docs,source:{originalSource:'function Template(args) {\n  var fn = function fn() {\n    switch (args.type) {\n      case "success":\n        Notice.success(_objectSpread({}, args));\n        break;\n      case "info":\n        Notice.info(_objectSpread({}, args));\n        break;\n      case "warning":\n        Notice.warning(_objectSpread({}, args));\n        break;\n      case "error":\n        Notice.error(_objectSpread({}, args));\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsx("div", {\n    children: /*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    })\n  });\n}',...WarningNoMouseLeaveClose.parameters?.docs?.source},description:{story:"waring notification",...WarningNoMouseLeaveClose.parameters?.docs?.description}}},ErrorNoIcon.parameters={...ErrorNoIcon.parameters,docs:{...ErrorNoIcon.parameters?.docs,source:{originalSource:'function Template(args) {\n  var fn = function fn() {\n    switch (args.type) {\n      case "success":\n        Notice.success(_objectSpread({}, args));\n        break;\n      case "info":\n        Notice.info(_objectSpread({}, args));\n        break;\n      case "warning":\n        Notice.warning(_objectSpread({}, args));\n        break;\n      case "error":\n        Notice.error(_objectSpread({}, args));\n        break;\n    }\n  };\n  return /*#__PURE__*/_jsx("div", {\n    children: /*#__PURE__*/_jsx(Button, {\n      type: "none",\n      height: "2.5rem",\n      width: "10rem",\n      label: "click",\n      onClick: fn\n    })\n  });\n}',...ErrorNoIcon.parameters?.docs?.source},description:{story:"error notification",...ErrorNoIcon.parameters?.docs?.description}}};try{Success.displayName="Success",Success.__docgenInfo={description:"normal notification",displayName:"Success",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Notice.stories.tsx#Success"]={docgenInfo:Success.__docgenInfo,name:"Success",path:"src/stories/Feedback/Notice.stories.tsx#Success"})}catch(__react_docgen_typescript_loader_error){}try{InfoWhenNoAutoClose.displayName="InfoWhenNoAutoClose",InfoWhenNoAutoClose.__docgenInfo={description:"info notification",displayName:"InfoWhenNoAutoClose",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Notice.stories.tsx#InfoWhenNoAutoClose"]={docgenInfo:InfoWhenNoAutoClose.__docgenInfo,name:"InfoWhenNoAutoClose",path:"src/stories/Feedback/Notice.stories.tsx#InfoWhenNoAutoClose"})}catch(__react_docgen_typescript_loader_error){}try{WarningNoMouseLeaveClose.displayName="WarningNoMouseLeaveClose",WarningNoMouseLeaveClose.__docgenInfo={description:"waring notification",displayName:"WarningNoMouseLeaveClose",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Notice.stories.tsx#WarningNoMouseLeaveClose"]={docgenInfo:WarningNoMouseLeaveClose.__docgenInfo,name:"WarningNoMouseLeaveClose",path:"src/stories/Feedback/Notice.stories.tsx#WarningNoMouseLeaveClose"})}catch(__react_docgen_typescript_loader_error){}try{ErrorNoIcon.displayName="ErrorNoIcon",ErrorNoIcon.__docgenInfo={description:"error notification",displayName:"ErrorNoIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Feedback/Notice.stories.tsx#ErrorNoIcon"]={docgenInfo:ErrorNoIcon.__docgenInfo,name:"ErrorNoIcon",path:"src/stories/Feedback/Notice.stories.tsx#ErrorNoIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);