$("#submit-button").on("click", function(event) {
    event.preventDefault();
    console.log("Submit ->");
    console.log($("#train-name").val());
    console.log("<- Submit");
});