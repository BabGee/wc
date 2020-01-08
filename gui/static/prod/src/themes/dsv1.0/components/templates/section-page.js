import{css,html,SectionPageBase,Colors,Fonts,Reset}from"../../../../components/adaptive-ui.js";class SectionPage extends SectionPageBase{render(){return html`
     <style>
      div.modal-container, .modal-spinner{
        width: 100%;
        height: 100vh;
        background: rgba(226, 226, 226, .9);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        padding: 45px;
      }
      div.modal-container div.modal-base {
        opacity: 1;
        width: 688px;
        border-radius: 5px;
        background-color: #fff;
        margin: 0 auto;
        padding: 0 25px;
        position: relative;
        overflow-x: hidden!important;
      }
      div.modal-container div.modal-base .modal-header{
        padding: 25px 0 25px 35px;
        /* border-bottom: solid 1px rgba(71, 71, 71, 0.2); */
        width: 91%;
        position: fixed;
        z-index: 9999;
        background: #fff;
      }
      div.modal-container div.modal-base .modal-header h1 {
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #1f2552;
      }
      /*div.modal-container div.modal-base .modal-body{*/
        /*padding: 90px calc(68px - 25px) 68px calc(68px - 25px);*/
      /*}*/
      div.modal-container div.modal-base .modal-body label{
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.17;
        letter-spacing: normal;
        color: #202124;
      }
      div.modal-container div.modal-base .modal-body select{
        width: 317px;
        font-size: 14px;
        height: 40px;
        padding: 0 13.9px;
        display: inline-block;
        color: #202124;
        line-height: 1;
        background-color: #f6f6f6;
        border: 1px solid #ededed;
      }
      div.modal-container div.modal-base .modal-body input{
        width: 100%;
        height: 40px;
        border-radius: 6px;
        border: solid 1px #ededed;
        background-color: #f6f6f6;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        color: #202124;
        padding: 16px 13.5px;
      }
      div.modal-container div.modal-base .modal-cta{
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
      }
      div.modal-container div.modal-base .modal-cta button{
        width: 211px;
        height: 49px;
        border-radius: 4px;
        background-color: #157cf8;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }

      .modal-body{
        position: relative;
        top: 90px;
      }

      @media screen and (max-width: 700px){
        div.modal-container div.modal-base .modal-header{
          width: 70%;
        }
        div.modal-container div.modal-base .modal-header h1{
          font-size: 14px;
        }
      }
      @media screen and (max-width: 1023px){
        div.modal-container div.modal-base .modal-header{
          width: 80%;
        }
        div.modal-container div.modal-base .modal-header h1{
          font-size: 14px;
        }
      }
     
</style>
${this.payload?html`
<div class="modal-container">
  <div class="modal-base " style="max-height: 100%; padding: 7px; overflow: auto; width: 100vw;height: 100%">
    <div class="modal-header" >
      <div class="heading" >
        <h1 class="title has-text-black-bis" style="font-weight: 500!important; width: 80%; display: inline-block; ">${this._computePage(this.payload).title}</h1>
        <a style="display: inline-block;position: relative; right: 20px;" class="is-pulled-right" @click=${this._triggerViewList}>
        <fa-icon class="fas fa-times" color="#4a4a4a" size="2em"></fa-icon>
        </a>
      </div>
    </div>
    <div id="d-styling" class="modal-body">            
      <!-- Column Container -->
      <div class="columns is-multiline">
        ${this._computeFeed(this.payload).map(feed=>html`
        <!-- a single column -->      
        <div class="column ${this._gridClasses(feed)}" >
          <form-render .feed="${feed}" .params=${this.params} ></form-render>
        </div>
        `)}
      </div>
    </div>
  </div>
</div>        
         
`:html`
  <div class="modal-spinner">
    <div style="position: relative; width: 100px;height: 100px;margin:10px auto;" >
        <paper-spinner style="width: 100%;height: 100%;" active ></paper-spinner>
    </div>
  </div>            
  

`}
        <!--TODO this is repeated-->
        <snack-bar 
            id="snack-bar" 
            ?active="${this._snackbarOpened}"  
            context="${this._snackbarContext}">
              <span slot="title">${this._snackbarTitle}</span>
              ${this._snackbarMessage}</snack-bar>

`}constructor(){super()}_computePage(getSection){var self=this,pageGroup=getSection.pageGroups[0];self.title=pageGroup.title;return pageGroup.getTab(0)}_triggerViewList(){this.dispatchEvent(new CustomEvent("view-list",{bubbles:!0,composed:!0,detail:{}}))}_gridClasses(feed){const grid=super._gridClasses(feed),grids=grid.split("|");try{return`is-${Math.floor(+(grids[0]/2))}`}catch(e){return"is-12"}}static get styles(){return[Reset,Colors,Fonts,css`:host { display: block; }`]}}customElements.define(SectionPage.is,SectionPage);