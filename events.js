// ========================================
// TASK 10.2 - EVENT OBJECT
// ========================================

document.addEventListener("click", function (event) {

    console.log("Clicked element:", event.target);

    console.log("Event type:", event.type);

    console.log(
        "Mouse position:",
        event.clientX,
        event.clientY
    );
});


document.addEventListener("keydown", function (event) {

    console.log("Key pressed:", event.key);

    console.log("Key code:", event.code);

    console.log("Shift pressed:", event.shiftKey);

    console.log("Ctrl pressed:", event.ctrlKey);

    console.log("Alt pressed:", event.altKey);

});
