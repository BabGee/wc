import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const MessageSummaryBase=class extends utilsMixin(BaseElement){static get is(){return"message-summary"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=MessageSummaryBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=loader.pl.paramsCopy();self.maxlength=pElement.max}};var messageSummary={MessageSummaryBase:MessageSummaryBase};const MessageSummaryStyles=css`
.columns {
    display: flex!important;
    flex-direction: row!important;
}
.group {
    display: flex!important;
    flex-direction: row!important;
    
}
.group-title{
    margin-top: 8px;
}
.content{
    width:100%;
    max-height: 510px;
    overflow: auto;
}
.image-container{
    display:flex;
}
.text{
    position: absolute;
    top: 30%;
    left: 9%;
    max-height: 260px;
   

    background-color: #CECECE;
    padding: 4px;
    text-align: end;
    width: 10%;
    overflow-x: hidden;
    line-break: auto;
    overflow-y: auto;
    border-radius: 8px;
    
    
}
.text-message{
    font-weight: 400!important;
    padding: 2px;
}
h1{
    font-size: 18px!important;
    font-weight: 500!important;
    padding-left: 29px!important;
}
.column {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    

    padding: 0px;
    margin: 1.75rem 2rem 1.75rem 1.75rem;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #707070;
    border-radius: 10px;
    opacity: 1;
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border-top: none;
}
.summary-p{
    background-color: var(--app-default-color)!important;
    color: #fff!important;
    padding: 0.5rem;
    
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.summary-info{
    margin-bottom: 15px;

    text-align: center;
    font-weight: 600!important;
}

@media screen and (max-width:1294px) {
 
    .text{
        position: absolute;
        top: 30%;
        left: 11%;
        
    
        
        
    }
}

@media screen and (max-width:1040px) {
    .group {
        display: flex!important;
        flex-direction: column!important;
        
    }
    .text{
        position: absolute;
        top: 30%;
        max-height: 250px;
        overflow-y: auto;
        overflow-x:hidden;

        width: 20%;
        left: 5%;
    
        
        
    }
}
@media screen and (max-width:946px) {
    
    .text{
        width: 13%;
        max-height: 176px;

        width: 18%;
        left: 8%;

        overflow-y: auto;
    
        
        
    }
}
@media screen and (max-width:852px) {
    
    .text{
        left: 12%;
        max-height: 176px;
    
        
        
    }
}
@media screen and (max-width:756px) {
    
    .text{
        width: 21%;
        left: 11%;
        overflow-y: hidden;
    
        
        
    }
}
@media screen and (max-width:675px) {
    
    .text{
        
        left: 14%;
        overflow-y:auto
       
    
        
        
    }
}
@media screen and (max-width:580px) {
    
    .text{
        
        top: 26%;
        left: 18%;
       
    
        
        
    }
}
@media screen and (max-width:580px) {
    
    .text{
        
        top: 26%;
        left: 18%;
        overflow-y: auto;
       
    
        
        
    }
}
@media screen and (max-width:512px) {
    
    .text{
        
        width: 28%;
        left: 15%;
       
    
        
        
    }
}




`;var messageSummaryCss={MessageSummaryStyles:MessageSummaryStyles};class MessageSummary extends MessageSummaryBase{static get styles(){return[MessageSummaryStyles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        

    <section>
    
        <div class="columns has-text-weight-bold is-size-6">

            <div class="image-container">
                <div class="screen-shot">
                    <img src="src/themes/dsv1.0/img/isometic/message_screenshot.png" />
                
                </div>
                <div class="text">

                    <p id="phoneText" class="text-message">Your Message Comes Here</p>
                
                </div>
            
            </div>
            <div class="content">
            ${this.getGroupTitles(JSON.parse(this.e.defaultValue)).map(groupTitle=>html`
                <div class="group-title">
                  <h1>${groupTitle}</h1>
                </div>
            
              <div class="group">
             ${this._getSubGroupTitles(groupTitle).map(subTitle=>html`
             
                <div class="column">
                    <p class="summary-p ">${this.getText(groupTitle,subTitle)}</p>
                    <p class="summary-info">${this._getSubtitleValue(groupTitle,subTitle)}</p>
                    

                </div>
            
             
             `)}
             </div>
            </div>
            
            
            `)}
           
    
    
    
        
    </section>
        
        `}static get is(){return"message-summary"}firstUpdated(changedProperties){super.firstUpdated(changedProperties);let phoneMessage=this.shadowRoot.querySelector("#phoneText"),mainObject=JSON.parse(this.e.defaultValue);if(mainObject.hasOwnProperty("message")){let messageObj=mainObject.message,textValue=messageObj.text;if(null!=textValue||textValue!=void 0){phoneMessage.innerText=textValue}else{textValue=messageObj.Text;phoneMessage.innerText=textValue}}else if(mainObject.hasOwnProperty("Message")){let messageObj=mainObject.Message,textValue=messageObj.text;if(null!=textValue||textValue!=void 0){phoneMessage.innerText=textValue}else{textValue=messageObj.Text;phoneMessage.innerText=textValue}}}getText(groupTitle,subTitle){if("text"===subTitle||"Text"===subTitle){this.shadowRoot.querySelector("#phoneText");return subTitle}else{return subTitle}}getGroupTitles(mainObject){return Object.keys(mainObject)}_getSubGroupTitles(objectKeyTitle){let obj=JSON.parse(this.e.defaultValue),subtilesObject=obj[objectKeyTitle],subTitles=Object.keys(subtilesObject);return subTitles}_getSubtitleValue(objectKeyTitle,subTitleKey){let obj=JSON.parse(this.e.defaultValue),subtilesObject=obj[objectKeyTitle],subTitlesValue=subtilesObject[subTitleKey];return subTitlesValue}}customElements.define(MessageSummary.is,MessageSummary);export{messageSummary as $messageSummary,messageSummaryCss as $messageSummaryCss,MessageSummaryBase,MessageSummaryStyles};