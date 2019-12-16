import{html,LitElement}from"../../../../../node_modules/lit-element/lit-element.js";class MissingPage extends LitElement{render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>

        #page-not-found {
            background-image: linear-gradient(#43c6ac, #191654);
            height: 100vh;
        }

        #missing-page-title {
            text-align: center;
            color: white;
            font-weight: 800;
            margin-top: 30px;
            margin-bottom: 40px;
        }

        #page-not-found-icon {

            margin-bottom: 60px;
            font-size: 300%;
            color: red;
        }

        a#home-btn {

            color: white;
            font-weight: 600;
            text-decoration-color: black;
            border: solid 1px white;
            border-radius: 25px 1px 1px 25px;
            padding: 0.5rem 1.5rem;

            box-shadow: 1px 1px 1px 0px;

        }


    </style>
    
    <div id="page-not-found">
    <section class="section">
        <div class="container">
            <h1 id="missing-page-title" class="title">
                Page Not Found
            </h1>
   
            <div id="page-not-found-icon" style="text-align: center;">
    
              <span>
                  <i class="fas fa-book-reader"></i>
               </span>
    
            </div>
    
            <div style="text-align: center;">
    
                <a id="home-btn" class="" href="/#/0/0/">
                    Back to homepage
                </a>
    
            </div>
    
    
        </div>
    
    </section>
    
    </div>

    `}}window.customElements.define("missing-page",MissingPage);