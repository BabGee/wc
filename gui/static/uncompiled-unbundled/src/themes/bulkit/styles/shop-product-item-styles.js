/**
 @license
 Copyright (c) 2018 InterIntel Technologies. All rights reserved.

 */
import { html } from "../../../../node_modules/lit-element/lit-element.js";
export const shopProductItemTheme = html`
<style>
   
            .badge {
                background-color: #2ecc71;
                border: none;
                color: white;
                padding: 5px 12px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 12px;
                margin: 4px 2px;
                top:0;
                right:0;
                cursor: pointer;
                float: right;
            }
            .badge-red {
                background-color: #e74c3c;
                border: none;
                color: white;
                padding: 5px 12px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 14px;
                margin: 4px 2px;
                position:absolute;
                top:0;
                right:0;
                cursor: pointer;
            }
            .btncart {
                background-color: var(--app-default-color);
                border: none;
                color: white;
                width: 100%;
                padding-top: 10px;    
                padding-bottom: 10px;
                padding-left: 0px;
                padding-right: 0px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }
            .btncart-red {
                background-color: #e74c3c;
                border: none;
                color: white;
                width: 100%;
                padding: 10px 24px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }
            .btncart-green {
                background-color: #2ecc71;
                border: none;
                color: white;
                width: 100%;
                padding: 10px 24px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }
            .btncart:hover {
                background-color: #e67e22;
                box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
            }
            .star {
                --iron-icon-height: 18px;
                --iron-icon-width: 18px;
                --iron-icon-fill-color: #e67e22;
            }

            .sale {
                color: #fff;
                background-color: #e95e49; }

            .sold-out {
                background-color: rgba(255, 255, 255, 0.9);
                color: #000000;
                pointer-events: none;
                padding: 15px 0;
                display: block;
                text-align: center;
                width: 100%;
                z-index: 5;
                text-transform: uppercase;
                font-weight: bold;
                cursor: default;
                font-size: 11px;
                font-family: "Questrial", sans-serif;
                letter-spacing: 0.05em; }

.one_fourth .product_image {

    height: 200px;
}

.one_fourth .product_image img {
    max-height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
.one_fourth img {
    height: auto;
    width: 100%;
    object-fit: contain;
}
.one_fourth {
    background: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 8px;
    margin: 20px;
}
            .one_fourth:hover {
                box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
                opacity: 0.6;
                transform:scale(1.1);
            }
                   .one_fourth h3 {
                color: blue;
                font-weight: 700;
                font-size: 30px;
                line-height: 30px;
                margin-bottom: 10px;
            }
            .one_fourth h4 {
                color: #8e44ad;
                font-size: 15px;
                margin-bottom: 2px;
                margin-top: 2px;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .one_fourth span {
                color: #2d3436;
                font-size: 14px;
                margin-bottom: 2px;
                margin-top: 2px;
            }
            .one_fourth .product-details{
                padding: 16px;
                text-align: left;
              
            }
             .one_fourth h3 sup{font-size: 15px;}
             .one_fourth p {
                 color: #636e72;
                 margin-top: 20px;
                 margin-bottom: 2px;
                 font-size: 13px;
             }
        </style>
`;