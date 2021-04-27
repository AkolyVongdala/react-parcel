import React from "react";

const viewHeight = 500;
const viewWidth = 500;


const App = () => {
    return (
    <svg style={{ border: "1px solid black", width:viewWidth, height:viewHeight}}>
        <circle cx="10" cy="10" r="5" ></circle>
        <rect x={200} y={200} width="100" height="100"></rect>
        <rect x={312} y={200} width="100" height="100" fill="red"></rect>
        <line x1={20} y1={viewHeight} x2={120} y2={100} stroke="black"></line>
        <text x="20" y="35">
            something here
        </text>
    </svg>
    );
};

export default App;