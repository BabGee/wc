/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const FooterElementStyles = css`
body{
    font-family: 'Montserrat', sans-serif;
    min-height: 100%;
    font-size: 14px;
    line-height: 20px;
    color: rgb(121, 85, 85);
    background-color: #F0F5FE;
}
.ii__container-main{
    margin: 0 auto;
    padding: 0 20px;
}
.ii__container.ii__container--home{
    padding-top: 30px;
}

.ii__container{
    max-width: 1068px;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
}
.wa__container{
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
}
a.navbar-item:hover {
    background-color: transparent;
    color: inherit;
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

.ii__footer {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #fff;
    color: #000;
}
.ii-footerfexrow{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 60px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.ii-footer-col {
    margin-left: 10px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
}
.ii-footer-col-sm{
    margin-left: 5px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
}
.ii__footer-col-title {
    color: var(--app-primary-color);
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.5px;
}
.ii__footer-col-link {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #a8a9b7;
    font-size: 12px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 0.2px;
    text-decoration: none;
}
.ii__footer-branding{
    width: 100px;
    margin-bottom: 20px;
}
.footer-bottom{
    border-top: 0.5px solid #a8a9b7;
    padding-top: 20px;
}
.footer-rights{
    color: #a8a9b7;
}
`;