/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const SectionHeroStyles = css`
.lead {
    font-size: 18px;
    font-weight: 400;
}
/*top background*/
.intro-header { 
    /* padding-top: 50px; If you're making other pages, make sure there is 50px of padding to make sure the navbar doesn't overlap content! */
    /* padding-bottom: 50px; */
    text-align: center;
    background: url('https://40.media.tumblr.com/1b916597d3e174399cb7adadddb66ede/tumblr_nt5uk4psl31ud7rr3o1_1280.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 505px;
}
.bg-overlay {
  background:rgba(0,0,0, 0.6);
  height: 505px;
}

.intro-message {
    position: relative;
    padding-top: 20%;
    padding-bottom: 20%;
}
/*Big header*/
.intro-message > h1 {
    margin-top: -50px;
    /* text-shadow: 2px 1px 2px #000; */
    font-size: 5em;
    color: rgba(255, 255, 255, 1);
}

.intro-divider {
    width: 400px;
    border-top: 1px solid #f8f8f8;
    border-bottom: 1px solid #fff;
}
/*small header*/
.intro-message > h3 {
    /* text-shadow: 1px 1px 1px rgba(0,0,0,0.6); */
  color: #fff;
}
/*line*/
hr.intro-divider {
  border: 1px outset rgba(255, 255, 255, 0.2);
  box-shadow: 1px 1px 1px rgba(0,0,0,0.6);
  width: 100%;
}
/* social buttons */
.btn {
  display: inline-block;
  color: #000;
  border: 2px outset rgba(0, 0, 0, 0.9);
  background: #C0C0C0;
  text-shadow: 1px 1px 1px rgba(0,0,0, 20);
  box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
  letter-spacing: 2px;
  transition: 0.2s;
}

.btn:hover {
	color: #fff;
  border: 2px outset rgba(0, 0, 0, 0.9);
  background: rgba(0,0,0, 0.9);
  transform:scale(1.1);
  transition: 0.2s;
  text-shadow: 1px 1px 1px rgba(0,0,0, 20);
  box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
  letter-spacing: 2px;
}
.button-cta a{
  background: #23d160;
  color: #fff;
  margin-top: 40px;
}


`;