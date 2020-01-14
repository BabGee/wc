<<<<<<< HEAD
import{utilsMixin,SerializableElement,css,html,SharedStyles}from"../../../../components/adaptive-ui.js";const RichTextEditorBase=class extends utilsMixin(SerializableElement){static get is(){return"rich-text-editor"}static get properties(){return{params:{type:Object,htmlValue:{}},type:String,htmlValue:{notify:!0},columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=RichTextEditorBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var richTextEditor={RichTextEditorBase:RichTextEditorBase};class RichTextEditor extends RichTextEditorBase{constructor(){super();this.value=""}renderDefault(){return html`
=======
import{utilsMixin,SerializableElement,html,css,SharedStyles}from"../../../../components/adaptive-ui.js";const defaultParagraphSeparatorString="defaultParagraphSeparator",formatBlock="formatBlock",addEventListener=(parent,type,listener)=>parent.addEventListener(type,listener),appendChild=(parent,child)=>parent.appendChild(child),createElement=tag=>document.createElement(tag),queryCommandState=command=>document.queryCommandState(command),queryCommandValue=command=>document.queryCommandValue(command),exec=(command,value=null)=>document.execCommand(command,!1,value),defaultActions={bold:{icon:"<b>B</b>",title:"Bold",state:()=>queryCommandState("bold"),result:()=>exec("bold")},italic:{icon:"<i>I</i>",title:"Italic",state:()=>queryCommandState("italic"),result:()=>exec("italic")},underline:{icon:"<u>U</u>",title:"Underline",state:()=>queryCommandState("underline"),result:()=>exec("underline")},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:()=>queryCommandState("strikeThrough"),result:()=>exec("strikeThrough")},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:()=>exec(formatBlock,"<h1>")},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:()=>exec(formatBlock,"<h2>")},paragraph:{icon:"&#182;",title:"Paragraph",result:()=>exec(formatBlock,"<p>")},quote:{icon:"&#8220; &#8221;",title:"Quote",result:()=>exec(formatBlock,"<blockquote>")},olist:{icon:"&#35;",title:"Ordered List",result:()=>exec("insertOrderedList")},ulist:{icon:"&#8226;",title:"Unordered List",result:()=>exec("insertUnorderedList")},code:{icon:"&lt;/&gt;",title:"Code",result:()=>exec(formatBlock,"<pre>")},line:{icon:"&#8213;",title:"Horizontal Line",result:()=>exec("insertHorizontalRule")},link:{icon:"&#128279;",title:"Link",result:()=>{const url=window.prompt("Enter the link URL");if(url)exec("createLink",url)}},image:{icon:"&#128247;",title:"Image",result:()=>{const url=window.prompt("Enter the image URL");if(url)exec("insertImage",url)}}},defaultClasses={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},init=settings=>{const actions=settings.actions?settings.actions.map(action=>{if("string"===typeof action)return defaultActions[action];else if(defaultActions[action.name])return{...defaultActions[action.name],...action};return action}):Object.keys(defaultActions).map(action=>defaultActions[action]),classes={...defaultClasses,...settings.classes},defaultParagraphSeparator=settings[defaultParagraphSeparatorString]||"div",actionbar=createElement("div");actionbar.className=classes.actionbar;appendChild(settings.element,actionbar);const content=settings.element.content=createElement("div");content.contentEditable=!0;content.className=classes.content;content.oninput=({target:{firstChild}})=>{if(firstChild&&3===firstChild.nodeType)exec(formatBlock,`<${defaultParagraphSeparator}>`);else if("<br>"===content.innerHTML)content.innerHTML="";settings.onChange(content.innerHTML)};content.onkeydown=event=>{if("Enter"===event.key&&"blockquote"===queryCommandValue(formatBlock)){setTimeout(()=>exec(formatBlock,`<${defaultParagraphSeparator}>`),0)}};appendChild(settings.element,content);actions.forEach(action=>{const button=createElement("button");button.className=classes.button;button.innerHTML=action.icon;button.title=action.title;button.setAttribute("type","button");button.onclick=()=>action.result()&&content.focus();if(action.state){const handler=()=>button.classList[action.state()?"add":"remove"](classes.selected);addEventListener(content,"keyup",handler);addEventListener(content,"mouseup",handler);addEventListener(button,"click",handler)}appendChild(actionbar,button)});if(settings.styleWithCSS)exec("styleWithCSS");exec(defaultParagraphSeparatorString,defaultParagraphSeparator);return settings.element};var pell={exec,init},pell$1={exec:exec,init:init,default:pell};const RichTextEditorBase=class extends utilsMixin(SerializableElement){static get is(){return"rich-text-editor"}static get properties(){return{params:{type:Object,htmlValue:{}},type:String,htmlValue:{notify:!0},columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.required&&!this.getValue()){return new this.Validation(!1,this.e.name+" is Required")}return new this.Validation(!0,"valid")}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=RichTextEditorBase.toTitleCase(pElement.name);this.required=this.e.required||pElement.min&&0<pElement.min;this.value=pElement.defaultValue||""}};var richTextEditor={RichTextEditorBase:RichTextEditorBase};class RichTextEditor extends RichTextEditorBase{constructor(){super();this.value=""}renderDefault(){return html`
>>>>>>> d6dfa267387a22108b29e08fe5c46fa0b0d3909e
         ${SharedStyles}
         <link rel="stylesheet" type="text/css" href="https://unpkg.com/pell/dist/pell.min.css">
         <style>
         #pell {
              border: 1px solid var(--app-default-color);
              border-radius: 0;
              -webkit-box-shadow: none;
              box-shadow: none;
        }
         </style>
    <div class="column">
    <div class="field">
      <label class="form-label"><span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name}</label>
      <div class="control">
        <div id="pell"></div>
      </div>
    </div>
    </div>
      `}static get styles(){return css`
<<<<<<< HEAD
    `}getValue(){return this.value}invalid(){}valid(){}createRenderRoot(){return this}firstUpdated(){const self=this;pell.init({element:document.getElementById("pell"),onChange:html$$1=>self.value=html$$1,defaultParagraphSeparator:"div",styleWithCSS:!1,classes:{actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"}})}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(RichTextEditor.is,RichTextEditor);export{richTextEditor as $richTextEditor,RichTextEditorBase};
=======
    `}getValue(){return this.value}invalid(message){}valid(validation){}createRenderRoot(){/**
     * Render template in light DOM. Note that shadow DOM features like
     * encapsulated CSS are unavailable.
     */return this}firstUpdated(){const self=this;// Initialize pell on an HTMLElement
pell.init({// <HTMLElement>, required
element:document.getElementById("pell"),// <Function>, required
// Use the output html, triggered by element's `oninput` event
onChange:html=>self.value=html,// <string>, optional, default = 'div'
// Instructs the editor which element to inject via the return key
defaultParagraphSeparator:"div",// <boolean>, optional, default = false
// Outputs <span style="font-weight: bold;"></span> instead of <b></b>
styleWithCSS:!1,// classes<Array[string]> (optional)
// Choose your custom class names
classes:{actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"}})}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(RichTextEditor.is,RichTextEditor);export{pell$1 as $pell,pell as $pellDefault,richTextEditor as $richTextEditor,RichTextEditorBase,exec,init};
>>>>>>> d6dfa267387a22108b29e08fe5c46fa0b0d3909e
