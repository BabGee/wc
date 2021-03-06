import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const CountdownElementBase=class extends utilsMixin(BaseElement){static get is(){return"countdown-element"}static get properties(){return{icon:String,title:{type:String,value:"countdown ends in"},name:{type:String,value:"countdown ends in"},params:{type:Object,value:{}},timeLeft:{type:Object},duration:String,untill:String,timeout:{type:Number,value:1e3},tickFtns:{type:Array,value:[]},running:Boolean}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}start(){if(this.running){return}this.running=!0;var start=Date.now(),that=this,diff,obj;(function timer(){diff=that.duration-(0|(Date.now()-start)/1e3);if(0<diff){setTimeout(timer,that.timeout)}else{diff=0;that.running=!1}obj=that.parse(diff);that.timeLeft=obj;if(null!=that.tickFtns){that.tickFtns.forEach(function(ftn){ftn.call(this,obj.minutes,obj.seconds)},that)}})()}onTick(ftn){if("function"===typeof ftn){this.tickFtns.push(ftn)}return this}expired(){return!this.running}parse(fullSeconds){var _Mathfloor=Math.floor,sec_num=parseInt(fullSeconds,10),hours=_Mathfloor(sec_num/3600),minutes=_Mathfloor((sec_num-3600*hours)/60),seconds=sec_num-3600*hours-60*minutes;if(10>hours){hours="0"+hours}if(10>minutes){minutes="0"+minutes}if(10>seconds){seconds="0"+seconds}return{hours:hours,minutes:minutes,seconds:seconds}}init(pElement,loader){super.init(pElement,loader);this.title=CountdownElementBase.toTitleCase(pElement.elementJson[0]);this.name=CountdownElementBase.toTitleCase(pElement.elementJson[0]);this.duration=(new Date(pElement.defaultValue)-new Date)/1e3;this.start()}};var countdownElement={CountdownElementBase:CountdownElementBase};const CountdownElementStyles=css`
:host {
    display: block;
}

`;var countdownElementCss={CountdownElementStyles:CountdownElementStyles};class CountdownElement extends CountdownElementBase{static get styles(){return[CountdownElementStyles,css`
        :host {
          display: block;
        }
      `]}createRenderRoot(){return this}renderDefault(){return html`
        
        <h3 style="text-align: center">${this.name}</h3>
        <h2 style="text-align: center">${this.timeLeft.hours} hrs : ${this.timeLeft.minutes} mins : ${this.timeLeft.seconds} s</h2>
        `}}customElements.define(CountdownElement.is,CountdownElement);export{countdownElement as $countdownElement,countdownElementCss as $countdownElementCss,CountdownElementBase,CountdownElementStyles};