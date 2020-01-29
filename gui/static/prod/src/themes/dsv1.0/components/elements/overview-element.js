import{html,BaseElement}from"../../../../components/adaptive-ui.js";class OverviewElement extends BaseElement{static get is(){return"overview-element"}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <style>
        .btn{
            margin: 20px 0;
            background: #f49e37;
            width: 200px;
            color: #fff;
        }
        .mipay-overview{
            height: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            background-color: #fff;
        }
        </style>

        <div class="container mipay-overview">
            <div class="columns">
                <div class="column">this is the left side</div>
                <div class="column">
                    <div class="heading">
                        <h1 class="title">this is the title area</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste architecto dolore repudiandae odit vel libero, eius ad velit eaque non beatae. Ut qui nostrum blanditiis laboriosam eligendi non dolore sapiente.</p>
                    <a href="$1" class="button btn">Get started</a>
                </div>
            </div>
        </div>
        `}}customElements.define(OverviewElement.is,OverviewElement);