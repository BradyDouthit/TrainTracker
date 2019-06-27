var firebaseConfig = {
    apiKey: "AIzaSyBCpS6D2JrxIdnkK4plncvNcERLt6KbLSc",
    authDomain: "traintracker-edc8c.firebaseapp.com",
    databaseURL: "https://traintracker-edc8c.firebaseio.com",
    projectId: "traintracker-edc8c",
    storageBucket: "",
    messagingSenderId: "883902778956",
    appId: "1:883902778956:web:3d2a3bbaa5a441b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var name = "";
var destination = "";
var time = "";
var frequency ="";

$("#submit-button").on("click", function(event) {
    event.preventDefault();
    var name = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var time = $("#train-time").val().trim();
    var frequency = $("#train-frequency").val().trim();
    console.log("Submit ->");
    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    });
    console.log("<- Submit");
});
database.ref().on("child_added", function(childSnapshot) {
    $("tbody").append('<tr class="tab-row"><td class="name">' + childSnapshot.val().name + '<td class="destination">' + childSnapshot.val().destination + '<td class="time">' + childSnapshot.val().time + '<td class="frequency">' + childSnapshot.val().frequency);
});