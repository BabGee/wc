import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const MessageSummaryBase=class extends utilsMixin(BaseElement){static get is(){return"message-summary"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=MessageSummaryBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=loader.pl.paramsCopy();self.maxlength=pElement.max}};var messageSummary={MessageSummaryBase:MessageSummaryBase};const MessageSummaryStyles=css`
.columns {
    display: flex!important;
    flex-direction: row!important;

}
.group {
    display: flex!important;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    
}
.group-title{
    margin-top: 8px;
}
.content{
    width:100%;
    max-height: 510px;
    overflow: auto;
    border-left: 1.5px solid rgb(221, 208, 208);
    margin-left: 16px;
}
.image-container{
    display:flex;
    margin-left: 16px;
    padding-right: 16px;
}
.text{
        max-height: 218px;
    background-color: rgb(206, 206, 206);
    padding: 4px;
    text-align: end;
    width: 40%;
    overflow-y: auto;
    line-break: auto;
    border-radius: 8px;
    position: relative;
    margin-left: 80px;
    margin-top: 83px;
    
    
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
    width: 60%;

    

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

@media screen and (max-width:1456px) {
    .image-container {
        width:68%;
    }
}
@media screen and (max-width:1413px) {
    .image-container {
        width:70%;
    }
}

@media screen and (max-width:1360px) {
    .image-container {
        width:72%;
    }
}
@media screen and (max-width:1316px) {
    .image-container {
        width:76%;
    }
    .text {
        margin-left: 94px;
    }
}


@media screen and (max-width:1264px) {
 
    .image-container {
        width:79%;
    }
}
@media screen and (max-width:1212px) {
 
    .image-container {
        width:83%;
    }
}
@media screen and (max-width:1165px) {
 
    .image-container {
        width:86%;
    }
}

@media screen and (max-width:1134px) {
 
    .image-container {
        width:89%;
    }
}

@media screen and (max-width:1096px) {

    .columns {
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        display: flex !important;
    }
    .message-container {
        width:70%;
        margin-left:-4%;
    }
 
    .image-container {
      background-image: url("src/themes/dsv1.0/img/isometic/phone-landscape.png");
      width:100%;
    }

    .text {
        margin-left: 284px;
        max-height:400px;
        overflow-y:auto;

    }

    .content{
        border-top: 1.5px solid rgb(221, 208, 208);
        border-left: none;
        padding-top:8px;

    }
    .content h1 { 
        text-align: center !important;

    }

    h1 {
        font-size: 24px !important;
        font-weight: 500 !important;
        padding-left: 0px !important;
    }


}


@media screen and (max-width:1040px) {
    .group {
        display: flex!important;
        flex-direction: column!important;
        
    }
    .text {
        margin-left: 268px;
        max-height:400px;
        overflow-y:auto;
        margin-top: 97px;

    }
}
@media screen and (max-width:946px) {
    
    .text{
        width: 40%;
        max-height: 110px;

        overflow-y: auto;

        margin-left: 161px;
        overflow-y: auto;
        margin-top: 97px;
        text-align: center;
        margin-top:161px;
    
        
        
    }
}
@media screen and (max-width:852px) {
    
    
}
@media screen and (max-width:756px) {
    
    .column {
        width:100%;
        margin-left:8px;
        margin-right:8px;
    }
}

@media screen and (max-width:732px) {
    
   
      .message-container {
        width:90%;
    }
  
}
@media screen and (max-width:675px) {
    
    
}

@media screen and (max-width:595px) {
    .message-container {
        width:115%;
    }
   
}
@media screen and (max-width:512px) {
  
}




`;var messageSummaryCss={MessageSummaryStyles:MessageSummaryStyles};class MessageSummary extends MessageSummaryBase{static get styles(){return[MessageSummaryStyles,css`
            :host {
              display: block;
            }
          `]}render(){return html`

<style>
        .message-container{
          width: 36%;
        min-height: 400px;
        position: relative;
        margin-left:8%;
        
        }
        .image-container{
            width:66%;
            min-height:400px;
            align-items: center;
            display: flex;
            position: absolute;
            
            /* The image used */
            background-image: url("src/themes/dsv1.0/img/isometic/message_screenshot.png");
            background-position:0px;
            background-size:cover;
            background-repeat:no-repeat;
            
            
        
        }
        </style>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        

    <section>
    
        <div class="columns has-text-weight-bold is-size-6">
            <div class="message-container">
              <div class="image-container"></div>
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