import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const ServiceButtonBase=class extends utilsMixin(BaseElement){static get is(){return"service-button"}static get properties(){return{color:String,params:{type:Object,value:{}}}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;self.addEventListener("click",function(evt){evt.preventDefault();self.pl._dialog(self.e.service,self.params)})}init(pElement,loader){super.init(pElement,loader);var self=this;self.params=loader.pl.paramsCopy()}};var serviceButton={ServiceButtonBase:ServiceButtonBase};const ServiceButtonStyles=css`
.service-button-container{
    width: 150px;
    height: 150px;
    border-radius: 6px;
    background: var(--app-default-color);
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
    cursor: pointer;
    position: relative;
}
.service-button-container:hover {
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
    /* transform: scale(1.1); */
    background: #fff;
}

.service-button-container:hover .service-icon iron-icon,
.service-button-container:hover .service-content h3{
    color: var(--app-default-color);
}
.service-icon{
    justify-content: center;
    width: 100%;
    display: flex;
    position: relative;
    top: 35px;
}
.service-content{
    width: 100%;
    position: relative;
    top: 30px;
}
.service-content h3{
    text-align: center;
    color: #fff;
}
iron-icon {
    color: #fff;
}
`;var serviceButtonCss={ServiceButtonStyles:ServiceButtonStyles};class ServiceButton extends ServiceButtonBase{static get styles(){return[ServiceButtonStyles,css`
            :host {
                display: block;
            }
            `]}renderDefault(){return html`
    <div class="service-button-container">
        <div class="service-icon is-flex">
            <iron-icon style="width:48px !important;height: 48px !important;"
                icon="${this.e.icon}"></iron-icon>
        </div>
        <div class="service-content">
            <h3 class="is-centered is-size-7">${ServiceButton.toTitleCase(this.e.name)}</h3>
        </div>
    </div>
        
        `}}customElements.define(ServiceButton.is,ServiceButton);export{serviceButton as $serviceButton,serviceButtonCss as $serviceButtonCss,ServiceButtonBase,ServiceButtonStyles};