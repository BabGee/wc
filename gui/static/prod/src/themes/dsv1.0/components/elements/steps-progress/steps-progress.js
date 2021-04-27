import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const StepsProgressStyles=css`
    .container {
        display:flex;
        flex-direction:row;
        width:100%;
        padding:16px;
        justify-content:center;
    }
    .steps-progress {
        display:flex;
        justify-content:center;
        width:100%;
        position:relative;
    }
    .step-container {
        display:flex;
        flex-direction:column;
        align-items:center;
        height:fit-content;
    }
    .step-circle {
        display:flex;
        width:30px;
        height:30px;
        border-radius:50%;
        justify-content:center;
        background-color:#3f3f3f;
        z-index:2;
    }
    .step-number {
        color:white;
        align-self:center;
    }
    .step-text {
        text-align:center;
    }
    .steps-connector {
        margin-top:15px;
        position: absolute;
        right: 0;
        height:1px;
        background-color:#3f3f3f;
    }
    .active {
        background-color: var(--app-secondary-color);
    }
    .inactive {
        background-color:#bebebe;
    }
    @media screen and (max-width: 414px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 375px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 360px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
    
    @media screen and (max-width: 320px){ 
        .step-circle {
            display:flex;
            width:20px;
            height:20px;
        }
        .steps-connector {
            margin-top:10px;
        }
    }
`;var stepsProgressCss={StepsProgressStyles:StepsProgressStyles};class StepsProgress extends SectionPElementDsc{static get styles(){return[StepsProgressStyles,css`
              :host {
              display: block;
            }
          `]}constructor(){super()}getActiveStepIndex(){return this.e.details.steps.findIndex(step=>step===this.e.details.active_step)}stepConnectorDynamicStyle(){const stepsLength=this.e.details.steps.length,stepWidth=100/stepsLength;return`width:${stepWidth*(stepsLength-1)}%;margin-right:${stepWidth/2}%;`}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="container">
          <ul class="steps-progress">
            <hr class="steps-connector" style=${this.stepConnectorDynamicStyle()}></hr>
            ${this.e.details.steps.map((step,index,array)=>html`
                <li class="step-container" style="width: ${100/array.length}%;">
                  <div class="step-circle ${step===this.e.details.active_step?"active":""} ${index<this.getActiveStepIndex(array)?"inactive":""}">
                    <h3 class="step-number">${index+1}</h3>
                  </div>
                  <h3 class="step-text">${step}</h3>
                </li>  
              `)}
          </ul>
        </div>
    `}static get is(){return"steps-progress"}}customElements.define(StepsProgress.is,StepsProgress);var stepsProgress={StepsProgress:StepsProgress};export{stepsProgressCss as $stepsProgressCss,stepsProgress as $stepsProgress,StepsProgressStyles,StepsProgress};