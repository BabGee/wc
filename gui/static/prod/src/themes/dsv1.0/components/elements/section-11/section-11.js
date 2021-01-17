import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const Section11Styles=css`
.solution-area {
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
    padding: 110px;
  }
  .bg {
    background-color: #f2f6f9;
  }
  .solution-contaniner{
    width: 100%;
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .section-title {
    text-align: center;
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
    margin-top: -6px;
    font-family: 'Montserrat', sans-serif;
  }
  .section-title h2 {
    margin-bottom: 0;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
  .section-title p {
    max-width: 520px;
    margin-bottom: 0;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Montserrat', sans-serif;
  }
  .single-services-box {
    background-color: #ffffff;
    margin-bottom: 30px;
    padding: 30px 25px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    position: relative;
  }
  .single-services-box::before {
    content: '';
    height: 3px;
    width: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color:var(--app-default-color);
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  .single-services-box .icon {
    margin-bottom: 18px;
    background-color:var(--app-default-color);
    border-radius: 5px;
    width: 75px;
    height: 75px;
    line-height: 75px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    text-align: center;
    color: var(--app-primary-color);
  }
  .single-services-box h3 {
    margin-bottom: 0;
    font-size: 23px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
  .single-services-box p {
    margin-top: 12px;
    margin-bottom: 0;
    font-family: 'Montserrat', sans-serif;
  }
  .single-services-box:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 40px 3px rgba(0, 0, 0, 0.05);
  }
`;var section11Css={Section11Styles:Section11Styles};class Section11 extends SectionPElementDsc{static get styles(){return[Section11Styles,css` 
            :host{
                disply: block;
            }
            `]}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>   
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;900&display=swap" rel="stylesheet">
        <section class="solution-area bg">
        <div class="solution-container">
          <div class="section-title">
            <h2>${this.e.name}</h2>
            <p>${this.e.details.subtitle}</p>
          </div>
          <div class="columns">
          ${this.rows.map(slide=>html`
            <div class="column">
                <div class="single-services-box">
                  <div class="icon">
                  <fa-icon class="${this.getIcon(slide[1])}" color="#fff" style="height:43px; width: 36px;"></fa-icon>
                  </div>
                  <h3><a>${this.getTitle(slide[1])}</a></h3>
                  <p>${slide[2]}</p>
                </div>
              </div>
          `)}
            
          </div> <!--main -->
        <div>
      </section>
        `}getIcon(dscname){let[title,icon]=dscname.split("|");return icon}getTitle(dscname){let[title,icon]=dscname.split("|");return title}static get is(){return"section-11"}}customElements.define(Section11.is,Section11);export{section11Css as $section$11Css,Section11Styles};