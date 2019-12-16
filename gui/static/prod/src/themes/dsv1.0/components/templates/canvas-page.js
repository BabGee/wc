import{html,css}from"../../../../../node_modules/lit-element/lit-element.js";import"./section-page.js";import"../snack-bar.js";import"../form-render.js";import{CanvasStyles}from"../../styles/canvas.js";import{Reset,Colors,Fonts}from"../../styles/shared.js";import{CanvasPageBase}from"../../../../components/templates/canvas-page.js";import"./missing-page.js";class CanvasPage extends CanvasPageBase{render(){if(!this.interface){return html`<div>Cannot render an UNDEFINED tab.</div>`}else if(!this.pageGroup||!this.page){return html`
      <missing-page></missing-page>
      `}return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
      ${Reset}
      ${Colors}
      ${Fonts}
      ${CanvasStyles}
      </style>


    ${"dialog"===this.view?html`<button @click="${this._viewList}">Back</button>`:html``}
    
    ${"dialog"===this.view?html`<section-page id="dialog" queue=${this.dialogServicesQueue} ></section-page>`:html`
    ${this.pageGroup.pages.map(page=>html`
    <section>
    ${page.pageInputGroups.map(feed=>html`<form-render .params=${this.parseParams()} .top=${this._computeTop()} .feed="${feed}"></form-render>`)}
    </section>`)}
    `}
    
    ${html`        <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>
    `}
    
    `}static get styles(){return[Reset,Colors,Fonts,CanvasStyles,css`:host { display: block; }`]}static get properties(){return{tab:Object,group:Object,toggle:Boolean}}_viewList(){if(!this.dialogsStack.length){this.view="list";this.updateLocationHash()}else{const args=this.dialogsStack.pop();console.log(args);const dialog=this.qs("#dialog");dialog.payload=args[0];dialog.params=args[1];dialog.loading=!1}}}window.customElements.define("canvas-page",CanvasPage);