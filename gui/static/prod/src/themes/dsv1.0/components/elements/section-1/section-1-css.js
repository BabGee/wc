/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const Section1Styles = css`
:root{
    --header-color: #00c6ff;
    --light-pink: #fcf0e3;
    --dark-pink: #f36b7f;
    --main-color: #333333;
    --cta-color: #2566F2;
    --lighter-blue: #edf3ff;
    --light-blue: #9fbfff;
    --yellow: #f8cf61;
    --golden-yellow: #f8d21c;
    --primary-blue: #0040bf;
    --deep-sky-blue: #157cf8;
}
.center, .content{
    margin: 0 auto;
    width: 50%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}
.landing-btn{
    outline: none;
    color: #fff;
    width: 170px;
    transition: all 0.5s;
    background-color: var(--cta-color);
    border-radius: 5px;
    font-size: 16px;
    line-height: 1.5;
    padding: 13px;
}
.landing-btn-borderd{
    border: 2px solid var(--dark-pink)!important;
    background: transparent!important;
    border-radius: 5px;
    font-size: 16px!important;
    line-height: 1.5;
    padding: 15px 50px!important;
    color: var(--dark-pink)!important;
}
.landing-banner{
    height: 672px;
}
.hero{
    background-color: var(--header-color);
}
.hero .landing-subtitle{
    padding: 30px 0 0 0;

}
.hero .landing-subtitle p{
    font-size: 20px;
}
.hero .main-title{
    width: 90%;
    margin: 20px auto 40px auto;
}
.hero .main-title .title{
    font-size: 72px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: center;
    color: white;
}
.hero .main-lander-cta{
    margin-bottom: 50px;
    position: relative;
    top: -86px;
}
.main-media{
    width: 50%;
    margin: 0 auto;
    z-index: 1000;
}
.main-media .video{
    width: 100%;
    border-radius: 8px;
    border: 10px solid #333333;
    background: #fff;
    position: absolute;
    top: -149px;
}

`;