import{PageViewElement,css,html,script,Reset,Colors,Fonts}from"../../../../components/adaptive-ui.js";import"./section-page.js";const CanvasPageBase=class extends PageViewElement{constructor(){super()}_tabs(page){if(page===void 0){return}return page.tabs}_viewList(){if(!this.dialogsStack.length){this.view="list";this.updateLocationHash()}else{const args=this.dialogsStack.pop();console.log(args);const dialog=this.qs("#dialog");dialog.payload=args[0];dialog.params=args[1];dialog.loading=!1}}async _computeTop(){await this.updateComplete;return this.qs("#top")}};var canvasPage={CanvasPageBase:CanvasPageBase};const CanvasStyles=css`

  :host {
  
  display:block;
  width:100vw;
  height:100vh;
  overflow:scroll;
  
      background-color: #f8f8f8;

  }

`;var canvas={CanvasStyles:CanvasStyles};class CanvasPage extends CanvasPageBase{render(){if(!this.interface){return html`<div>Cannot render an UNDEFINED tab.</div>`}else if(!this.pageGroup||!this.page){return html`
      <missing-page></missing-page>
      `}return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <script>
      
      ${"NenaSasa"===this.gateway.name?html`

        ${this.gateway.googleAnalyticsCode?html`

        <script async src="https://www.googletagmanager.com/gtag/js?id=${this.gateway.googleAnalyticsCode}"></script>
        
        ${script(`

          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${this.gateway.googleAnalyticsCode}');
        
        
        `)}
        
        
        `:html``}

      

      
      `:html``}
      
      
      
      </script>
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
    
    `}static get styles(){return[Reset,Colors,Fonts,CanvasStyles,css`:host { display: block; }`]}static get properties(){return{tab:Object,group:Object,toggle:Boolean}}_viewList(){if(!this.dialogsStack.length){this.view="list";this.updateLocationHash()}else{const args=this.dialogsStack.pop();console.log(args);const dialog=this.qs("#dialog");dialog.payload=args[0];dialog.params=args[1];dialog.loading=!1}}}window.customElements.define("canvas-page",CanvasPage);export{canvasPage as $canvasPage,canvas as $canvas,CanvasPageBase,CanvasStyles};