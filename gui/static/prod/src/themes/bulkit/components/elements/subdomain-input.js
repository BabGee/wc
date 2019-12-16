import{html}from"../../../../../node_modules/lit-element/lit-element.js";import"../../../../../node_modules/@polymer/iron-icon/iron-icon.js";import{SubdomainInputBase}from"../../../../elements/base/subdomain-input.js";class SubdomainInput extends SubdomainInputBase{renderDefault(){return html`

        <style>
        .message{
            text-align:center;
            padding:10px;
        }
        .input{
            text-align:center;
            padding:10px;
        }
        </style>

        <div class="message">

            <label for="input">${this.e.name}</label>

            Allowed characters
            <strong> a-z</strong>,
            <strong> 0-9</strong>,
            <strong> -</strong> but not as a starting or ending character. <br>must have between 
            <strong>${this.e.min}</strong> and 
            <strong>${this.e.max}</strong> 
            characters
        </div>
        <div class="input">
            <input id="input" type="text" value="${this.value}"> <input type="text" value="${this.e.kind}" disabled>
        </div>
        <div id="message">
        </div>`}invalid(validation){this.qs("#message").innerText=validation.message}valid(validation){this.qs("#message").innerText=validation.message}getValue(){return this.qs("#input").value}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}window.customElements.define(SubdomainInput.is,SubdomainInput);