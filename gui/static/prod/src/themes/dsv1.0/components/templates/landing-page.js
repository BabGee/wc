import{PageViewElement,VIEW_MODE_DIALOG,html}from"../../../../components/adaptive-ui.js";import"./section-page.js";const LandingPageBase=class extends PageViewElement{constructor(){super()}_tabs(page){if(page===void 0){return}return page.tabs}static get properties(){return{toggle:Boolean}}_viewList(){if(!this.dialogsStack.length){this.view="list";this.updateLocationHash()}else{const args=this.dialogsStack.pop();console.log(args);const dialog=this.qs("#dialog");dialog.payload=args[0];dialog.params=args[1];dialog.loading=!1}}async _computeTop(){await this.updateComplete;return this.qs("#top")}};var landingPage={LandingPageBase:LandingPageBase};class LandingPage extends LandingPageBase{render(){if(!this.interface){return html` 
      <style>
      @font-face {
        src: url('${this.getMainFontPath(this.gateway.mainFont)}');
        font-family:'main';
        ;
      }
  
      *{
        font-family: 'main',BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif
        ;
      } 
       
      body{
        font-family: 'main',BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif
        ;
      } 
      
      </style>
      <div class="Wallop Wallop--fade">
        <div class="Wallop-list">
          <div class="Wallop-item  has-background-image" >
            <div id="main-hero" class="hero-body pt-80 pb-80">
              <div class="container has-text-centered">
                  <div class="columns is-vcentered">
                      <div class="column is-12 has-text-centered">
                        <img class="main-menu-avatar" src="images/web/thinking-emoji.png" alt="">
                        <h1 class="title main-title is-4 dark-text" style="font-size: 56px;font-weight: 300;">
                            Oops!
                        </h1>
                        <h2 class="subtitle is-4 dark-text pt-10 pb-10">
                          We can't seem to find the page you are looking for <br>
                          Cannot render an UNDEFINED tab.
                        </h2>
                        <br>
                        <div class="action">
                           <a href="/" class="button button-cta primary-btn rounded" style="font-size: 28px; font-weight: 500;">
                            Go Back Home
                           </a>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
         </div>
        </div>
      </div>
`}else if(!this.pageGroup||!this.page){return html`
      <missing-page></missing-page>
      `}return html` 
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">   
    <style>

    @font-face {
      src: url('${this.getMainFontPath(this.gateway.mainFont)}');
      font-family:'main';
      ;
    }

    *{
      font-family: 'main',BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif
      ;
    } 
     
    body{
      font-family: 'main',BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif
      ;
    } 

   
        body{
          font-family: 'main',BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            min-height: 100%;
            font-size: 14px;
            line-height: 20px;
            color: rgb(121, 85, 85);
            background-color: #F0F5FE;
        }
        .ii__container-main{
            margin: 0 auto;
            padding: 0 20px;
        }
        .ii__container.ii__container--home{
            padding-top: 30px;
        }

        .ii__container{
            max-width: 1068px;
            margin-bottom: 9px;
            padding-right: 24px;
            padding-bottom: 25px;
            padding-left: 24px;
        }
        .wa__container{
            margin-left: auto;
            margin-right: auto;
            max-width: 940px;
        }
        a.navbar-item:hover {
            background-color: transparent;
            color: inherit;
        }
        .ii__title {
            margin-top: 0px;
            margin-bottom: 16px;
            color: #000;
            font-size: 42px;
            line-height: 52px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        .ii__paragraph {
            font-size: 14px;
            line-height: 20px;
            font-weight: 600;
            letter-spacing: 0.15px;
            color: rgba(255, 255, 255, .7);
        }

        .ii__footer {
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #fff;
            color: #000;
        }
        .ii-footerfexrow{
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            margin-bottom: 60px;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
        }
        .ii-footer-col {
            margin-left: 10px;
            -webkit-box-flex: 0;
            -webkit-flex: 0 auto;
            -ms-flex: 0 auto;
            flex: 0 auto;
        }
        .ii-footer-col-sm{
            margin-left: 5px;
            -webkit-box-flex: 0;
            -webkit-flex: 0 auto;
            -ms-flex: 0 auto;
            flex: 0 auto;
        }
        .ii__footer-col-title {
            color: #409db5;
            font-size: 12px;
            line-height: 16px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
        .ii__footer-col-link {
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
            color: #a8a9b7;
            font-size: 12px;
            line-height: 24px;
            font-weight: 600;
            letter-spacing: 0.2px;
            text-decoration: none;
        }
        .ii__footer-branding{
            width: 100px;
            margin-bottom: 20px;
        }
        .footer-bottom{
            border-top: 0.5px solid #a8a9b7;
            padding-top: 20px;
        }
        .footer-rights{
            color: #a8a9b7;
        }

    </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
      <div class="main-wrapper">
                  
        ${this.view===VIEW_MODE_DIALOG?html`
        <section-page id="dialog" @view-list=${this._viewList} queue=${this.dialogServicesQueue} ></section-page>
        `:html`
        ${this.pageGroup.pages.map(page=>html`        
          <!-- Feature -->
          <section  class="section is-fullWidth"  style="padding: 0px; background-color: #f4f6fb;" id=${page.id}>
                                    
            <div class="is-fullWidth columns is-centered is-multiline">
                  ${page.pageInputGroups.map(feed=>html`
                  <div class="column ${this._gridClasses(feed)} is-paddingless">
                    <form-render .feed="${feed}" .top=${this._computeTop()} .params=${this.parseParams()}></form-render>
                  </div>
                  `)}
            </div>
          </section>
`)}
        `}
            
        <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>

      </div>
`}constructor(){super()}getMainFontPath(url){if(url!=void 0||null!=url||""!=url){return url}else{return""}}scrollPage(evt){const index=evt.currentTarget.pageIndex;var elementToFocus=this.shadowRoot.querySelector("#section_"+index);if(elementToFocus){elementToFocus.scrollIntoView({block:"start",behavior:"smooth"})}}static get properties(){return{title:String,name:String,logo:String,defaultColor:String,pages:Array,tab:Object,group:Object,toggle:Boolean}}toggleNav(){let nav=document.getElementsByClassName("navbar-menu");nav[0].classList.toggle("mob-nav")}stateChanged(state){super.stateChanged(state)}_viewList(){this.mainNavigation()}_gridClasses(feed){const grid=super._gridClasses(feed),grids=grid.split("|");try{return`is-${Math.floor(+(grids[0]/2))}`}catch(e){return"is-12"}}}window.customElements.define("landing-page",LandingPage);export{landingPage as $landingPage,LandingPageBase};