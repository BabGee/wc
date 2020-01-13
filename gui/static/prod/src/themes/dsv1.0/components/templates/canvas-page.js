import{css,html,Reset,Colors,Fonts,CanvasPageBase}from"../../../../components/adaptive-ui.js";import"./section-page.js";const CanvasStyles=css`

  :host {
  
  display:block;
  width:100vw;
  height:100vh;
  overflow:scroll;
  
      background-color: #f8f8f8;

  }

`;var canvas={CanvasStyles:CanvasStyles};class CanvasPage extends CanvasPageBase{render(){// todo implement 404 tab to all pages
if(!this.interface){return html`<div>Cannot render an UNDEFINED tab.</div>`}else if(!this.pageGroup||!this.page){return html`
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
    ${this.pageGroup.pages.map((page,index)=>html`
    <section>
    ${page.pageInputGroups.map(feed=>html`<form-render .params=${this.parseParams()} .top=${this._computeTop()} .feed="${feed}"></form-render>`)}
    </section>`)}
    `}
    
    ${html`        <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>
    `}
    
    `}static get styles(){return[Reset,Colors,Fonts,CanvasStyles,css`:host { display: block; }`]}// todo deperecated, left for reference
static get properties(){return{tab:Object,group:Object,toggle:Boolean}}/**
     * Dialogs Back navigation, Pop dialogs' stack
     *
     * @param evt
     * @private
     */_viewList(evt){if(!this.dialogsStack.length){this.view="list";this.updateLocationHash()}else{const args=this.dialogsStack.pop();console.log(args);const dialog=this.qs("#dialog");dialog.payload=args[0];dialog.params=args[1];dialog.loading=!1}}}window.customElements.define("canvas-page",CanvasPage);export{canvas as $canvas,CanvasStyles};