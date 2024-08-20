let CONTEXT;
let isDrawing = null;

function createEventListeners() {
    console.log("Entering create event listeners function");

    const boxes = document.querySelectorAll(".box");
    const canvas = document.querySelector("canvas");

    CONTEXT = canvas.getContext("2d");

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseup", mouseUp);

    console.log(boxes);
    
    boxes.forEach((box) => {
        box.addEventListener("click", clickBox);
    });

    console.log("Exiting create event listeners function");
}

createEventListeners();

function clickBox(event) {
    console.log("Entering clickBox function");

    let box = event.target;
    let computedStyle = window.getComputedStyle(box);
    let selectedColor = computedStyle.backgroundColor;

    console.log(`box ${box.id} was clicked`);
    console.log(`Selected color: ${selectedColor}`);

    CONTEXT.strokeStyle = selectedColor;

    console.log("Exiting clickBox function");
}

function mouseDown(event) {
    console.log("Entering mouseDown function");

    isDrawing = true;

    CONTEXT.beginPath();
    CONTEXT.moveTo(event.offsetX, event.offsetY);

    console.log("Exiting mouseDown function");
}

function mouseMove(event) {
    if (isDrawing) {
        CONTEXT.lineTo(event.offsetX, event.offsetY);
        CONTEXT.stroke();
    }
}

function mouseUp(event) {
    console.log("Entering mouseUp function");

    CONTEXT.stroke();
    isDrawing = false;

    console.log("Exiting mouseUp function");
}