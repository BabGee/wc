import{PageViewElement,VIEW_MODE_DIALOG,css,html,Colors,Fonts,ServiceStyles}from"../../../../components/adaptive-ui.js";import"./section-page.js";const Landing2PageBase=class extends PageViewElement{constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}async _activateLoadSectionInterface(...args){self.params=params;this.dialogServicesQueue.push([service,params]);self.view="dialog"}};var landing2Page={Landing2PageBase:Landing2PageBase};class Landing2Page extends Landing2PageBase{render(){return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
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
            background-color: #eeeeee;
        }
        .landing-2-container{
          height: 100%;
        }
        .landing-row{
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }
        .form-column {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          height: 100vh;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          padding: 64px;
          background: url(${this.gateway.backgroundImage});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top bottom;
          position: relative;
        }
        .column-sm {
          -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
        .column-lg{
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
          overflow-y: auto;
        }
        .form-col{
          padding: 64px;
        }
        .overlay{
          width: 100%;
          height: 100vh;
          background: #000;
          position: absolute;
          opacity: .5;
          left: 0;
          top: 0;
        }
        .img-content{
          color: #fff;
          position: absolute;
          margin-top: 30px;
        }
        .img-content h1, .img-content p{
          color: inherit;
          text-transform: capitalize!important;
        }
        nav {
          display:flex;
          flex-direction:column;
          
        }
        .tabs-list{
          display:flex;
          flex-direction:row;
          position:relative;
        }
        .tab-item {
          display: flex;
          width: 100%;
          min-width: fit-content;
          justify-content: center;
          position:relative;
          align-items:flex-end;
          padding:5px 10px 5px 10px;
        }
        .glider-container{
          width:100%;
          display: flex;
          position:relative;
          margin-bottom:7px;
        }
        .glider {
          display: flex;
          height: 4px;
          position:relative;
          background-color: var(--app-accent-color);
          margin:0;
          border-radius: 99px;
          transition: 0.25s ease-out;
        }
        .frame-bg {
          color:black;
        }
        .is-active {
          color: var(--app-accent-color);
          font-size:20px;
          font-weight: 400;
        }
        .is-active:hover {
          color: var(--app-accent-color);
        }


        @media only screen and (min-width: 421px) and (max-width: 767px) {
          .form-column {
            display: none !important;
          }

          .column-lg{
            width: 100%;
            max-width: 100%;
            flex: 0 0 100%;
            padding: 30px;
          }
        }

        @media only screen and (max-width: 420px) {
          .form-column {
            display: none !important;
          }

          .column-lg{
            width: 100%;
            max-width: 100%;
            flex: 0 0 100%;
            padding: 30px;
          }
        }
      </style>
      <div class="main-wrapper">
        
        ${this.view===VIEW_MODE_DIALOG?html`
          <section-page id="dialog" @view-list=${this._viewList} queue=${this.dialogServicesQueue} ></section-page>
        `:html`
        <div class="landing-2-container">
          <div class="landing-row">
            <div class="form-column column-sm">
              <div class="overlay"></div>
              <div class="img-content">
                <img src="${this.gateway.logo}" alt="logo" width="112" height="28">
                <div class="heading">
                  <h1 class="title">${this.gateway.name}</h1>
                  <p class="subtitle">${this.gateway.tagLine}</p>
                </div>
              </div>
            </div>
            <div class="column-lg form-col">
              <header class="header card-head is-marginless">
                <nav
                  style="overflow: auto; overflow-y:hidden; width: 95%; margin: 0 auto"
                >
                  <ul class="tabs-list">
                    ${this.interface.pageGroups.map((pageGroup,pageGroupIndex)=>html`
                        <link
                          rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css"
                          type="text/css"
                        />
                        ${pageGroup.pages.map((tab,tabIndex)=>html`
                            <li
                              id="tab_${tabIndex}"
                              class="tab-item"
                            >
                              <a
                                href="${this._changeLink(pageGroupIndex,tabIndex)}"
                                @click=${this.addActive}
                                class="frame-bg  ${pageGroupIndex==this._pageGroup&&tabIndex==this._page?"is-active":""}"
                                >${tab.title}</a
                              >
                            </li>
                          `)}
                      `)}
                  </ul>
                  <div class="glider-container">
                    <hr class="glider"/>
                  </div>
                </nav>
              </header>
              <div class="content">
                <div class="content-tab">
                  <div style="justify-content:center!important;" class="columns is-multiline cols is-paddingless">
                    ${this.page.pageInputGroups.map(feed=>html`
                        <div
                          class="column w__cols ${this._gridClasses(feed)}"
                        >
                          <form-render
                            .feed="${feed}"
                            .params=${this.parseParams()}
                          ></form-render>
                        </div>
                      `)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `}
      <snack-bar
        id="snack-bar"
        ?active="${this._snackbarOpened}"
        context="${this._snackbarContext}"
        style="z-index: 9999;"
      >
        <span slot="title">${this._snackbarTitle}</span>
        <span>${this._snackbarMessage}</span>
      </snack-bar>
   `}constructor(){super();this.isSideMenuVisible=!1;this.isSideMenuVisible=!1;this.sideBarOpen=280;this.sideBarClose=60}static get properties(){return{pages:Array,tab:Object,profile:{type:Object,value:""},page:Number,mainColor:String,isSideMenuVisible:Boolean,isSubMenuOpen:Boolean,isProfileVisible:Boolean}}getMainFont(url){if(url!=void 0){let[half,link]=url.split("&"),[part,font]=half.split("=");return font}else{return""}}getBackupFont(url){if(url!=void 0){let[half,link]=url.split("&"),[part,font]=half.split("=");return font}else{return""}}firstUpdated(){var parent=document.querySelector(".sidebar"),child=document.querySelector(".sidebar-inner");this.positionGlider();console.log("anwar");const gliderContainer=document.querySelector(".glider-container"),resizeObserver=new ResizeObserver(entries=>{for(let entry of entries){if(entry.contentBoxSize){this.positionGlider()}}});resizeObserver.observe(gliderContainer);child.style.right=child.clientWidth-child.offsetWidth+"px"}selectToggle(){profile.classList.toggle("is-block");profile.classList.contains("is-block")?this.isProfileVisible=!0:this.isProfileVisible=!1}_changeLink(pageGroupIndex,tabIndex){var url=window.location.pathname+window.location.search+"#/"+pageGroupIndex+"/"+tabIndex+"/";return url}addActive(e){let current=document.getElementsByClassName("active");if(0<current.length){current[0].className=current[0].className.replace(" active","")}this.className+=" active";this.moveGlider(e)}getMainFontPath(url){if(url!=void 0||null!=url||""!=url){return url}else{return""}}positionGlider(){const glider=document.querySelector(".glider"),activeTab=document.querySelector(".is-active");glider.style.left=`${activeTab.parentNode.offsetLeft}px`;glider.style.width=`${activeTab.parentNode.getBoundingClientRect().width}px`}moveGlider(e){const glider=document.querySelector(".glider"),clickedElement=e.currentTarget,resizeObserver=new ResizeObserver(entries=>{for(let entry of entries){if(entry.contentBoxSize){glider.style.width=`${clickedElement.parentNode.getBoundingClientRect().width}px`;const transformDistance=clickedElement.parentNode.offsetLeft-glider.offsetLeft;glider.style.transform=`translateX(${transformDistance}px)`}}});resizeObserver.observe(clickedElement)}static get styles(){return[Colors,Fonts,ServiceStyles,css`
         :host {
           display: block;
         }
       `]}_viewList(){this.mainNavigation()}_gridClasses(feed){const grid=super._gridClasses(feed),grids=grid.split("|");try{return`is-${Math.floor(+(grids[0]/2))}`}catch(e){return"is-12"}}}window.customElements.define("landing-2-page",Landing2Page);export{landing2Page as $landing$2Page,Landing2PageBase};