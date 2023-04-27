"use strict";(self.webpackChunkdr_pe_ui_storybook=self.webpackChunkdr_pe_ui_storybook||[]).push([[2352],{"./src/stories/DropdownList/CheckTreeDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultTemp:()=>DefaultTemp,Level1Temp:()=>Level1Temp,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckTreeDropdown_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),Button=__webpack_require__("./src/Components/Buttons/Button/index.tsx"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./src/index.ts"),classNames=__webpack_require__("./src/Unit/classNames.ts"),CheckTree=__webpack_require__("./src/Components/Choose/CheckTree/index.tsx"),DropdownContent=__webpack_require__("./src/Components/Common/DropdownContent/index.tsx");const style_module={checkTreeDropdown_body:"style_checkTreeDropdown_body__63CcQ",checkTreeDropdown_Small:"style_checkTreeDropdown_Small__-23nX",checkTreeDropdown_Middle:"style_checkTreeDropdown_Middle__BXauU",checkTreeDropdown_Large:"style_checkTreeDropdown_Large__RFTno",checkTreeDropdown_ExtraLarge:"style_checkTreeDropdown_ExtraLarge__JIcUF",checkTreeDropdown_scrollBody:"style_checkTreeDropdown_scrollBody__29KQX",checkTreeItem_wrapper:"style_checkTreeItem_wrapper__OpeuL"};var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),NormalButton=__webpack_require__("./src/Components/DropdownList/NormalButton/index.tsx"),DropdownListForCheckTreeParams=(0,react.createContext)({open:!1,disable:!1}),ParamsToCheckTree=(0,react.createContext)({lineHeight:""}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["contentRender"],Temp=function Temp(_ref,ref){var contentRender=_ref.contentRender,props=(0,objectWithoutProperties.Z)(_ref,_excluded),_useDropdownListForCh=function useDropdownListForCheckTreeParams(){return(0,react.useContext)(DropdownListForCheckTreeParams)}(),open=_useDropdownListForCh.open,disable=_useDropdownListForCh.disable,content=void 0;return content=contentRender?null==contentRender?void 0:contentRender():"组件内部完成",(0,jsx_runtime.jsx)(NormalButton.t,(0,objectSpread2.Z)((0,objectSpread2.Z)({active:open,disable},props),{},{ref,children:content}))};const btn=(0,react.forwardRef)(Temp);try{Temp.displayName="Temp",Temp.__docgenInfo={description:"",displayName:"Temp",props:{dropdownIcon:{defaultValue:null,description:"是否有dropdown的icon\n如果有在左边还是在右边\n* 默认值为 undefined",name:"dropdownIcon",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},contentRender:{defaultValue:null,description:"重写content\n\n* 默认是  child[uuid] 也就是每个item的children",name:"contentRender",required:!1,type:{name:"((res?: { id: string; content: ReactNode; }[]) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/DropdownList/CheckTreeDropdown/Unit/btn.tsx#Temp"]={docgenInfo:Temp.__docgenInfo,name:"Temp",path:"src/Components/DropdownList/CheckTreeDropdown/Unit/btn.tsx#Temp"})}catch(__react_docgen_typescript_loader_error){}const Unit_tree=function Temp(_ref){var data=_ref.data,lineHeight=_ref.lineHeight;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:null==data?void 0:data.map((function(item){var _item$children,_item$children2,_item$children3;return(0,jsx_runtime.jsx)(CheckTree.Z.Item,{uuid:item.id,content:item.content,disable:item.disable,isLeaf:!(null!==(_item$children=item.children)&&void 0!==_item$children&&_item$children.length),style:{lineHeight,paddingLeft:null!==(_item$children2=item.children)&&void 0!==_item$children2&&_item$children2.length?0:"0.8rem"},children:null!==(_item$children3=item.children)&&void 0!==_item$children3&&_item$children3.length?(0,jsx_runtime.jsx)(Temp,{data:item.children,lineHeight}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})},item.id)}))})};try{tree.displayName="tree",tree.__docgenInfo={description:"",displayName:"tree",props:{data:{defaultValue:null,description:"下拉列表的数据源",name:"data",required:!1,type:{name:"DataProps[]"}},lineHeight:{defaultValue:null,description:"行高",name:"lineHeight",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/DropdownList/CheckTreeDropdown/Unit/tree.tsx#tree"]={docgenInfo:tree.__docgenInfo,name:"tree",path:"src/Components/DropdownList/CheckTreeDropdown/Unit/tree.tsx#tree"})}catch(__react_docgen_typescript_loader_error){}var CheckTreeDropdown=function CheckTreeDropdown(_ref){var btn=_ref.btn,data=(_ref.values,_ref.data),lineHeight=_ref.lineHeight,_handleVisibleChange=(_ref.handleChange,_ref.handleVisibleChange),_ref$size=_ref.size,size=void 0===_ref$size?"Large":_ref$size,_ref$disable=_ref.disable,disable=void 0!==_ref$disable&&_ref$disable,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"lb":_ref$placement,_ref$maxLength=_ref.maxLength,maxLength=void 0===_ref$maxLength?4:_ref$maxLength,_useState=(0,react.useState)(),_useState2=(0,slicedToArray.Z)(_useState,2),show=_useState2[0],setShow=_useState2[1],topLength=(0,react.useMemo)((function(){var _data$length,length=null!==(_data$length=null==data?void 0:data.length)&&void 0!==_data$length?_data$length:0;return{length:length>maxLength?maxLength:length,overflow:length>maxLength}}),[null==data?void 0:data.length,maxLength]),maxHeight="calc( ".concat(topLength.length," * ").concat(lineHeight);return topLength.length&&(maxHeight+=" + ".concat(topLength.length-1," * 0.8rem")),topLength.overflow&&(maxHeight+=" + ".concat(lineHeight," / 2 + 0.8rem")),maxHeight+=" )",(0,jsx_runtime.jsxs)(src.Ltx,{trigger:"click",disable,placement,children:[(0,jsx_runtime.jsx)(DropdownListForCheckTreeParams.Provider,{value:{disable,open:null!=show&&show},children:btn}),(0,jsx_runtime.jsx)(DropdownContent.N,{hideOnClick:!1,offset:{y:4},handleVisibleChange:function handleVisibleChange(res){setShow(res),null==_handleVisibleChange||_handleVisibleChange(res)},bodyClassName:(0,classNames.Z)(style_module.checkTreeDropdown_body,style_module["checkTreeDropdown_".concat(size)]),children:(0,jsx_runtime.jsx)(src.lgT,{bodyClassName:style_module.checkTreeDropdown_scrollBody,style:{maxHeight},children:(0,jsx_runtime.jsx)(CheckTree.Z,{children:(0,jsx_runtime.jsx)(ParamsToCheckTree.Provider,{value:{lineHeight},children:(0,jsx_runtime.jsx)(Unit_tree,{data,lineHeight})})})})})]})};CheckTreeDropdown.Btn=btn;const DropdownList_CheckTreeDropdown=CheckTreeDropdown,CheckTreeDropdown_stories={title:"DropdownList/CheckTreeDropdown",component:DropdownList_CheckTreeDropdown,subcomponents:{"CheckTreeDropdown.Btn":DropdownList_CheckTreeDropdown.Btn}};var Template=function Template(_ref){var args=Object.assign({},((0,objectDestructuringEmpty.Z)(_ref),_ref));return(0,jsx_runtime.jsx)(DropdownList_CheckTreeDropdown,(0,objectSpread2.Z)({},args))},DefaultTemp=Template.bind({});DefaultTemp.args={btn:(0,jsx_runtime.jsx)(DropdownList_CheckTreeDropdown.Btn,{contentRender:function contentRender(){return"btn"}}),lineHeight:"2rem",data:[{content:"item1",id:"item1",children:[{content:"item1-subItem1",id:"subItem1"},{content:"item1-subItem2",id:"subItem2"},{content:"item1-subItem3",id:"subItem3"}]}]};var Level1Temp=Template.bind({});Level1Temp.args={btn:(0,jsx_runtime.jsx)(DropdownList_CheckTreeDropdown.Btn,{contentRender:function contentRender(){return(0,jsx_runtime.jsx)(Button.z,{})}}),lineHeight:"2rem",data:[{content:"这里的id不能重复",id:"item1"},{content:"id一定不能重复,组件没有做校验",id:"item2"},{content:"lineHeight一定要传,不传不让用",id:"item3"},{content:"item4",id:"item4"},{content:"item5",id:"item5"},{content:"item6",id:"item6"},{content:"item7",id:"item7"},{content:"item8",id:"item8"}]};var __namedExportsOrder=["DefaultTemp","Level1Temp"];DefaultTemp.parameters={...DefaultTemp.parameters,docs:{...DefaultTemp.parameters?.docs,source:{originalSource:"function Template(_ref) {\n  var args = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));\n  return /*#__PURE__*/_jsx(CheckTreeDropdown, _objectSpread({}, args));\n}",...DefaultTemp.parameters?.docs?.source},description:{story:"比较平常 树形结构 的例子",...DefaultTemp.parameters?.docs?.description}}},Level1Temp.parameters={...Level1Temp.parameters,docs:{...Level1Temp.parameters?.docs,source:{originalSource:"function Template(_ref) {\n  var args = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));\n  return /*#__PURE__*/_jsx(CheckTreeDropdown, _objectSpread({}, args));\n}",...Level1Temp.parameters?.docs?.source},description:{story:"比较平常 一级复选 的例子",...Level1Temp.parameters?.docs?.description}}};try{CheckTreeDropdownstories.displayName="CheckTreeDropdownstories",CheckTreeDropdownstories.__docgenInfo={description:"SingleDropdown",displayName:"CheckTreeDropdownstories",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/DropdownList/CheckTreeDropdown.stories.tsx#CheckTreeDropdownstories"]={docgenInfo:CheckTreeDropdownstories.__docgenInfo,name:"CheckTreeDropdownstories",path:"src/stories/DropdownList/CheckTreeDropdown.stories.tsx#CheckTreeDropdownstories"})}catch(__react_docgen_typescript_loader_error){}try{DefaultTemp.displayName="DefaultTemp",DefaultTemp.__docgenInfo={description:"比较平常 树形结构 的例子",displayName:"DefaultTemp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/DropdownList/CheckTreeDropdown.stories.tsx#DefaultTemp"]={docgenInfo:DefaultTemp.__docgenInfo,name:"DefaultTemp",path:"src/stories/DropdownList/CheckTreeDropdown.stories.tsx#DefaultTemp"})}catch(__react_docgen_typescript_loader_error){}try{Level1Temp.displayName="Level1Temp",Level1Temp.__docgenInfo={description:"比较平常 一级复选 的例子",displayName:"Level1Temp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/DropdownList/CheckTreeDropdown.stories.tsx#Level1Temp"]={docgenInfo:Level1Temp.__docgenInfo,name:"Level1Temp",path:"src/stories/DropdownList/CheckTreeDropdown.stories.tsx#Level1Temp"})}catch(__react_docgen_typescript_loader_error){}}}]);