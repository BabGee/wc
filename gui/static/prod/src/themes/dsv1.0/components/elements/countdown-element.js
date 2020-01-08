import{html,CountdownElementBase}from"../../../../components/adaptive-ui.js";class CountdownElement extends CountdownElementBase{createRenderRoot(){return this}renderDefault(){return html`
        <style>
            :host {
                display: block;
            }
        </style>
        <h3 style="text-align: center">${this.name}</h3>
        <h2 style="text-align: center">${this.timeLeft.hours} hrs : ${this.timeLeft.minutes} mins : ${this.timeLeft.seconds} s</h2>
        `}}customElements.define(CountdownElement.is,CountdownElement);