import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const Section12Styles=css`
.product-feature {
    padding-bottom: 80px;
    height: 966px;
    position: relative;
    z-index: 1;
    padding: 110px;
    background-color: #ffffff;
  }
  .sh-title{
    width: 400px;
    height: 400px;
    background: #4a4a4a;
    color: #ffffff;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
  .sh-title h1{
    font-size: 40px;
    color: inherit;
    font-weight: 700;
    width: 210px;
    margin-top: 30px;
    font-family: 'Montserrat', sans-serif;
  }
  .feature-cont{
    width: 81%;
    position: absolute;
    top: 312px;
    z-index: 1000;
    left: 211px;
  }
  .feature-cont .feat{
    width: 100%;
    position: relative;
  }
  .feature-cont .feat .feat-img{
    width: 300px;
    height: 300px;
    background: var(--app-default-color);
    border-radius: 20px;
  }
  .feature-cont .feat h3{
    font-weight: 700;
    font-size: 21px;
    margin: 30px 0;
    font-family: 'Montserrat', sans-serif;
  }
  @media screen and (max-width: 1024px){
    .product-feature{
      height: auto;
    }
    .feature-cont {
      width: 100%;
      position: relative;
      z-index: 1000;
      top: 56px;
      left: 0;
    }
  }
`;var section12Css={Section12Styles:Section12Styles};class Section12 extends SectionPElementDsc{static get styles(){return[Section12Styles,css` 
            :host{
                disply: block;
            }
            `]}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;900&display=swap" rel="stylesheet">
        <section class="section product-feature">
        <div>
          <div class="sh-title">
            <h1>${this.e.name}</h1>
          </div>
          <div class="feature-cont">
            <div class="columns">
            ${this.rows.map(slide=>html`
            <div class="column">
                <div class="feat">
                  <div class="feat-img"></div>
                  <h3>${slide[1]}</h3>
                  <p>${slide[2]}</p>
                </div>
              </div>
            `)}
              
            </div> <!-- end of columns -->
          </div>
        </div>
      </section>
        `}static get is(){return"section-12"}}customElements.define(Section12.is,Section12);export{section12Css as $section$12Css,Section12Styles};