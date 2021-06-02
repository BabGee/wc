import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const TileElement3Styles=css`
    .column {
        flex-direction:column;
        padding:20px;
        align-items:center;
        min-width:28%;
        max-width:30%;
        margin:0 auto;
        min-height:280px;
        opacity:0;
        transform:translateY(-50%);
    }
    .column:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transition: 0s all ease-in-out; 
    }
    .image {
        min-width:100px;
        height:90px;
        object-fit:contain;
    }
    .title {
        margin:10px 0;
    }
    p {
        text-align:center;
    }
    .column-appear-animation {
        opacity:1;
        transform: translateY(0px);
        transition: 0.7s all ease-in-out; 
    }

    @media screen and (max-width: 600px) {
        .column {
            min-width:100%;
        }
    }
`;var tileElement3Css={TileElement3Styles:TileElement3Styles};class TileElement3 extends SectionPElementDsc{static get styles(){return[TileElement3Styles,css`
                :host {
                    display:block;
                }
            `]}firstUpdated(){window.addEventListener("scroll",()=>{const columns=this.shadowRoot.querySelectorAll(".column");if(!Object.values(columns[0].classList).find(clss=>"column-appear-animation"===clss)){this.scrollAppear(columns)}})}scrollAppear(columns){let columnsContainer=this.shadowRoot.querySelector(".columns"),columnsContainerStartPosition=columnsContainer.getBoundingClientRect().top,screenPosition=window.innerHeight/2;if(columnsContainerStartPosition<screenPosition){this.animateColumns(columns)}}animateColumns(columns){columns.forEach(column=>{setTimeout(()=>{this.animateColumn(column)},500)})}animateColumn(column){column.classList.add("column-appear-animation")}static get is(){return"tile-element-3"}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <div class="columns is-mobile is-multiline  ">
                ${this.rows.map(tile=>html`
                        <div class="column tile is-flex">
                            <img class="image" src="/media/${tile[3]}" />
                            <p class="title is-6">${tile[1]}</p>
                            <p class="subtitle is-6" style="margin-top: 0px;">${tile[2]}</p>
                        </div>
                    `)}
            </div>
        `}}customElements.define(TileElement3.is,TileElement3);var tileElement3={TileElement3:TileElement3};export{tileElement3Css as $tileElement$3Css,tileElement3 as $tileElement$3,TileElement3Styles,TileElement3};