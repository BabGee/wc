import{html,SectionPageBase}from"../../../../components/adaptive-ui.js";class SectionPage extends SectionPageBase{render(){// TODO render 404
return html`
     <style>
     .flex-card {
    position: relative;
    background-color: #fff;
    border: 1px solid #fcfcfc;
    border-radius: 14px;
    display: inline-block;
    
    overflow: hidden;
    width: 100%;
    margin-bottom: 20px;
    transition: all 0.5s;
}

</style>
        
        ${this.payload?html`
                
        <div id="dashboard-wrapper" class="columns is-multiline" style="background: -webkit-linear-gradient(45deg, #F4F6FE, #ecf0f1); background: linear-gradient(45deg, #F4F6FE, #ecf0f1);">
            ${this._computeFeed(this.payload).map(feed=>html`
            
            <div class="column ${this._gridClasses(feed)}"> 
            <div class="flex-card light-bordered"> 
                  <div class="card-body is-responsive" style="padding: 0px;">
                      <form-render 
                          id="pl"    
                          .feed="${feed}" 
                          .params=${this.params}></form-render>
                  </div>
            </div>                                    
            </div> 
            `)}
        </div>

        
        `:html`
            
            <div style="width: 100px;height: 100px;margin:10px auto;">
                <paper-spinner style="width: 100%;height: 100%;" active></paper-spinner>
            </div>
        `}
        
     <snack-bar id="snack-bar" ?active="${this._snackbarOpened}">${this._snackbarMessage}</snack-bar>   
`}constructor(){super()}_gridClasses(feed){const grid=super._gridClasses(feed),grids=grid.split("|");try{return`is-${Math.floor(+(grids[0]/2))}`}catch(e){return"is-12"}}}customElements.define(SectionPage.is,SectionPage);