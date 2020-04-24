import{IronFormElementBehavior,IronValidatableBehavior,PaperInkyFocusBehavior,PaperInkyFocusBehaviorImpl,PaperRippleBehavior,Polymer as Polymer$1,html$1 as html,afterNextRender,mqttMixin,dataSourceMixin,utilsMixin,SerializableElement,format,parseISO,Logger,css,LitElement,html as html$1}from"../../../../../components/adaptive-ui.js";const IronCheckedElementBehaviorImpl={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(){return this.disabled||!this.required||this.checked},_requiredChanged:function(){if(this.required){this.setAttribute("aria-required","true")}else{this.removeAttribute("aria-required")}},_checkedChanged:function(){this.active=this.checked;this.fire("iron-change")},_valueChanged:function(){if(this.value===void 0||null===this.value){this.value="on"}}},IronCheckedElementBehavior=[IronFormElementBehavior,IronValidatableBehavior,IronCheckedElementBehaviorImpl];var ironCheckedElementBehavior={IronCheckedElementBehaviorImpl:IronCheckedElementBehaviorImpl,IronCheckedElementBehavior:IronCheckedElementBehavior};const PaperCheckedElementBehaviorImpl={_checkedChanged:function(){IronCheckedElementBehaviorImpl._checkedChanged.call(this);if(this.hasRipple()){if(this.checked){this._ripple.setAttribute("checked","")}else{this._ripple.removeAttribute("checked")}}},_buttonStateChanged:function(){PaperRippleBehavior._buttonStateChanged.call(this);if(this.disabled){return}if(this.isAttached){this.checked=this.active}}},PaperCheckedElementBehavior=[PaperInkyFocusBehavior,IronCheckedElementBehavior,PaperCheckedElementBehaviorImpl];var paperCheckedElementBehavior={PaperCheckedElementBehaviorImpl:PaperCheckedElementBehaviorImpl,PaperCheckedElementBehavior:PaperCheckedElementBehavior};const template=html`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class\$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class\$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;template.setAttribute("strip-whitespace","");Polymer$1({_template:template,is:"paper-checkbox",behaviors:[PaperCheckedElementBehavior],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){afterNextRender(this,function(){var inkSize=this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim();if("-1px"===inkSize){var checkboxSizeText=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),units="px",unitsMatches=checkboxSizeText.match(/[A-Za-z]+$/);if(null!==unitsMatches){units=unitsMatches[0]}var checkboxSize=parseFloat(checkboxSizeText),defaultInkSize=8/3*checkboxSize;if("px"===units){defaultInkSize=Math.floor(defaultInkSize);if(defaultInkSize%2!==checkboxSize%2){defaultInkSize++}}this.updateStyles({"--paper-checkbox-ink-size":defaultInkSize+units})}})},_computeCheckboxClass:function(checked,invalid){var className="";if(checked){className+="checked "}if(invalid){className+="invalid"}return className},_computeCheckmarkClass:function(checked){return checked?"":"hidden"},_createRipple:function(){this._rippleContainer=this.$.checkboxContainer;return PaperInkyFocusBehaviorImpl._createRipple.call(this)}});let defaultsDocument=null,previousTableState,tableState=null,globalDefaults={},documentDefaults={};function state(){return tableState}function getGlobalOptions(){return globalDefaults}function getDocumentOptions(){return documentDefaults}class TableState{constructor(doc){this.doc=doc}pageHeight(){return this.pageSize().height}pageWidth(){return this.pageSize().width}pageSize(){let pageSize=this.doc.internal.pageSize;if(null==pageSize.width){pageSize={width:pageSize.getWidth(),height:pageSize.getHeight()}}return pageSize}scaleFactor(){return this.doc.internal.scaleFactor}pageNumber(){const pageInfo=this.doc.internal.getCurrentPageInfo();if(!pageInfo){return this.doc.internal.getNumberOfPages()}return pageInfo.pageNumber}}function setupState(doc){previousTableState=tableState;tableState=new TableState(doc);if(doc!==defaultsDocument){defaultsDocument=doc;documentDefaults={}}}function resetState(){tableState=previousTableState}function setDefaults(defaults,doc=null){if(doc){documentDefaults=defaults||{};defaultsDocument=doc}else{globalDefaults=defaults||{}}}var state$1={get globalDefaults(){return globalDefaults},get documentDefaults(){return documentDefaults},default:state,getGlobalOptions:getGlobalOptions,getDocumentOptions:getDocumentOptions,setupState:setupState,resetState:resetState,setDefaults:setDefaults};class HookData{constructor(){const table=state().table;this.table=table;this.pageNumber=table.pageNumber;this.settings=table.settings;this.cursor=table.cursor;this.doc=state().doc}get pageCount(){return this.pageNumber}}class CellHookData extends HookData{constructor(cell,row,column){super();this.cell=cell;this.row=row;this.column=column;this.section=row.section}}var HookData$1={HookData:HookData,CellHookData:CellHookData},autoTableText=function(doc,text,x,y,styles){styles=styles||{};const FONT_ROW_RATIO=1.15;if("number"!==typeof x||"number"!==typeof y){console.error("The x and y parameters are required. Missing for text: ",text)}const k=doc.internal.scaleFactor,fontSize=doc.internal.getFontSize()/k,splitRegex=/\r\n|\r|\n/g;let splitText=null,lineCount=1;if("middle"===styles.valign||"bottom"===styles.valign||"center"===styles.halign||"right"===styles.halign){splitText="string"===typeof text?text.split(splitRegex):text;lineCount=splitText.length||1}y+=fontSize*(2-FONT_ROW_RATIO);if("middle"===styles.valign){y-=lineCount/2*fontSize*FONT_ROW_RATIO}else if("bottom"===styles.valign){y-=lineCount*fontSize*FONT_ROW_RATIO}if("center"===styles.halign||"right"===styles.halign){let alignSize=fontSize;if("center"===styles.halign){alignSize*=.5}if(1<=lineCount){for(let iLine=0;iLine<splitText.length;iLine++){doc.text(splitText[iLine],x-doc.getStringUnitWidth(splitText[iLine])*alignSize,y);y+=fontSize*FONT_ROW_RATIO}return doc}x-=doc.getStringUnitWidth(text)*alignSize}if("justify"===styles.halign){doc.text(text,x,y,{maxWidth:styles.maxWidth||100,align:"justify"})}else{doc.text(text,x,y)}return doc},autoTableText$1={default:autoTableText};const FONT_ROW_RATIO=1.15;function defaultConfig(){return{html:null,head:null,body:null,foot:null,includeHiddenHtml:!1,startY:null,margin:40/state().scaleFactor(),pageBreak:"auto",rowPageBreak:"auto",tableWidth:"auto",showHead:"everyPage",showFoot:"everyPage",tableLineWidth:0,tableLineColor:200,tableId:null,theme:"striped",useCss:!1,styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{},didParseCell:function(){},willDrawCell:function(){},didDrawCell:function(){},didDrawPage:function(){}}}function defaultStyles(){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/state().scaleFactor(),lineColor:200,lineWidth:0/state().scaleFactor(),cellWidth:"auto",minCellHeight:0}}function getTheme(name){return{striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}}[name]}var config={FONT_ROW_RATIO:FONT_ROW_RATIO,defaultConfig:defaultConfig,defaultStyles:defaultStyles,getTheme:getTheme};function assign(target,...varArgs){if(null==target){throw new TypeError("Cannot convert undefined or null to object")}for(var to=Object(target),index=1,nextSource;index<arguments.length;index++){nextSource=arguments[index];if(null!=nextSource){for(var nextKey in nextSource){if(Object.prototype.hasOwnProperty.call(nextSource,nextKey)){to[nextKey]=nextSource[nextKey]}}}}return to}var polyfills={assign:assign};function getStringWidth(text,styles){applyStyles(styles);const textArr=Array.isArray(text)?text:[text],widestLineWidth=textArr.map(text=>state().doc.getTextWidth(text)).map(val=>Math.floor(1e4*val)/1e4).reduce((a,b)=>Math.max(a,b),0),fontSize=styles.fontSize/state().scaleFactor();return widestLineWidth}function ellipsize(text,width,styles,ellipsizeStr="..."){if(Array.isArray(text)){const value=[];text.forEach(function(str,i){value[i]=ellipsize(str,width,styles,ellipsizeStr)});return value}const precision=1e4*state().scaleFactor();width=Math.ceil(width*precision)/precision;if(width>=getStringWidth(text,styles)){return text}while(width<getStringWidth(text+ellipsizeStr,styles)){if(1>=text.length){break}text=text.substring(0,text.length-1)}return text.trim()+ellipsizeStr}function addTableBorder(){const table=state().table,styles={lineWidth:table.settings.tableLineWidth,lineColor:table.settings.tableLineColor};applyStyles(styles);const fs=getFillStyle(styles);if(fs){state().doc.rect(table.pageStartX,table.pageStartY,table.width,table.cursor.y-table.pageStartY,fs)}}function getFillStyle(styles){const drawLine=0<styles.lineWidth,drawBackground=styles.fillColor||0===styles.fillColor;if(drawLine&&drawBackground){return"DF"}else if(drawLine){return"S"}else if(drawBackground){return"F"}else{return!1}}function applyUserStyles(){applyStyles(state().table.userStyles)}function applyStyles(styles){const doc=state().doc,styleModifiers={fillColor:doc.setFillColor,textColor:doc.setTextColor,fontStyle:doc.setFontStyle,lineColor:doc.setDrawColor,lineWidth:doc.setLineWidth,font:doc.setFont,fontSize:doc.setFontSize};Object.keys(styleModifiers).forEach(function(name){const style=styles[name],modifier=styleModifiers[name];if("undefined"!==typeof style){if(Array.isArray(style)){modifier.apply(this,style)}else{modifier(style)}}})}function marginOrPadding(value,defaultValue){let newValue={};if(Array.isArray(value)){if(4<=value.length){newValue={top:value[0],right:value[1],bottom:value[2],left:value[3]}}else if(3===value.length){newValue={top:value[0],right:value[1],bottom:value[2],left:value[1]}}else if(2===value.length){newValue={top:value[0],right:value[1],bottom:value[0],left:value[1]}}else if(1===value.length){value=value[0]}else{value=defaultValue}}else if("object"===typeof value){if(value.vertical){value.top=value.vertical;value.bottom=value.vertical}if(value.horizontal){value.right=value.horizontal;value.left=value.horizontal}for(const side of["top","right","bottom","left"]){newValue[side]=value[side]||0===value[side]?value[side]:defaultValue}}if("number"===typeof value){newValue={top:value,right:value,bottom:value,left:value}}return newValue}function styles(styles){styles=Array.isArray(styles)?styles:[styles];return assign(defaultStyles(),...styles)}var common={getStringWidth:getStringWidth,ellipsize:ellipsize,addTableBorder:addTableBorder,getFillStyle:getFillStyle,applyUserStyles:applyUserStyles,applyStyles:applyStyles,marginOrPadding:marginOrPadding,styles:styles};function parseCss(element,scaleFactor,ignored=[]){const result={},style=window.getComputedStyle(element);function assign(name,value,accepted=[]){if((0===accepted.length||-1!==accepted.indexOf(value))&&-1===ignored.indexOf(name)){if(0===value||value){result[name]=value}}}const pxScaleFactor=96/72;assign("fillColor",parseColor(element,"backgroundColor"));assign("fontStyle",parseFontStyle(style));assign("textColor",parseColor(element,"color"));assign("halign",style.textAlign,["left","right","center","justify"]);assign("valign",style.verticalAlign,["middle","bottom","top"]);assign("fontSize",parseInt(style.fontSize||"")/pxScaleFactor);assign("cellPadding",parsePadding(style.padding,style.fontSize,style.lineHeight,scaleFactor));assign("lineWidth",parseInt(style.borderTopWidth||"")/pxScaleFactor/scaleFactor);assign("lineColor",parseColor(element,"borderTopColor"));const font=(style.fontFamily||"").toLowerCase();if(state().doc.getFontList()[font]){assign("font",font)}return result}function parseFontStyle(style){let res="";if("bold"===style.fontWeight||"bolder"===style.fontWeight||700<=parseInt(style.fontWeight)){res+="bold"}if("italic"===style.fontStyle||"oblique"===style.fontStyle){res+="italic"}return res}function parseColor(element,colorProp){const cssColor=realColor(element,colorProp);if(!cssColor){return null}var rgba=cssColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!rgba||!Array.isArray(rgba)){return null}var color=[parseInt(rgba[1]),parseInt(rgba[2]),parseInt(rgba[3])],alpha=parseInt(rgba[4]);if(0===alpha||isNaN(color[0])||isNaN(color[1])||isNaN(color[2])){return null}return color}function realColor(elem,colorProp){if(!elem){return null}var bg=window.getComputedStyle(elem)[colorProp];if("rgba(0, 0, 0, 0)"===bg||"transparent"===bg||"initial"===bg||"inherit"===bg){return realColor(elem.parentElement,colorProp)}else{return bg}}function parsePadding(val,fontSize,lineHeight,scaleFactor){if(!val){return null}const linePadding=(parseInt(lineHeight)-parseInt(fontSize))/scaleFactor/2;let padding=val.split(" ").map(n=>{return parseInt(n)/(96/(72/scaleFactor))});padding=marginOrPadding(padding,0);if(linePadding>padding.top){padding.top=linePadding}if(linePadding>padding.bottom){padding.bottom=linePadding}return padding}var cssParser={parseCss:parseCss};function parseHtml(input,includeHiddenHtml=!1,useCss=!1){let tableElement;if("string"===typeof input){tableElement=window.document.querySelector(input)}else{tableElement=input}if(!tableElement){console.error("Html table could not be found with input: ",input);return}const head=parseTableSection(window,tableElement.tHead,includeHiddenHtml,useCss);let body=[];for(var i=0;i<tableElement.tBodies.length;i++){body=body.concat(parseTableSection(window,tableElement.tBodies[i],includeHiddenHtml,useCss))}const foot=parseTableSection(window,tableElement.tFoot,includeHiddenHtml,useCss);return{head,body,foot}}function parseTableSection(window,sectionElement,includeHidden,useCss){const results=[];if(!sectionElement){return results}for(let i=0;i<sectionElement.rows.length;i++){const row=sectionElement.rows[i],resultRow=[],rowStyles=useCss?parseCss(row,state().scaleFactor(),["cellPadding","lineWidth","lineColor"]):{};for(let i=0;i<row.cells.length;i++){const cell=row.cells[i],style=window.getComputedStyle(cell);if(includeHidden||"none"!==style.display){const cellStyles=useCss?parseCss(cell,state().scaleFactor()):{};resultRow.push({rowSpan:cell.rowSpan,colSpan:cell.colSpan,styles:useCss?cellStyles:null,_element:cell,content:parseCellContent(cell)})}}if(0<resultRow.length&&(includeHidden||"none"!==rowStyles.display)){resultRow._element=row;results.push(resultRow)}}return results}function parseCellContent(orgCell){const cell=orgCell.cloneNode(!0);cell.innerHTML=cell.innerHTML.replace(/\n/g,"").replace(/ +/g," ");cell.innerHTML=cell.innerHTML.split("<br>").map(part=>part.trim()).join("\n");return cell.innerText||cell.textContent||""}var htmlParser={parseHtml:parseHtml};class CellHooks{constructor(){this.didParseCell=[];this.willDrawCell=[];this.didDrawCell=[];this.didDrawPage=[]}}class Table{constructor(){this.columns=[];this.head=[];this.body=[];this.foot=[];this.height=0;this.width=0;this.preferredWidth=0;this.wrappedWidth=0;this.minWidth=0;this.headHeight=0;this.footHeight=0;this.startPageNumber=1;this.pageNumber=1;this.styles={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}};this.cellHooks=new CellHooks}get pageCount(){return this.pageNumber}allRows(){return this.head.concat(this.body).concat(this.foot)}callCellHooks(handlers,cell,row,column){for(const handler of handlers){if(!1===handler(new CellHookData(cell,row,column))){return!1}}return!0}callEndPageHooks(){applyUserStyles();for(const handler of this.cellHooks.didDrawPage){handler(new HookData)}}margin(side){return marginOrPadding(this.settings.margin,defaultConfig().margin)[side]}}class Row{constructor(raw,index,section){this.cells={};this.height=0;this.maxCellHeight=0;this.pageNumber=1;this.spansMultiplePages=!1;this.raw=raw;if(raw._element){this.raw=raw._element}this.index=index;this.section=section}get pageCount(){return this.pageNumber}canEntireRowFit(height){return this.maxCellHeight<=height}getMinimumRowHeight(){return state().table.columns.reduce((acc,column)=>{const cell=this.cells[column.index];if(!cell){return 0}const fontHeight=cell.styles.fontSize/state().scaleFactor()*FONT_ROW_RATIO,vPadding=cell.padding("vertical"),oneRowHeight=vPadding+fontHeight;return oneRowHeight>acc?oneRowHeight:acc},0)}}class Cell{constructor(raw,themeStyles,section){this.contentHeight=0;this.contentWidth=0;this.wrappedWidth=0;this.minWidth=0;this.textPos={};this.height=0;this.width=0;this.rowSpan=raw&&raw.rowSpan||1;this.colSpan=raw&&raw.colSpan||1;this.styles=assign(themeStyles,raw&&raw.styles||{});this.section=section;let text,content=raw&&null!=raw.content?raw.content:raw;content=content&&null!=content.title?content.title:content;this.raw=raw&&raw._element?raw._element:raw;text=null!=content?""+content:"";const splitRegex=/\r\n|\r|\n/g;this.text=text.split(splitRegex)}getContentHeight(){const lineCount=Array.isArray(this.text)?this.text.length:1,fontHeight=this.styles.fontSize/state().scaleFactor()*FONT_ROW_RATIO;return lineCount*fontHeight+this.padding("vertical")}padding(name){const padding=marginOrPadding(this.styles.cellPadding,styles([]).cellPadding);if("vertical"===name){return padding.top+padding.bottom}else if("horizontal"===name){return padding.left+padding.right}else{return padding[name]}}}class Column{constructor(dataKey,raw,index){this.preferredWidth=0;this.minWidth=0;this.wrappedWidth=0;this.width=0;this.dataKey=dataKey;this.raw=raw;this.index=index}}var models={Table:Table,Row:Row,Cell:Cell,Column:Column};function validateInput(allOptions){for(const settings of allOptions){if(settings&&"object"!==typeof settings){console.error("The options parameter should be of type object, is: "+typeof settings)}if("undefined"!==typeof settings.extendWidth){settings.tableWidth=settings.extendWidth?"auto":"wrap";console.error("Use of deprecated option: extendWidth, use tableWidth instead.")}if("undefined"!==typeof settings.margins){if("undefined"===typeof settings.margin){settings.margin=settings.margins}console.error("Use of deprecated option: margins, use margin instead.")}if(settings.startY&&"number"!==typeof settings.startY){console.error("Invalid value for startY option",settings.startY);delete settings.startY}if(!settings.didDrawPage&&(settings.afterPageContent||settings.beforePageContent||settings.afterPageAdd)){console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead");settings.didDrawPage=function(data){applyUserStyles();if(settings.beforePageContent){settings.beforePageContent(data)}applyUserStyles();if(settings.afterPageContent){settings.afterPageContent(data)}applyUserStyles();if(settings.afterPageAdd&&1<data.pageNumber){data.afterPageAdd(data)}applyUserStyles()}}["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(name=>{if(settings[name]){console.error(`The "${name}" hook has changed in version 3.0, check the changelog for how to migrate.`)}});[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(([current,deprecated])=>{if(settings[deprecated]){console.error(`Use of deprecated option ${deprecated}. Use ${current} instead`);settings[current]=settings[deprecated]}});[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(o){const deprecatedOption="string"===typeof o?o:o[0],style="string"===typeof o?o:o[1];if("undefined"!==typeof settings[deprecatedOption]){if("undefined"===typeof settings.styles[style]){settings.styles[style]=settings[deprecatedOption]}console.error("Use of deprecated option: "+deprecatedOption+", use the style "+style+" instead.")}});for(const styleProp of["styles","bodyStyles","headStyles","footStyles"]){checkStyles(settings[styleProp]||{})}const columnStyles=settings.columnStyles||{};for(const key of Object.keys(columnStyles)){checkStyles(columnStyles[key]||{})}}}function checkStyles(styles$$1){if(styles$$1.rowHeight){console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight.");if(!styles$$1.minCellHeight){styles$$1.minCellHeight=styles$$1.rowHeight}}else if(styles$$1.columnWidth){console.error("Use of deprecated style columnWidth. It is renamed to cellWidth.");if(!styles$$1.cellWidth){styles$$1.cellWidth=styles$$1.columnWidth}}}var inputValidator={default:validateInput};function parseInput(args){const tableOptions=parseUserArguments(args),globalOptions=getGlobalOptions(),documentOptions=getDocumentOptions(),allOptions=[globalOptions,documentOptions,tableOptions];validateInput(allOptions);const table=new Table;state().table=table;table.id=tableOptions.tableId;const doc=state().doc;table.userStyles={textColor:doc.getTextColor?doc.getTextColor():0,fontSize:doc.internal.getFontSize(),fontStyle:doc.internal.getFont().fontStyle,font:doc.internal.getFont().fontName};for(const styleProp of Object.keys(table.styles)){const styles$$1=allOptions.map(opts=>opts[styleProp]||{});table.styles[styleProp]=assign({},...styles$$1)}for(const opts of allOptions){for(const hookName of Object.keys(table.cellHooks)){if(opts&&"function"===typeof opts[hookName]){table.cellHooks[hookName].push(opts[hookName])}}}table.settings=assign({},defaultConfig(),...allOptions);table.settings.margin=marginOrPadding(table.settings.margin,defaultConfig().margin);if("auto"===table.settings.theme){table.settings.theme=table.settings.useCss?"plain":"striped"}if(!1===table.settings.startY){delete table.settings.startY}const previous=state().doc.previousAutoTable,isSamePageAsPrevious=previous&&previous.startPageNumber+previous.pageNumber-1===state().pageNumber();if(null==table.settings.startY&&isSamePageAsPrevious){table.settings.startY=previous.finalY+20/state().scaleFactor()}let htmlContent={};if(table.settings.html){htmlContent=parseHtml(table.settings.html,table.settings.includeHiddenHtml,table.settings.useCss)||{}}table.settings.head=htmlContent.head||table.settings.head||[];table.settings.body=htmlContent.body||table.settings.body||[];table.settings.foot=htmlContent.foot||table.settings.foot||[];parseContent(table);table.minWidth=table.columns.reduce((total,col)=>total+col.minWidth,0);table.wrappedWidth=table.columns.reduce((total,col)=>total+col.wrappedWidth,0);if("number"===typeof table.settings.tableWidth){table.width=table.settings.tableWidth}else if("wrap"===table.settings.tableWidth){table.width=table.wrappedWidth}else{table.width=state().pageWidth()-table.margin("left")-table.margin("right")}return table}function parseUserArguments(args){if(1===args.length){return args[0]}else{const opts=args[2]||{};opts.body=args[1];opts.columns=args[0];opts.columns.forEach(col=>{if("object"===typeof col&&null==col.header){col.header=col.title}});return opts}}function parseContent(table){const settings=table.settings;table.columns=getTableColumns(settings);for(const sectionName of["head","body","foot"]){const rowSpansLeftForColumn={},sectionRows=settings[sectionName];if(0===sectionRows.length&&settings.columns&&"body"!==sectionName){const sectionRow=generateSectionRowFromColumnData(table,sectionName);if(sectionRow){sectionRows.push(sectionRow)}}sectionRows.forEach((rawRow,rowIndex)=>{let skippedRowForRowSpans=0;const row=new Row(rawRow,rowIndex,sectionName);table[sectionName].push(row);let colSpansAdded=0,columnSpansLeft=0;for(const column of table.columns){if(null==rowSpansLeftForColumn[column.index]||0===rowSpansLeftForColumn[column.index].left){if(0===columnSpansLeft){let rawCell;if(Array.isArray(rawRow)){rawCell=rawRow[column.index-colSpansAdded-skippedRowForRowSpans]}else{rawCell=rawRow[column.dataKey]}const styles$$1=cellStyles(sectionName,column,rowIndex),cell=new Cell(rawCell,styles$$1,sectionName);row.cells[column.dataKey]=cell;row.cells[column.index]=cell;columnSpansLeft=cell.colSpan-1;rowSpansLeftForColumn[column.index]={left:cell.rowSpan-1,times:columnSpansLeft}}else{columnSpansLeft--;colSpansAdded++}}else{rowSpansLeftForColumn[column.index].left--;columnSpansLeft=rowSpansLeftForColumn[column.index].times;skippedRowForRowSpans++}}})}table.allRows().forEach(row=>{for(const column of table.columns){const cell=row.cells[column.index];if(!cell){continue}table.callCellHooks(table.cellHooks.didParseCell,cell,row,column);cell.contentWidth=cell.padding("horizontal")+getStringWidth(cell.text,cell.styles);if("number"===typeof cell.styles.cellWidth){cell.minWidth=cell.styles.cellWidth;cell.wrappedWidth=cell.styles.cellWidth}else if("wrap"===cell.styles.cellWidth){cell.minWidth=cell.contentWidth;cell.wrappedWidth=cell.contentWidth}else{const defaultMinWidth=10/state().scaleFactor();cell.minWidth=cell.styles.minCellWidth||defaultMinWidth;cell.wrappedWidth=cell.contentWidth;if(cell.minWidth>cell.wrappedWidth){cell.wrappedWidth=cell.minWidth}}}});table.allRows().forEach(row=>{for(const column of table.columns){const cell=row.cells[column.index];if(cell&&1===cell.colSpan){if(cell.wrappedWidth>column.wrappedWidth){column.wrappedWidth=cell.wrappedWidth}if(cell.minWidth>column.minWidth){column.minWidth=cell.minWidth}}else{const columnStyles=table.styles.columnStyles[column.dataKey]||table.styles.columnStyles[column.index]||{},cellWidth=columnStyles.cellWidth;if(cellWidth&&"number"===typeof cellWidth){column.minWidth=cellWidth;column.wrappedWidth=cellWidth}}if(cell){if(1<cell.colSpan&&!column.minWidth){column.minWidth=cell.minWidth}if(1<cell.colSpan&&!column.wrappedWidth){column.wrappedWidth=cell.minWidth}table.callCellHooks(table.cellHooks.didParseCell,cell,row,column)}}})}function generateSectionRowFromColumnData(table,sectionName){const sectionRow={};table.columns.forEach(col=>{const columnData=col.raw;if("head"===sectionName){const val=columnData&&columnData.header?columnData.header:columnData;if(val){sectionRow[col.dataKey]=val}}else if("foot"===sectionName&&columnData.footer){sectionRow[col.dataKey]=columnData.footer}});return 0<Object.keys(sectionRow).length?sectionRow:null}function getTableColumns(settings){if(settings.columns){const cols=settings.columns.map((input,index)=>{const key=input.dataKey||input.key||index;return new Column(key,input,index)});return cols}else{const firstRow=settings.head[0]||settings.body[0]||settings.foot[0]||[],columns=[];Object.keys(firstRow).filter(key=>"_element"!==key).forEach(key=>{const colSpan=firstRow[key]&&firstRow[key].colSpan?firstRow[key].colSpan:1;for(let i=0;i<colSpan;i++){let id;if(Array.isArray(firstRow)){id=columns.length}else{id=key+(0<i?`_${i}`:"")}columns.push(new Column(id,id,columns.length))}});return columns}}function cellStyles(sectionName,column,rowIndex){const table=state().table,theme=getTheme(table.settings.theme),otherStyles=[theme.table,theme[sectionName],table.styles.styles,table.styles[`${sectionName}Styles`]],columnStyles=table.styles.columnStyles[column.dataKey]||table.styles.columnStyles[column.index]||{},colStyles="body"===sectionName?columnStyles:{},rowStyles="body"===sectionName&&0===rowIndex%2?assign({},theme.alternateRow,table.styles.alternateRowStyles):{};return assign(defaultStyles(),...[...otherStyles,rowStyles,colStyles])}var inputParser={parseInput:parseInput};function drawTable(table){const settings=table.settings;table.cursor={x:table.margin("left"),y:null==settings.startY?table.margin("top"):settings.startY};let minTableBottomPos=settings.startY+table.margin("bottom")+table.headHeight+table.footHeight;if("avoid"===settings.pageBreak){minTableBottomPos+=table.height}if("always"===settings.pageBreak||null!=settings.startY&&!1!==settings.startY&&minTableBottomPos>state().pageHeight()){nextPage(state().doc);table.cursor.y=table.margin("top")}table.pageStartX=table.cursor.x;table.pageStartY=table.cursor.y;table.startPageNumber=state().pageNumber();applyUserStyles();if(!0===settings.showHead||"firstPage"===settings.showHead||"everyPage"===settings.showHead){table.head.forEach(row=>printRow(row))}applyUserStyles();table.body.forEach(function(row,index){printFullRow(row,index===table.body.length-1)});applyUserStyles();if(!0===settings.showFoot||"lastPage"===settings.showFoot||"everyPage"===settings.showFoot){table.foot.forEach(row=>printRow(row))}addTableBorder();table.callEndPageHooks()}function getRemainingLineCount(cell,remainingPageSpace){const fontHeight=cell.styles.fontSize/state().scaleFactor()*FONT_ROW_RATIO,vPadding=cell.padding("vertical"),remainingLines=Math.floor((remainingPageSpace-vPadding)/fontHeight);return Math.max(0,remainingLines)}function modifyRowToFit(row,remainingPageSpace,table){const remainderRow=new Row(row.raw,-1,row.section);remainderRow.spansMultiplePages=!0;row.spansMultiplePages=!0;row.height=0;row.maxCellHeight=0;for(const column of table.columns){const cell=row.cells[column.index];if(!cell){continue}if(!Array.isArray(cell.text)){cell.text=[cell.text]}let remainderCell=new Cell(cell.raw,{},cell.section);remainderCell=assign(remainderCell,cell);remainderCell.textPos=assign({},cell.textPos);remainderCell.text=[];const remainingLineCount=getRemainingLineCount(cell,remainingPageSpace);if(cell.text.length>remainingLineCount){remainderCell.text=cell.text.splice(remainingLineCount,cell.text.length)}cell.contentHeight=cell.getContentHeight();if(cell.contentHeight>row.height){row.height=cell.contentHeight;row.maxCellHeight=cell.contentHeight}remainderCell.contentHeight=remainderCell.getContentHeight();if(remainderCell.contentHeight>remainderRow.height){remainderRow.height=remainderCell.contentHeight;remainderRow.maxCellHeight=remainderCell.contentHeight}remainderRow.cells[column.index]=remainderCell}for(const column of table.columns){const remainderCell=remainderRow.cells[column.index];if(remainderCell){remainderCell.height=remainderRow.height}const cell=row.cells[column.index];if(cell){cell.height=row.height}}return remainderRow}function shouldPrintOnCurrentPage(row,remainingPageSpace,table){const pageHeight=state().pageHeight(),marginHeight=table.margin("top")-table.margin("bottom"),maxTableHeight=pageHeight-marginHeight,minRowFits=row.getMinimumRowHeight()<remainingPageSpace;if(row.getMinimumRowHeight()>maxTableHeight){console.error(`Will not be able to print row ${row.index} correctly since it's minimum height is larger than page height`);return!0}const rowHasRowSpanCell=0<table.columns.filter(column=>{const cell=row.cells[column.index];if(!cell){return!1}return 1<cell.rowSpan}).length;if(!minRowFits){return!1}const rowHigherThanPage=row.maxCellHeight>maxTableHeight;if(rowHigherThanPage){if(rowHasRowSpanCell){console.error(`The content of row ${row.index} will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.`)}return!0}if(rowHasRowSpanCell){return!1}if("avoid"===table.settings.rowPageBreak){return!1}return!0}function printFullRow(row,isLastRow){const table=state().table,remainingPageSpace=getRemainingPageSpace(isLastRow);if(row.canEntireRowFit(remainingPageSpace)){printRow(row)}else{if(shouldPrintOnCurrentPage(row,remainingPageSpace,table)){const remainderRow=modifyRowToFit(row,remainingPageSpace,table);printRow(row);addPage();printFullRow(remainderRow,isLastRow)}else{addPage();printFullRow(row,isLastRow)}}}function printRow(row){const table=state().table;table.cursor.x=table.margin("left");row.y=table.cursor.y;row.x=table.cursor.x;for(const column of table.columns){const cell=row.cells[column.index];if(!cell){table.cursor.x+=column.width;continue}applyStyles(cell.styles);cell.x=table.cursor.x;cell.y=row.y;if("top"===cell.styles.valign){cell.textPos.y=table.cursor.y+cell.padding("top")}else if("bottom"===cell.styles.valign){cell.textPos.y=table.cursor.y+cell.height-cell.padding("bottom")}else{cell.textPos.y=table.cursor.y+cell.height/2}if("right"===cell.styles.halign){cell.textPos.x=cell.x+cell.width-cell.padding("right")}else if("center"===cell.styles.halign){cell.textPos.x=cell.x+cell.width/2}else{cell.textPos.x=cell.x+cell.padding("left")}if(!1===table.callCellHooks(table.cellHooks.willDrawCell,cell,row,column)){table.cursor.x+=column.width;continue}const fillStyle=getFillStyle(cell.styles);if(fillStyle){state().doc.rect(cell.x,table.cursor.y,cell.width,cell.height,fillStyle)}autoTableText(state().doc,cell.text,cell.textPos.x,cell.textPos.y,{halign:cell.styles.halign,valign:cell.styles.valign,maxWidth:Math.ceil(cell.width-cell.padding("left")-cell.padding("right"))});table.callCellHooks(table.cellHooks.didDrawCell,cell,row,column);table.cursor.x+=column.width}table.cursor.y+=row.height}function getRemainingPageSpace(isLastRow){const table=state().table;let bottomContentHeight=table.margin("bottom");const showFoot=table.settings.showFoot;if(!0===showFoot||"everyPage"===showFoot||"lastPage"===showFoot&&isLastRow){bottomContentHeight+=table.footHeight}return state().pageHeight()-table.cursor.y-bottomContentHeight}function addPage(){const table=state().table;applyUserStyles();if(!0===table.settings.showFoot||"everyPage"===table.settings.showFoot){table.foot.forEach(row=>printRow(row))}table.finalY=table.cursor.y;table.callEndPageHooks();addTableBorder();nextPage(state().doc);table.pageNumber++;table.cursor={x:table.margin("left"),y:table.margin("top")};table.pageStartX=table.cursor.x;table.pageStartY=table.cursor.y;if(!0===table.settings.showHead||"everyPage"===table.settings.showHead){table.head.forEach(row=>printRow(row))}}function nextPage(doc){const current=state().pageNumber();doc.setPage(current+1);const newCurrent=state().pageNumber();if(newCurrent===current){doc.addPage()}}var tableDrawer={drawTable:drawTable,addPage:addPage};function calculateWidths(table){const columnMinWidth=10/state().scaleFactor();if(columnMinWidth*table.columns.length>table.width){console.error("Columns could not fit on page")}else if(table.minWidth>table.width){console.error("Column widths too wide and can't fit page")}const copy=table.columns.slice(0);distributeWidth(copy,table.width,table.wrappedWidth);applyColSpans(table);fitContent(table);applyRowSpans(table)}function applyRowSpans(table){const rowSpanCells={};let colRowSpansLeft=1;const all=table.allRows();for(let rowIndex=0;rowIndex<all.length;rowIndex++){const row=all[rowIndex];for(const column of table.columns){const data=rowSpanCells[column.index];if(1<colRowSpansLeft){colRowSpansLeft--;delete row.cells[column.index]}else if(data){data.cell.height+=row.height;if(data.cell.height>row.maxCellHeight){data.row.maxCellHeight=data.cell.height}colRowSpansLeft=data.cell.colSpan;delete row.cells[column.index];data.left--;if(1>=data.left){delete rowSpanCells[column.index]}}else{var cell=row.cells[column.index];if(!cell){continue}cell.height=row.height;if(1<cell.rowSpan){const remaining=all.length-rowIndex,left=cell.rowSpan>remaining?remaining:cell.rowSpan;rowSpanCells[column.index]={cell,left,row}}}}if("head"===row.section){table.headHeight+=row.maxCellHeight}if("foot"===row.section){table.footHeight+=row.maxCellHeight}table.height+=row.height}}function applyColSpans(table){const all=table.allRows();for(let rowIndex=0;rowIndex<all.length;rowIndex++){const row=all[rowIndex];let colSpanCell=null,combinedColSpanWidth=0,colSpansLeft=0;for(var columnIndex=0;columnIndex<table.columns.length;columnIndex++){const column=table.columns[columnIndex];let cell=null;colSpansLeft-=1;if(1<colSpansLeft&&table.columns[columnIndex+1]){combinedColSpanWidth+=column.width;delete row.cells[column.index];continue}else if(colSpanCell){cell=colSpanCell;delete row.cells[column.index];colSpanCell=null}else{cell=row.cells[column.index];if(!cell){continue}colSpansLeft=cell.colSpan;combinedColSpanWidth=0;if(1<cell.colSpan){colSpanCell=cell;combinedColSpanWidth+=column.width;continue}}cell.width=column.width+combinedColSpanWidth}}}function fitContent(table){let rowSpanHeight={count:0,height:0};for(const row of table.allRows()){for(const column of table.columns){const cell=row.cells[column.index];if(!cell){continue}applyStyles(cell.styles);const textSpace=cell.width-cell.padding("horizontal");if("linebreak"===cell.styles.overflow){cell.text=state().doc.splitTextToSize(cell.text,textSpace+1/(state().scaleFactor()||1),{fontSize:cell.styles.fontSize})}else if("ellipsize"===cell.styles.overflow){cell.text=ellipsize(cell.text,textSpace,cell.styles)}else if("hidden"===cell.styles.overflow){cell.text=ellipsize(cell.text,textSpace,cell.styles,"")}else if("function"===typeof cell.styles.overflow){cell.text=cell.styles.overflow(cell.text,textSpace)}cell.contentHeight=cell.getContentHeight();if(cell.styles.minCellHeight>cell.contentHeight){cell.contentHeight=cell.styles.minCellHeight}let realContentHeight=cell.contentHeight/cell.rowSpan;if(1<cell.rowSpan&&rowSpanHeight.count*rowSpanHeight.height<realContentHeight*cell.rowSpan){rowSpanHeight={height:realContentHeight,count:cell.rowSpan}}else if(rowSpanHeight&&0<rowSpanHeight.count){if(rowSpanHeight.height>realContentHeight){realContentHeight=rowSpanHeight.height}}if(realContentHeight>row.height){row.height=realContentHeight;row.maxCellHeight=realContentHeight}}rowSpanHeight.count--}}function distributeWidth(autoColumns,availableSpace,wrappedAutoColumnsWidth){const diffWidth=availableSpace-wrappedAutoColumnsWidth;for(let i=0;i<autoColumns.length;i++){const column=autoColumns[i],ratio=column.wrappedWidth/wrappedAutoColumnsWidth,suggestedWidth=column.wrappedWidth+diffWidth*ratio;let hasCustomWidth=!1;for(const row of state().table.allRows()){const cell=row.cells[column.index];if(cell&&"number"===typeof cell.styles.cellWidth){hasCustomWidth=!0;break}}if(suggestedWidth<column.minWidth||hasCustomWidth){column.width=column.minWidth+1/state().scaleFactor();wrappedAutoColumnsWidth-=column.wrappedWidth;availableSpace-=column.width;autoColumns.splice(i,1);distributeWidth(autoColumns,availableSpace,wrappedAutoColumnsWidth);break}column.width=suggestedWidth}}var widthCalculator={calculateWidths:calculateWidths};class AutoTable{constructor(doc){setupState(doc)}autoTable(...args){const table=parseInput(args);calculateWidths(table);drawTable(table);table.finalY=table.cursor.y;this.previousAutoTable=table;this.lastAutoTable=table;applyUserStyles();resetState();return this}}var main={default:AutoTable};const DataListElementBase=class extends utilsMixin(dataSourceMixin(mqttMixin(SerializableElement))){static get is(){return"datalist-element"}constructor(){super();this.limit=50}static get properties(){return{table:{type:Boolean,value:!0},grid:{type:Boolean,value:!1},list:{type:Boolean,value:!1},sortProperty:{type:String},selectedRows:{type:Array,value:[]},showActions:{type:Boolean,value:!1,notify:!0},selectType:{type:String,value:"multi"}}}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;if(self.e.kind){try{self.register(self,self.e.kind)}catch(e){console.error(e)}}this.loader.then(()=>{})}_handlePageChanged(event){event.preventDefault();this.page=event.detail.page;this.loadData().then(()=>{})}_handleLimitChanged(event){event.preventDefault();this.limit=event.detail.size;this.loadData().then(()=>{})}_handleSort(event){event.preventDefault();this.sortProperty=event.detail.sort.property+","+event.detail.sort.direction}_handleFilterTh(event){var column=event.detail.column;console.log(column)}_handleFilter(event){var filter=event.detail.filter.value,column=event.detail.column;this.updateParams(column.propertyPath,filter)}_handleDFilter(event){var filter=event.detail.value,column=event.detail.path;if(filter){this.updateParams(column,filter)}}_handleSearch(event){var filter=event.detail.value,column=event.detail.column,columns=event.detail.searchFields;this.deleteParamKeys(columns.concat(["q"]),!1);this.updateParams(column,filter)}_handleDateRangeChange(event){var filter=event.detail.range;this.$.datasource.mergeParams(filter)}_handleSelectionChanged(event){if(event.detail.selected){this.actionRow=event.detail.data;this.showActions=!0}else{this.showActions=!1}}_processTemplateLiteral(literal){const content=literal.substring(1,literal.length-1),columns=content.split("("),column=columns[0],columns2=columns[1].split(")"),extreme=columns2[0],tokens=columns2[1].substring(1);for(let i=0;i<this.cols.length;i++){const col=this.cols[i];if(col.label===column){let dateString;if("MIN"===extreme.toUpperCase()){dateString=this.rows[0][i]}else if("MAX"===extreme.toUpperCase()){dateString=this.rows[this.rows.length-1][i]}let date;if("datetime"===col.type||"date"===col.type){date=dateString?format(parseISO(dateString),tokens):""}return date}}Logger.i.switchConfiguration(`${column} is not a valid column for the export file name, 
      Valid options are ${this.cols.map(c=>c.label).join(",")}`);return""}_processExportFileNameTemplate(tpl){const re=/\[([^\]]+)?]/g;let match;const matches=tpl.match(re);for(let i=0;i<matches.length;i++){match=matches[i];tpl=tpl.replace(match,this._processTemplateLiteral(match))}return tpl}generateCSV(){const self=this,SEPARATOR=",";let csvContent="data:text/csv;charset=utf-8,";const headers=this.cols.filter(col=>"href"!=col.type).map(function(i){return i.label}),row=headers.join(SEPARATOR);csvContent+=row+"\r\n";this.rows.forEach(function(row){const rowArray=[];for(let i=0;i<self.cols.length;i++){const colType=self.cols[i].type;if("href"!==colType){const columnValue=row[i];if("string"===colType&&"string"===typeof columnValue){rowArray.push(columnValue.replace(/[#,]/g," "))}else{rowArray.push(columnValue)}}}row=rowArray.join(SEPARATOR);csvContent+=row+"\r\n"});var encodedUri=encodeURI(csvContent),link=document.createElement("a");link.setAttribute("href",encodedUri);if("export"in this.e.details){link.setAttribute("download",this._processExportFileNameTemplate(this.e.details["export"].csv.filename))}else{link.setAttribute("download",this.e.defaultValue+".csv")}document.body.appendChild(link);link.click()}_validateType(x){return"type"in x?x.type.toLowerCase():"table"}_validatePageLimits(x){return"page_limits"in x?x.page_limits:[]}generatePDF(){const self=this;var doc=new jsPDF("l","pt");const rows=[];this.rows.forEach(function(row){const rowArray=[];for(let i=0;i<self.cols.length;i++){if("href"!=self.cols[i].type){rowArray.push(row[i])}}rows.push(rowArray)});const table=new AutoTable(doc);table.autoTable(this.cols.filter(col=>"href"!=col.type).map(function(i){return i.label}),rows,{theme:"grid",styles:{overflow:"linebreak"},columnStyles:{text:{columnWidth:"auto"}},margin:{top:10,horizontal:7}});if("export"in this.e.details){doc.save(this._processExportFileNameTemplate(this.e.details["export"].pdf.filename))}else{doc.save(this.e.defaultValue+".pdf")}}onMqttMessage(message){super.onMqttMessage(message);var self=this;console.log("datalist on-mqtt-message");var payload=JSON.parse(message.payloadString);console.info(payload);self.parseResponseIntoProperties(payload)}validate(){if(this.selectable){this.updateParams(this.actionRow,!1)}return new this.Validation(!0,"valid")}getName(){return this.e.formName}getValue(){return null}valid(){}invalid(){}init(pElement,loader){super.init(pElement,loader);const self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.title=DataListElementBase.toTitleCase(pElement.name);self.params=loader.pl.paramsCopy();if("selectable"in this.e.details){self.selectable=this.e.details.selectable;"select_type"in this.e.details?self.selectType=this.e.details.select_type:self.selectType="multi"}self.loader=this.loadData()}};var datalistElement={DataListElementBase:DataListElementBase};const DatasourceListStyles=css`
:host {
    display: block;
}

/* -- import Roboto Font ---------------------------- */
@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOiCnqEu92Fr1Mu51QrEzQdKg.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc-CsE.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xMIzc.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc-CsE.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic-CsE.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc-CsE.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1MmgVxMIzc.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fABc9.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxP.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fABc9.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfABc9.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfABc9.ttf) format('truetype');
}

/* -- You can use this tables in Bootstrap (v3) projects. -- */
/* -- Box model ------------------------------- */
*,
*:after,
*:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

/* -- Demo style ------------------------------- */
html,
body {
    position: relative;
    min-height: 100%;
    height: 100%;
}

html {
    position: relative;
    overflow-x: hidden;
    margin: 16px;
    padding: 0;
    min-height: 100%;
    font-size: 62.5%;
}

body {
    font-family: "RobotoDraft", "Roboto", "Helvetica Neue, Helvetica, Arial", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.01rem;
    color: #212121;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

#demo {
    margin: 20px auto;
    max-width: 960px;
}

#demo h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: 0;
    font-weight: 300;
    color: #212121;
    text-transform: inherit;
    margin-bottom: 1rem;
    text-align: center;
}

#demo h2 {
    font-size: 1.5rem;
    line-height: 2.8rem;
    letter-spacing: 0.01rem;
    font-weight: 400;
    color: #212121;
    text-align: center;
}


.topnav {
    overflow: hidden;
    /*background-color: #ffffff;*/
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.topnav .search-container {
    display: inline-block;
}

.topnav input[type=text] {
    padding: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: #f5f5f5;
    color: #606060;
    font-size: 14px;
    border: none;
    width: 600px;
}

.topnav .search-container button {
    padding: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #FFFFFF;
    background-color: var(--app-default-color);
    font-size: 14px;
    border: none;
    cursor: pointer;

}

.topnav .search-container button:hover {
    background: #ccc;
}

@media screen and (max-width: 790px) {
    .topnav {
        overflow: hidden;
        background-color: #ffffff;
        width: 100%;
        display: contents;
        justify-content: normal;
        align-items: normal;

    }

    .topnav .search-container {
        display: inline-block;
    }

    .topnav .search-container {
        display: contents;
        width: 100%;
        float: none;
    }

    .topnav a, .topnav input[type=text], .topnav .search-container button {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
    }

    .topnav input[type=text] {
        border: 1px solid #ccc;
    }


`;var datasourceListCss={DatasourceListStyles:DatasourceListStyles};class DataSourceList extends dataSourceMixin(LitElement){static get styles(){return[DatasourceListStyles,css`
        :host {
          display: block;
        }
      `]}constructor(){super();this.columns=[];this.cols=[];this.data=[];this.selected=[];this.selectedRadio="";this.availableSize=[10,50,100,500]}render(){return html$1`
       
        <!-- view starts here -->
        ${this.createCustomElement(this.type)}
`}static get is(){return"datasource-list"}static get properties(){return{data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},cols:{type:Array,value:[]},columns:{type:Array},paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,type:{type:String,value:"table"},details:Object,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String,searchText:String,selectType:{type:String},selectedRadio:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this._loadTypeModule()}_searchReset(){this.shadowRoot.querySelector("#q").value=""}_loadTypeModule(){import("./"+`${this.type}-type.js`).then(()=>{}).catch(err=>{console.warn("ERROR IS.."+err)})}createCustomElement(type){if("table"==type){return html$1`<table-type
        .data = ${this.data}
        .details = ${this.details}
        .columns = ${this.columns}
        .paginate = ${this.paginate}
        .page = ${this.page}
        .size = ${this.size}
        .oldpage = ${this.oldPage}
        .totalElements = ${this.totalElements} 
        .totalPages = ${this.totalPages}
        .availableSize = ${this.availableSize}
        .selectable = ${this.selectable} 
        .selected = ${this.selected}
        .title=${this.title}
        .pl=${this.pl}
        .q=${this.q}
        .selectType = ${this.selectType}
        .selectedRadio = ${this.selectedRadio}
        .searchText=${this.searchText}
        @search="${this._search}"
        @clear-search="${this._clearSearch}"
        @page-change="${this._pageChanged}"
        @export="${this._exportType}"
        @size-change="${this._sizeChanged}"
        @dropdown-filter="${this._handleInputChange}"
        @selection-changed="${this._handleSelectionChanged}"
        ></table-type>`}if("card"==type){return html$1`<card-type
        .data = ${this.data}
        .details = ${this.details}
        .columns = ${this.columns}
        .paginate = ${this.paginate}
        .page = ${this.page}
        .size = ${this.size}
        .oldpage = ${this.oldPage}
        .totalElements = ${this.totalElements} 
        .totalPages = ${this.totalPages}
        .availableSize = ${this.availableSize}
        .selectable = ${this.selectable} 
        .selected = ${this.selected}
        .title=${this.title}
        .pl=${this.pl}
        ></card-type>`}if("inbox"==type){return html$1`<inbox-type
      .data = ${this.data}
      .details = ${this.details}
      .columns = ${this.columns}
      .paginate = ${this.paginate}
      .page = ${this.page}
      .size = ${this.size}
      .oldpage = ${this.oldPage}
      .totalElements = ${this.totalElements} 
      .totalPages = ${this.totalPages}
      .availableSize = ${this.availableSize}
      .selectable = ${this.selectable} 
      .selected = ${this.selected}
      .title=${this.title}
      ></inbox-type>`}if("staffprofile"==type){return html$1`<staffprofile-type
      .data = ${this.data}
      .details = ${this.details}
      .columns = ${this.columns}
      .paginate = ${this.paginate}
      .page = ${this.page}
      .size = ${this.size}
      .oldpage = ${this.oldPage}
      .totalElements = ${this.totalElements} 
      .totalPages = ${this.totalPages}
      .availableSize = ${this.availableSize}
      .selectable = ${this.selectable} 
      .selected = ${this.selected}
      .title=${this.title}
      @do-service="${this._doService}"
      ></staffprofile-type>`}if("contact"==type){return html$1`<contact-type
    .data = ${this.data}
    .details = ${this.details}
    .columns = ${this.columns}
    .paginate = ${this.paginate}
    .page = ${this.page}
    .size = ${this.size}
    .oldpage = ${this.oldPage}
    .totalElements = ${this.totalElements} 
    .totalPages = ${this.totalPages}
    .availableSize = ${this.availableSize}
    .selectable = ${this.selectable} 
    .selected = ${this.selected}
    .title=${this.title}
    ></contact-type>`}}searchFields(columns){return columns.filter(function(item){return item.filter})}_handleSort(evt){console.log(evt)}_handleInputChange(evt){this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:evt.detail.path,value:evt.detail.value}}))}_searchFieldsExist(columns){return 0<columns.filter(function(item){return item.filter}).length}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}_doService(evt){const self=this;self.pl._dialog(evt.detail.service,self.params)}_exportType(evt){const type=evt.detail.type;this.dispatchEvent(new CustomEvent("export",{detail:{type:type}}))}_pageChanged(evt){const page=evt.detail.page,oldPage=evt.detail.oldPage;if(oldPage!==void 0){this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:oldPage,page:page}}))}this.page=page}_sizeChanged(evt){const size=evt.detail.size,oldSize=evt.detail.size;if(oldSize!==void 0){this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:oldSize,size:size}}))}this.size=size}_extractData(rowData,columnProperty){if(columnProperty){const splittedProperties=columnProperty.split(".");if(1<splittedProperties.length){return splittedProperties.reduce((prevRow,property)=>{if("string"===typeof prevRow&&rowData[prevRow]&&rowData[prevRow][property]){return rowData[prevRow][property]}return prevRow[property]||""})}return rowData[columnProperty]}return null}_handleSelectionChanged(event){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:event.detail.selected}}))}_selectChange(event){let localTarget;if(event.type&&"change"===event.type){localTarget=Polymer.dom(event).localTarget}else{localTarget=event}const tr=Polymer.dom(localTarget).parentNode.parentNode,rowData=localTarget.rowData,rowId=localTarget.rowIndex;if(localTarget.checked){this.push("selected",rowData.id);tr.classList.add("selected")}else{this.splice("selected",this.selectedRows.indexOf(rowData.id),1);tr.classList.remove("selected")}}_search(evt){var filter=evt.detail.value,column=evt.detail.column,columns=evt.detail.searchFields;this.dispatchEvent(new CustomEvent("search",{detail:{column:column,searchFields:columns,value:filter}}))}_clearSearch(event){this.dispatchEvent(new CustomEvent("clear-search",{detail:{searchFields:event.detail.searchFields}}))}}customElements.define(DataSourceList.is,DataSourceList);var datasourceList={DataSourceList:DataSourceList};class DataListElement extends DataListElementBase{constructor(){super();this.searchText=""}renderDefault(){return html$1`
    ${this.loading?html$1`<loader-element></loader-element>`:html$1`
    <datasource-list
                        id="dt"
                        paginate
                        .selectable="${this.selectable}"
                        filters
                        .details="${this.e.details}"
                        .pl="${this.pl}"
                        .data="${this.data}"
                        .page="${this.page}"
                        .q="${this.q}"
                        .columns="${this.columns}"
                        .cols="${this.cols}"
                        .size="${this.limit}"
                        .title="${this.title}"
                        toggle-columns="${this.toggleColumns}"
                        .searchText = "${this.searchText}"
                        
                        @sort="${this._handleSort}"
                        @filter="${this._handleFilter}"
                        @search="${this._handleSearch}"
                        @clear-search="${this._handleClearSearch}"
                        @dropdown-filter="${this._handleDFilter}"
                        @filter-th-content="${this._handleFilterTh}"
                        @filter-date-range="${this._handleDateRangeChange}"
                        @selection-changed="${this._handleSelectionChanged}"
                        @page-change="${this._handlePageChanged}"
                        @size-change="${this._handleLimitChanged}"
                        @export="${this._handleExport}"
                        .selected = ${this.selected}
                        .selectedRadio = ${this.selectedRadio}
                        .selectType = ${this.selectType}

                        .selected-rows=${this.selectedRows}
                        .totalElements="${this.totalElements}"
                        .type="${this._validateType(this.e.details)}"
                        .availableSize="${this._validatePageLimits(this.e.details)}"
                        .totalPages="${this.totalPages}">
                </datasource-list>
    `}
                `}static get properties(){return{table:{type:Boolean,value:!0},grid:{type:Boolean,value:!1},list:{type:Boolean,value:!1},sortProperty:{type:String},selectedRows:{type:Array,value:[]},showActions:{type:Boolean,value:!1,notify:!0},searchText:String,selected:{type:Array},selectType:{type:String,value:"multi"},selectedRadio:{type:String,value:""}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_switchView(event){const sel=event.currentTarget.selected;if(0===sel){this.table=!0;this.list=!1;this.grid=!1}else if(1===sel){this.table=!1;this.list=!0;this.grid=!1}else if(2===sel){this.table=!1;this.list=!1;this.grid=!0}}_handleSearch(event){var filter=event.detail.value,column=event.detail.column,columns=event.detail.searchFields;this.searchText=filter;this.deleteParamKeys(columns.concat(["q"]),!1);this.updateParams(column,filter)}_handleClearSearch(event){this.searchText="";var columns=event.detail.searchFields;this.deleteParamKeys(columns.concat(["q"]),!0)}_handleDateRangeChange(event){var filter=event.detail.range;this.$.datasource.mergeParams(filter)}_handleSelectionChanged(event){if(event.detail.selected){this.actionRow=event.detail.selected;this.showActions=!0}else{this.showActions=!1}}_handleExport(event){"pdf"==event.detail.type?this.generatePDF():this.generateCSV()}}customElements.define(DataListElement.is,DataListElement);export{ironCheckedElementBehavior as $ironCheckedElementBehavior,paperCheckedElementBehavior as $paperCheckedElementBehavior,HookData$1 as $HookData,autoTableText$1 as $autoTableText,common as $common,config as $config,cssParser as $cssParser,htmlParser as $htmlParser,inputParser as $inputParser,inputValidator as $inputValidator,main as $main,models as $models,polyfills as $polyfills,state$1 as $state,tableDrawer as $tableDrawer,widthCalculator as $widthCalculator,datalistElement as $datalistElement,datasourceListCss as $datasourceListCss,datasourceList as $datasourceList,IronCheckedElementBehaviorImpl,IronCheckedElementBehavior,PaperCheckedElementBehaviorImpl,PaperCheckedElementBehavior,HookData,CellHookData,autoTableText as $autoTableTextDefault,getStringWidth,ellipsize,addTableBorder,getFillStyle,applyUserStyles,applyStyles,marginOrPadding,styles,FONT_ROW_RATIO,defaultConfig,defaultStyles,getTheme,parseCss,parseHtml,parseInput,validateInput as $inputValidatorDefault,AutoTable as $mainDefault,Table,Row,Cell,Column,assign,globalDefaults,documentDefaults,state as $stateDefault,getGlobalOptions,getDocumentOptions,setupState,resetState,setDefaults,drawTable,addPage,calculateWidths,DataListElementBase,DatasourceListStyles,DataSourceList};