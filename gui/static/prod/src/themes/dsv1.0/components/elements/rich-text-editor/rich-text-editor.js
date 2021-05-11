import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const RichTextEditorBase=class extends utilsMixin(SerializableElement){static get is(){return"rich-text-editor"}static get properties(){return{params:{type:Object,htmlValue:{}},type:String,htmlValue:{notify:!0},columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=RichTextEditorBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var richTextEditor={RichTextEditorBase:RichTextEditorBase};const defaultParagraphSeparatorString="defaultParagraphSeparator",formatBlock="formatBlock",addEventListener=(parent,type,listener)=>parent.addEventListener(type,listener),appendChild=(parent,child)=>parent.appendChild(child),createElement=tag=>document.createElement(tag),queryCommandState=command=>document.queryCommandState(command),queryCommandValue=command=>document.queryCommandValue(command),exec=(command,value=null)=>document.execCommand(command,!1,value),defaultActions={bold:{icon:"<b>B</b>",title:"Bold",state:()=>queryCommandState("bold"),result:()=>exec("bold")},italic:{icon:"<i>I</i>",title:"Italic",state:()=>queryCommandState("italic"),result:()=>exec("italic")},underline:{icon:"<u>U</u>",title:"Underline",state:()=>queryCommandState("underline"),result:()=>exec("underline")},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:()=>queryCommandState("strikeThrough"),result:()=>exec("strikeThrough")},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:()=>exec(formatBlock,"<h1>")},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:()=>exec(formatBlock,"<h2>")},paragraph:{icon:"&#182;",title:"Paragraph",result:()=>exec(formatBlock,"<p>")},quote:{icon:"&#8220; &#8221;",title:"Quote",result:()=>exec(formatBlock,"<blockquote>")},olist:{icon:"&#35;",title:"Ordered List",result:()=>exec("insertOrderedList")},ulist:{icon:"&#8226;",title:"Unordered List",result:()=>exec("insertUnorderedList")},code:{icon:"&lt;/&gt;",title:"Code",result:()=>exec(formatBlock,"<pre>")},line:{icon:"&#8213;",title:"Horizontal Line",result:()=>exec("insertHorizontalRule")},link:{icon:"&#128279;",title:"Link",result:()=>{const url=window.prompt("Enter the link URL");if(url)exec("createLink",url)}},image:{icon:"&#128247;",title:"Image",result:()=>{const url=window.prompt("Enter the image URL");if(url)exec("insertImage",url)}}},defaultClasses={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},init=settings=>{const actions=settings.actions?settings.actions.map(action=>{if("string"===typeof action)return defaultActions[action];else if(defaultActions[action.name])return{...defaultActions[action.name],...action};return action}):Object.keys(defaultActions).map(action=>defaultActions[action]),classes={...defaultClasses,...settings.classes},defaultParagraphSeparator=settings[defaultParagraphSeparatorString]||"div",actionbar=createElement("div");actionbar.className=classes.actionbar;appendChild(settings.element,actionbar);const content=settings.element.content=createElement("div");content.contentEditable=!0;content.className=classes.content;content.oninput=({target:{firstChild}})=>{if(firstChild&&3===firstChild.nodeType)exec(formatBlock,`<${defaultParagraphSeparator}>`);else if("<br>"===content.innerHTML)content.innerHTML="";settings.onChange(content.innerHTML)};content.onkeydown=event=>{if("Enter"===event.key&&"blockquote"===queryCommandValue(formatBlock)){setTimeout(()=>exec(formatBlock,`<${defaultParagraphSeparator}>`),0)}};appendChild(settings.element,content);actions.forEach(action=>{const button=createElement("button");button.className=classes.button;button.innerHTML=action.icon;button.title=action.title;button.setAttribute("type","button");button.onclick=()=>action.result()&&content.focus();if(action.state){const handler=()=>button.classList[action.state()?"add":"remove"](classes.selected);addEventListener(content,"keyup",handler);addEventListener(content,"mouseup",handler);addEventListener(button,"click",handler)}appendChild(actionbar,button)});if(settings.styleWithCSS)exec("styleWithCSS");exec(defaultParagraphSeparatorString,defaultParagraphSeparator);return settings.element};var pell={exec,init},pell$1={exec:exec,init:init,default:pell};const richTextEditorStyles=css`
.element-container{
    padding: .75rem;
}
.container {
    border: 1px solid rgb(183, 181, 181);
    padding: 16px;
    border-radius: 6px;
}
.pell {
    border: 1px solid rgba(10, 10, 10, 0.1);
    box-sizing: border-box; }

.pell-content {
    box-sizing: border-box;
    height: 300px;
    outline: 0;
    overflow-y: auto;
    padding: 10px; }

.pell-actionbar {
    background-color: #FFF;
    border-bottom: 1px solid rgba(10, 10, 10, 0.1); }

.pell-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 30px;
    outline: 0;
    width: 30px;
    vertical-align: bottom; }

.pell-button-selected {
    background-color: #F0F0F0; }
`;var richTextEditorCss={richTextEditorStyles:richTextEditorStyles};class RichTextEditor extends RichTextEditorBase{constructor(){super();this.value=""}renderDefault(){return html`
    <div class="element-container">
      <div class="container">
        <div id="pell"></div>
        <span class="validation-info" style="display: none;"></span>
      </div>
    </div>
    `}static get styles(){return[richTextEditorStyles,css`
      :host {
        display: block;
      }
    `]}getValue(){return this.value}invalid(message){this.shadowRoot.querySelector(".validation-info").style.display="block";if(message){this.shadowRoot.querySelector(".validation-info").textContent=message}}valid(){this.shadowRoot.querySelector(".validation-info").style.display="none"}firstUpdated(){const self=this;init({element:this.shadowRoot.getElementById("pell"),onChange:html$$1=>self.value=html$$1,defaultParagraphSeparator:"div",styleWithCSS:!1,classes:{actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"}})}}window.customElements.define(RichTextEditor.is,RichTextEditor);export{richTextEditor as $richTextEditor,pell$1 as $pell,richTextEditorCss as $richTextEditorCss,RichTextEditorBase,exec,init,pell as $pellDefault,richTextEditorStyles};