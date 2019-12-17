import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{SectionPElementBase}from"../../../../elements/base/section-pelement.js";class SectionTitle extends SectionPElementBase{renderDefault(){return html`
          <style>
      .c-title-container {
          max-width: 630px;
          margin-right: auto;
          margin-bottom: 86px;
          margin-left: auto;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: start;
          -webkit-align-items: flex-start;
          -ms-flex-align: start;
          align-items: flex-start;
          color: #a8a9b7;
          text-align: center;
      }
      .ii__title {
          margin-top: 0px;
          margin-bottom: 16px;
          color: #000;
          font-size: 42px;
          line-height: 52px;
          font-weight: 600;
          letter-spacing: 0.2px;
      }
      .ii__paragraph {
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.15px;
          color: rgba(255, 255, 255, .7);
      }
      </style>
        <div class="c-title-container">
            <h3 class="ii__title is-centered">${this.e.name}</h3>
            <p class="ii__paragraph" style="color: #7b7b7b">${this.e.defaultValue}</p> 
                   
        </div>    
    `}static get is(){return"section-title"}}customElements.define(SectionTitle.is,SectionTitle);