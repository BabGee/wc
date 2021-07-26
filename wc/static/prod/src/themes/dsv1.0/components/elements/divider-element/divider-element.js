import{css,html,SectionPElementBase}from"../../../../../components/adaptive-ui.js";const DividerElementStyles=css`
    .block {
        display:flex;
        position: relative;
        padding: 16px;
    }
    .divider {
        height: 2px;
        width: 100%;
        background-color: var(--app-secondary-color);
    }
    .title {
        position: absolute;
        left:50%;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 30px;
        background-color: white; 
    }
`;var dividerElementCss={DividerElementStyles:DividerElementStyles};class DividerElement extends SectionPElementBase{static get styles(){return[DividerElementStyles,css`
                :host {
                    display: block;
                }
            `]}firstUpdated(){this.centerTitle()}centerTitle(){const title=this.shadowRoot.querySelector(".title"),titleWidth=title.getBoundingClientRect().width;title.style.marginLeft=`${-(titleWidth/2)}px`}static get is(){return"divider-element"}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <div class="block">
                <hr class="divider">
                <h3 class="title is-4">${this.e.name}</h3>
            </div>
        `}}customElements.define(DividerElement.is,DividerElement);var dividerElement={DividerElement:DividerElement};export{dividerElementCss as $dividerElementCss,dividerElement as $dividerElement,DividerElementStyles,DividerElement};