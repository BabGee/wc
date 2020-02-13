/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const FamilyTreeStyles = css`
body { margin:0;position:fixed;top:0;right:0;bottom:0;left:0; }
text {
	font-family: "Helvetica Neue", Helvetica, sans-serif;
}

.title {
	font-size: larger;
  text-align: center;
}

.name {
	font-weight: bold;
}

.about {
	fill: #777;
	font-size: smaller;
}

.lifespan {
	fill: #2c5;
}

.link {
	fill: none;
	stroke: #000;
	shape-rendering: crispEdges;
}

.node {
	fill: blue;
}
option{
 font-size: 18px;
 }

`;