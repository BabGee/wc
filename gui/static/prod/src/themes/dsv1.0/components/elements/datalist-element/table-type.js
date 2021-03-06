import{css,LitElement,html,DatalistHeaderStyles}from"../../../../../components/adaptive-ui.js";const TableTypeStyles=css`

.radio {
    position: relative;
    display: inline-block;
    padding-left:30px;
    cursor:pointer;
}

.radio input[type="radio"] {
    display:none;

}

.radio span {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid var(--app-default-color);
    display:block;
    position: absolute;
    left:0;
    top:-18px;
}

.radio span:after {
    content:"";
    height: 11px;
    width: 11px;
    background: var(--app-default-color);
    display:block;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%) scale(0);
    border-radius:50%;
    transition: 300ms ease-in-out 0s;

}

.radio input[type="radio"]:checked ~ span:after {
    transform: translate(-50%,-50%) scale(1);

}

`;var tableTypeCss={TableTypeStyles:TableTypeStyles};const TableTypeHeaderStyles=css`
.active_item{
    background-color: #e5e5e5;
}
.search_ul{
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.75) 9px 11px 49px -21px;
}
.buttons {
  height: fit-content;
  align-self: flex-end;
  width: 100%;
  justify-content: flex-end;
}
.button {
  padding: 7px 20px;
  margin:0 0 0 40px;
}

#search_area{
    align-items: center!important;
}
#refresh-button {
  background: var(--app-default-color)!important;
  color:#fff!important;
  border: none!important;
}
#pdf-btn{
    background: var(--app-default-color)!important;
    color:#fff!important;
    border: none!important;
    margin-right:-1.5rem!important;
}
#csv-btn{
    background: var(--app-secondary-color)!important;
    color:#fff!important;
    border: none!important;
}
.table-header-buttons .search_box{
    border: 1px solid rgb(183, 181, 181);
    background: #fff;
    border-radius: 6px; 
    display: flex;
    flex:2;
    margin-right: 10px;
    /* width: 200px; */
    /* box-shadow: 0 8px 6px -10px #b3c6ff; */
}
.table-header-buttons .search_box .dropdown{
    flex:1;
    border-right: 2px solid #dde2f1;
    color: rgb(1, 50, 67);
    position: relative;
    cursor: pointer;
    border-radius:0px;
}
.table-header-buttons .search_box .dropdown::before{
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    border: 5px solid;
    border-color: #9B9B9B transparent transparent transparent;
}
.table-header-buttons .search_box .dropdown .default_option{
    padding: 13px 15px;
    font-size: 14px;
    position: static;
    top:0;
    font-weight: 500;
    
}
.table-header-buttons .search_box .dropdown ul{
    display: none;
    position: absolute;
    top: 50px;
    left: 0px;
    background: #fff;
    width: 150px;
    -webkit-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
    box-shadow: 9px 11px 49px -21px rgba(0,0,0,0.75);
    z-index: 999;
   
}
.table-header-buttons .search_box .dropdown ul li{
    padding-bottom: 20px;
    padding: 10px;
    font-weight:500;
}
.table-header-buttons .search_box .dropdown ul li:hover{
    background-color: #e5e5e5;
}
.search_field{
    display:flex;
    flex: 3;
    position: relative;
}
.search_field input{
  border-color: transparent;
  font-size: 16px;
  height:inherit;
  padding:0 7px 0 7px;
  box-shadow:none;
  border-radius:0 6px 6px 0;
}
.search_field input:hover{
    border-color: transparent;
}
.search_field input:focus-within{
    outline: none;
}
.search_field input:focus{
    outline: none;
    border-color: transparent;
}
.input {
    border-radius:none;
    border-color:none;
}

.refresh-button{
    margin-bottom: 11px;
    margin-left: 12px;
    background-color: var(--app-default-color);
    padding: 10px 12px;
    border-radius: 22%;
    cursor:pointer;
}

.refresh-button:hover {
    background-color: var(--app-secondary-color);
}
@media screen and (max-width: 600px) {
  #pdf-btn{
    margin-right:0.5rem!important;
}
  #search_area {
    flex-wrap: wrap;
    justify-content: center;
    flex-wrap:wrap;
  }
  .search_box {
    min-width: 100%;
  }
  #search-btns {
    margin-top:20px;
    width:100%;
    display:flex;
  }
  .button {
    flex:1;
  }
  .table-header-buttons .search_box{
    margin-right:0px;   
  }
  .button {
    margin:5px;
  }
}
`;var tableTypeHeaderCss={TableTypeHeaderStyles:TableTypeHeaderStyles};const TableStyles=css`

     
/* -- Material Design Table style -------------- */
.table {
    background-color: #fff;
    width: 100%;
}

.table > thead > tr,
.table > tbody > tr,
.table > tfoot > tr {
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
    text-align: left;
    padding: 8px 16px;
    align-items: center;
    font-size: 13px;
    color: #54667a;
    border-top: 0;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.table > thead > tr > th {
    font-weight: 400;
    color: #2d3436;
    vertical-align: bottom;
    font-size: 15px;
    padding: 15px 8px;
    text-transform: capitalize;
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
    border-top: 0;
}

.table > tbody + tbody {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.table .table {
    background-color: #fff;
}

.table .no-border {
    border: 0;
}

.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
    padding: 0.8rem;
}

.table-bordered {
    border: 0;
}

.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
    border: 0;
    border-bottom: 1px solid #e0e0e0;
}

.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
    border-bottom-width: 2px;
}

.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
    background-color: #f5f5f5;
}

.table-hover > tbody > tr:hover > td,
.table-hover > tbody > tr:hover > th {
    background-color: rgba(0, 0, 0, 0.12);
}

.table-responsive-vertical {
    padding: 0;
 /*   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);*/
    overflow: auto;
}

@media screen and (max-width: 768px) {
    .table-responsive-vertical {
        margin: 16px;
    }

    .table-responsive-vertical > .table {
        margin-bottom: 0;
        background-color: transparent;
    }

    .table-responsive-vertical > .table > thead,
    .table-responsive-vertical > .table > tfoot {
        display: none;
    }

    .table-responsive-vertical > .table > tbody {
        display: block;
    }

    .table-responsive-vertical > .table > tbody > tr {
        display: block;
        border: 1px solid #e0e0e0;
        border-radius: 2px;
        margin-bottom: 1.6rem;
    }

    .table-responsive-vertical > .table > tbody > tr > td {
        background-color: #fff;
        display: block;
        vertical-align: middle;
        text-align: right;
    }

    .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {
        content: attr(data-title);
        float: left;
        font-size: inherit;
        font-weight: 400;
        color: #757575;
    }





    .table-responsive-vertical > .table-bordered {
        border: 0;
    }

    .table-responsive-vertical > .table-bordered > tbody > tr > td {
        border: 0;
        border-bottom: 1px solid #e0e0e0;
    }

    .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {
        border-bottom: 0;
    }

    .table-responsive-vertical > .table-striped > tbody > tr > td,
    .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {
        background-color: #f5f5f5;
    }

    .table-responsive-vertical > .table-hover > tbody > tr:hover > td,
    .table-responsive-vertical > .table-hover > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical > .table-hover > tbody > tr > td:hover {
        background-color: rgba(0, 0, 0, 0.12);
    }
}

.table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {
    background-color: #fde0dc;
}

.table-hover.table-mc-red > tbody > tr:hover > td,
.table-hover.table-mc-red > tbody > tr:hover > th {
    background-color: #f9bdbb;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {
        background-color: #fde0dc;
    }

    .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {
        background-color: #f9bdbb;
    }
}

.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {
    background-color: #fce4ec;
}

.table-hover.table-mc-pink > tbody > tr:hover > td,
.table-hover.table-mc-pink > tbody > tr:hover > th {
    background-color: #f8bbd0;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {
        background-color: #fce4ec;
    }

    .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {
        background-color: #f8bbd0;
    }
}

.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {
    background-color: #f3e5f5;
}

.table-hover.table-mc-purple > tbody > tr:hover > td,
.table-hover.table-mc-purple > tbody > tr:hover > th {
    background-color: #e1bee7;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {
        background-color: #f3e5f5;
    }

    .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {
        background-color: #e1bee7;
    }
}

.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {
    background-color: #ede7f6;
}

.table-hover.table-mc-deep-purple > tbody > tr:hover > td,
.table-hover.table-mc-deep-purple > tbody > tr:hover > th {
    background-color: #d1c4e9;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {
        background-color: #ede7f6;
    }

    .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {
        background-color: #d1c4e9;
    }
}

.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {
    background-color: #e8eaf6;
}

.table-hover.table-mc-indigo > tbody > tr:hover > td,
.table-hover.table-mc-indigo > tbody > tr:hover > th {
    background-color: #c5cae9;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {
        background-color: #e8eaf6;
    }

    .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {
        background-color: #c5cae9;
    }
}

.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {
    background-color: #e7e9fd;
}

.table-hover.table-mc-blue > tbody > tr:hover > td,
.table-hover.table-mc-blue > tbody > tr:hover > th {
    background-color: #d0d9ff;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {
        background-color: #e7e9fd;
    }

    .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {
        background-color: #d0d9ff;
    }
}

.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {
    background-color: #e1f5fe;
}

.table-hover.table-mc-light-blue > tbody > tr:hover > td,
.table-hover.table-mc-light-blue > tbody > tr:hover > th {
    background-color: #b3e5fc;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {
        background-color: #e1f5fe;
    }

    .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {
        background-color: #b3e5fc;
    }
}

.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {
    background-color: #e0f7fa;
}

.table-hover.table-mc-cyan > tbody > tr:hover > td,
.table-hover.table-mc-cyan > tbody > tr:hover > th {
    background-color: #b2ebf2;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {
        background-color: #e0f7fa;
    }

    .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {
        background-color: #b2ebf2;
    }
}

.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {
    background-color: #e0f2f1;
}

.table-hover.table-mc-teal > tbody > tr:hover > td,
.table-hover.table-mc-teal > tbody > tr:hover > th {
    background-color: #b2dfdb;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {
        background-color: #e0f2f1;
    }

    .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {
        background-color: #b2dfdb;
    }
}

.table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {
    background-color: #d0f8ce;
}

.table-hover.table-mc-green > tbody > tr:hover > td,
.table-hover.table-mc-green > tbody > tr:hover > th {
    background-color: #a3e9a4;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {
        background-color: #d0f8ce;
    }

    .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {
        background-color: #a3e9a4;
    }
}

.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {
    background-color: #f1f8e9;
}

.table-hover.table-mc-light-green > tbody > tr:hover > td,
.table-hover.table-mc-light-green > tbody > tr:hover > th {
    background-color: #dcedc8;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {
        background-color: #f1f8e9;
    }

    .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {
        background-color: #dcedc8;
    }
}

.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {
    background-color: #f9fbe7;
}

.table-hover.table-mc-lime > tbody > tr:hover > td,
.table-hover.table-mc-lime > tbody > tr:hover > th {
    background-color: #f0f4c3;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {
        background-color: #f9fbe7;
    }

    .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {
        background-color: #f0f4c3;
    }
}

.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {
    background-color: #fffde7;
}

.table-hover.table-mc-yellow > tbody > tr:hover > td,
.table-hover.table-mc-yellow > tbody > tr:hover > th {
    background-color: #fff9c4;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {
        background-color: #fffde7;
    }

    .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {
        background-color: #fff9c4;
    }
}

.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {
    background-color: #fff8e1;
}

.table-hover.table-mc-amber > tbody > tr:hover > td,
.table-hover.table-mc-amber > tbody > tr:hover > th {
    background-color: #ffecb3;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {
        background-color: #fff8e1;
    }

    .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {
        background-color: #ffecb3;
    }
}

.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {
    background-color: #fff3e0;
}

.table-hover.table-mc-orange > tbody > tr:hover > td,
.table-hover.table-mc-orange > tbody > tr:hover > th {
    background-color: #ffe0b2;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {
        background-color: #fff3e0;
    }

    .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {
        background-color: #ffe0b2;
    }
}

.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,
.table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {
    background-color: #fbe9e7;
}

.table-hover.table-mc-deep-orange > tbody > tr:hover > td,
.table-hover.table-mc-deep-orange > tbody > tr:hover > th {
    background-color: #ffccbc;
}

@media screen and (max-width: 767px) {
    .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,
    .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {
        background-color: #fff;
    }

    .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {
        background-color: #fbe9e7;
    }

    .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
    .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {
        background-color: #fff;
    }

    .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {
        background-color: #ffccbc;
    }
}

.topnav {
    overflow: hidden;
    /*background-color: #ffffff;*/
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.topnav .search-container {
    display: inline-block;
}

.topnav input[type=text] {
    padding: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: #f5f5f5;
    color: #606060;
    font-size: 14px;
    border: none;
    width: 600px;
}

.topnav .search-container button {
    padding: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #FFFFFF;
    background-color: var(--app-default-color);
    font-size: 14px;
    border: none;
    cursor: pointer;

}

.topnav .search-container button:hover {
    background: #ccc;
}

@media screen and (max-width: 790px) {
    .topnav {
        overflow: hidden;
        background-color: #ffffff;
        width: 100%;
        display: contents;
        justify-content: normal;
        align-items: normal;

    }

    .topnav .search-container {
        display: inline-block;
    }

    .topnav .search-container {
        display: contents;
        width: 100%;
        float: none;
    }

    .topnav a, .topnav input[type=text], .topnav .search-container button {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
    }

    .topnav input[type=text] {
        border: 1px solid #ccc;
    }
}
.table-container{
    width: 100%;
    position: relative;
    overflow-x: scroll;
}
.table-container table.dt-table{
    width: 100%;
    border-spacing: 0;
    overflow-x: scroll;
}
.table-container table.dt-table tr{
    background: #fff;
    width: inherit;
    font-size: 14px;
    line-height: 1.14;
    padding: 18px 15px;
    text-align: left;
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.07);
}
.table-container table.dt-table tr th,
.table-container table.dt-table tr td{
    margin: 4px 0;
    padding: 18px 10px;
}
.table-container table.dt-table tr th{
    color: #013243;
    font-weight: 500;
    text-transform: capitalize!important;
}
.table-container table.dt-table tr td{
  color: #6c7a89;
  padding: 15px 10px;
}
.table-container table.dt-table tr:hover{
    background: #f4f6f9;
}
td:nth-child(5){
  word-break: break-all;
}

@media screen and (max-width: 1023px) {
table {
border: 0;
}

table caption {
font-size: 1.3em;
}

table thead {
border: none;
clip: rect(0 0 0 0);
height: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
width: 1px;
}

table tr {
border-bottom: 3px solid #ddd;
display: block;
margin-bottom: .625em;
}

table td {
border-bottom: 1px solid #ddd;
display: block;
font-size: .8em;
text-align: right;
padding: 20px 0!important;
}

table td::before {
/*
* aria-label has no advantage, it won't be read inside a table
content: attr(aria-label);
*/
content: attr(data-label);
float: left;
font-weight: bold;
text-transform: uppercase;
}

table td:last-child {
border-bottom: 0;
}
}

`;var tableType={TableStyles:TableStyles};class TableTypeHeader extends LitElement{static get styles(){return[TableStyles,DatalistHeaderStyles,TableTypeHeaderStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <div class="table-header-buttons" style="margin-bottom: 15px;">
      <div class="columns">
        <div class="column is-flex-direction-column">
          <div class="heading">
            <h1 class="title is-size-6">${this.title}</h1>
          </div>
          <div id="search_area" class="is-flex">
            <div class="search_box is-flex">
              <div class="dropdown" @click=${this.dropdown}>
                <div id="qIn" @click="${this.specificDropdown}" class="default_option">All</div>
                  <ul class="search_ul">
                    <li class="search_item" @click="${this.updateSearchItem}">All</li>
                      ${this.searchFields(this.columns).map(item=>html`<li class="search_item" @click="${this.updateSearchItem}" param="${item.propertyPath}">${item.header}</li>`)}
                    </ul>
                  </div>
                  <div class="search_field">
                    <input id="q" type="text" name="serach" class="input" placeholder="Search..." value="${this.searchText}"/>
                  </div>
                </div>
                <div id="search-btns">
                  <button class="button is-size-7 dl-buttons" style="background-color:var(--app-default-color); color: #fff; margin:5px;" type="submit" @click="${this._search}">Search</button>
                  <button class="button is-size-7 dl-buttons" style="background-color:var(--app-secondary-color); margin:5px; color: #fff;" type="button" @click="${this._searchReset}">Clear</button>
                </div>
              </div>     
            </div>
          
                <div class="column is-flex" style="justify-content: flex-end;">
                  <div class="buttons" style="margin:0px;margin-right:32px;">
                    <span id="refresh-button" class="button is-size-7" @click="${this.refresh}">
                      <fa-icon class="fas fa-redo" size="1.4em" color="#fff"></fa-icon>
                    </span>
                    <button id ="pdf-btn" @click="${this.generatePDF}" class="button is-size-7">Export PDF</button>
                    <button id ="csv-btn" @click="${this.generateCSV}" class="button is-size-7">Export CSV</button>
                </div>
              </div>  
             
         
            
          </div>
        </div>



`}static get is(){return"table-type-header"}static get properties(){return{title:String,columns:{type:Array},selectedParam:String}}updateSearchItem(e){const selectedItemText=e.target.innerText,qIn=this.shadowRoot.querySelector("#qIn");qIn.innerText=selectedItemText;const allSearchItem=this.shadowRoot.querySelectorAll(".search_item");allSearchItem.forEach(item=>{item.classList.remove("active_item")});const selectedItem=e.target;selectedItem.classList.add("active_item");this.selectedParam=e.target.getAttribute("param")}generateCSV(){this.dispatchEvent(new CustomEvent("export-type",{detail:{type:"csv"}}))}generatePDF(){this.dispatchEvent(new CustomEvent("export-type",{detail:{type:"pdf"}}))}dropdown(){const dropdown=this.shadowRoot.querySelector("ul");if(dropdown.classList.contains("is-block")){dropdown.classList.remove("is-block")}else{dropdown.classList.add("is-block")}}closeDropdown(){const dropdown=this.shadowRoot.querySelector("ul");if(dropdown.classList.contains("is-block")){dropdown.classList.remove("is-block")}}specificDropdown(){const dropdown=this.shadowRoot.querySelector("ul");if(dropdown.classList.contains("is-block")){dropdown.classList.remove("is-block")}else{dropdown.classList.add("is-block")}}refresh(){this.dispatchEvent(new CustomEvent("refresh",{detail:{type:!0}}))}searchFields(columns){return columns.filter(function(item){return item.filter})}_searchReset(){const self=this;this.dispatchEvent(new CustomEvent("_clearSearch",{detail:{searchFields:self.searchFields(self.columns).map(function(field){return field.propertyPath})}}))}_searchFieldsExist(columns){return 0<columns.filter(function(item){return item.filter}).length}_search(){const self=this,q=self.shadowRoot.querySelector("#q").value;this.searchText=q;if(null==this.selectedParam||this.selectedParam==void 0){this.selectedParam="q"}if(q){this.dispatchEvent(new CustomEvent("_search",{detail:{column:this.selectedParam,searchFields:self.searchFields(self.columns).map(function(field){return field.propertyPath}),value:q}}))}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;if(self._searchFieldsExist(self.columns)){document.addEventListener("click",function(event){if("dropdown"==event.path[0].className){}else if("qIn"==event.path[0].id){self.dropdown()}else{self.closeDropdown()}})}}}customElements.define(TableTypeHeader.is,TableTypeHeader);var tableTypeHeader={TableTypeHeader:TableTypeHeader};class TableType extends LitElement{constructor(){super();this.columns=[];this.cols=[];this.data=[];this.selected=[];this.selctedRadio="";this.availableSize=[10,50,100,500]}static get styles(){return[TableStyles,TableTypeStyles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
      
      <!-- Responsive table starts here -->
<!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->
  
    <table-type-header 
    .title="${this.title}"
    .columns="${this.columns}"
    .searchText="${this.searchText}"
    @export-type="${this._exportType}"
    @_search="${this._search}"
    @_clearSearch="${this._clearSearch}"
    @refresh="${this.refresh}"
    >
</table-type-header>

    
<div class="table-container">
      <table class="dt-table" cellspacing="0">
        <thead>
            <tr>
            ${this.columns.map(column=>html`
            <th style="" scope="col">
                <datasource-table-head
                        .column="${column}"
                        sort-direction$="[[column.sortDirection]]"
                        @input-change-th-content="${this._handleInputChange}"
                        sorted$="[[column.sorted]]"
                        sortable$="[[column.sortable]]"
                        @filter-date-range = "${this._filter_date_range}"
                        @sort-th-content="${this._handleSort}">
                </datasource-table-head>
            </th>
            `)}
            </tr>
        </thead>

      

        <tbody>
        ${this.data.map((row,rowIndex)=>html`
            <tr>
            ${this.columns.map((column,columnIndex)=>html`
                <td data-label= ${column}>${this.renderColumn(column,row[column.property],columnIndex,row,rowIndex)}</td>
            `)}
            </tr>
        `)}
        </tbody>
      </table>
</div>

${0==this.data.length?html`

        <empty-view 
        message="${this.message}"
        gateway="${this.gateway}"

        ></empty-view>

`:html`

      ${this.paginate?html`
            <datasource-table-footer resources="${this.resources}"
                                  language="${this.language}"
                                  footer-position="${this.footerPosition}"
                                  .availableSize="${this.availableSize}"
                                  .totalPages="${this.totalPages}"
                                  .totalElements="${this.totalElements}"
                                  .oldPage="${this.oldPage}"
                                  
                                  size="${this.size}"
                                  page="${this.page}"
                                  
                                  @size-change="${this._sizeChanged}"
                                  @p-page="${this._pageChanged}"
                                  @n-page="${this._pageChanged}">
            </datasource-table-footer>
      `:html``}



`}




   


  `}static get is(){return"table-type"}renderColumn(paperDatatableApiColumn,valueFromRowData,p,rowData,rowIndex){if(paperDatatableApiColumn.actions){return html`
        
        <datasource-table-actions
        .cols=${this.cols}
        .pl=${this.pl}
        .item=${rowData}
        ></datasource-table-actions>
        
        `}else if(this.selectable&&0===p){return html`

      ${"single"===this.selectType?html`

      
      <label class="radio">
        <input type="radio"
          name="${rowData}"
          value="${rowData}"
          @click="${this.getRadioChecked}"
          rowData=${rowData}
          rowValue=${valueFromRowData}
          rowIndex=${rowIndex}>
          <span></span>
        
      </label>

      ${valueFromRowData}
    
      
      
      
      `:html`

          <div style="display:flex;">
            <paper-checkbox
            @click="${this.getCheckedRow}"
            rowData=${rowData}
            rowIndex=${rowIndex}
            .rowData=${rowData}
            .rowIndex=${rowIndex}
            rowValue=${valueFromRowData}
            ></paper-checkbox>

            <div style="margin-left:0px;">
            ${valueFromRowData}
            </div>

            </div>
        
      
      
      `}
      
        `}else{try{let columnValue=valueFromRowData;var dJson;if("object"==typeof columnValue){dJson=columnValue}else{dJson=JSON.parse(columnValue);if("object"!=typeof dJson){throw"Not Object JSON"}}const vs=[];for(var property in dJson){vs.push(html`<div style="margin-top:0.1px;"><strong>${property}: </strong><span>${dJson[property]}</span></div>`)}return html`
          ${vs.map(v=>html` ${v}<br>`)}`}catch(e){switch(paperDatatableApiColumn.type){case"boolean":return html`
              ${"false"==(valueFromRowData+"").toLowerCase()?html`
              <iron-icon icon="icons:close"></iron-icon>
              `:html`
              <iron-icon icon="icons:check"></iron-icon>
              `}
              
              `;break;default:return html`${valueFromRowData}`;}}}}static get properties(){return{data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},pl:Object,details:Object,columns:{type:Array},paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,selectable:{type:Boolean,value:!1},selected:{type:Array},title:String,searchText:String,selectType:{type:String},message:String,gateway:String}}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_handleSort(evt){console.log(evt)}_filter_date_range(event){var start_date=event.detail.start_date,end_date=event.detail.end_date,column=event.detail.column;this.dispatchEvent(new CustomEvent("filter-date-range",{detail:{column:column,start_date:start_date,end_date:end_date}}))}getRadioChecked(event){const rowData=event.target.getAttribute("rowData"),rowIndex=event.target.getAttribute("rowIndex"),rowValue=event.target.getAttribute("rowValue");let rowDataId=rowValue;const self=this;if(rowDataId===void 0){rowDataId=rowIndex;self.selectedRadio=rowDataId;this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selectedRadio}}))}else{self.selectedRadio=rowDataId;this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selectedRadio}}))}}getCheckedRow(e){const rowData=e.target.getAttribute("rowData"),rowIndex=e.target.getAttribute("rowIndex"),rowValue=e.target.getAttribute("rowValue");rowData.id;if(this.selected==void 0){this.selected=[]}this;if(rowValue===void 0){rowValue=rowIndex;if(this.selected.includes(rowIndex)){this.selected=this.selected.filter(value=>value!=rowIndex);this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))}else{this.selected.push(rowValue);this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))}}else{if(this.selected.includes(rowValue)){this.selected=this.selected.filter(value=>value!=rowValue);this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))}else{this.selected.push(rowValue);this.dispatchEvent(new CustomEvent("selection-changed",{detail:{selected:this.selected.toString()}}))}}}_exportType(evt){const type=evt.detail.type;this.dispatchEvent(new CustomEvent("export",{detail:{type:type}}))}refresh(evt){const type=evt.detail.type;this.dispatchEvent(new CustomEvent("refresh",{detail:{type:type}}))}_handleInputChange(evt){this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:evt.detail.column.propertyPath,value:evt.detail.value}}))}searchFields(columns){return columns.filter(function(item){return item.filter})}_searchFieldsExist(columns){return 0<columns.filter(function(item){return item.filter}).length}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}_pageChanged(evt){const page=evt.detail.page,oldPage=this.page;if(oldPage!==void 0){this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:oldPage,page:page}}))}this.page=page}_sizeChanged(evt){const size=evt.detail.size,oldSize=this.size;if(oldSize!==void 0){this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:oldSize,size:size}}))}this.size=size}_selectChange(event){if(event.type&&"change"===event.type){Polymer.dom(event).localTarget}else{}}_searchReset(){this._clearSearch()}_search(evt){var filter=evt.detail.value,column=evt.detail.column,columns=evt.detail.searchFields;this.dispatchEvent(new CustomEvent("search",{detail:{column:column,searchFields:columns,value:filter}}))}_clearSearch(event){var columns=event.detail.searchFields;this.dispatchEvent(new CustomEvent("clear-search",{detail:{searchFields:columns}}))}}customElements.define(TableType.is,TableType);var tableType$1={TableType:TableType};export{tableTypeCss as $tableTypeCss,tableTypeHeaderCss as $tableTypeHeaderCss,tableTypeHeader as $tableTypeHeader,tableType$1 as $tableType,tableType as $tableType$1,TableTypeStyles,TableTypeHeaderStyles,TableTypeHeader,TableType,TableStyles};