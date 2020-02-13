/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const NavbarTenStyles = css`
nav {
	font-size: 16px;
}
      .bind-box {
	margin-bottom: 1.5rem;
	background-color: white;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
	color: #4a4a4a;
    display: block;
    padding: 1.25rem 4.5rem;
    
}

.icon {
  margin-left:2px;
  margin-right:2px;
}
.level p a{
  color: #D4D3D3;
}

.level p a:hover{
  color: #4a4a4a;
}

.navbar-link{
  color: #FFFFFF;
}

nav a{
  font-size: 12px;
}

.menu-label {
  color: #7a7a7a;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

#drop-down-container a{
  font-size: 16px;
  font-weight: 420;
}
a.news::after, aside.menu ul.menu-list li a.news::after {
  color: #fff;
  content: " new ";
  font-size: 10px;
  background-color: #3273dc;
  text-align: center;
}

#site-name {
	font-size: 25px;
}
`;