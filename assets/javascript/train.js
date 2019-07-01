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
var firstTime = "12:00";
var frequency = 60;
var convertedTime = moment(firstTime, "HH:mm").subtract(1, "years");
var currentTime = moment();
console.log(currentTime.minutes())
var timeDifference = moment().diff(moment(convertedTime), "minutes");
var remainder = timeDifference % frequency;
var minutesAway = frequency - remainder;
console.log(minutesAway);
var nextArrival = moment().add(minutesAway, "minutes").format("hh:mm");
console.log(nextArrival);


$("#submit-button").on("click", function (event) {
    event.preventDefault();
    console.log("Submit ->");
    var name = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var firstTime = $("#train-time").val().trim();
    var frequency = $("#train-frequency").val().trim();
    var convertedTime = moment(firstTime, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    console.log(currentTime.minutes())
    var timeDifference = moment().diff(moment(convertedTime), "minutes");
    var remainder = timeDifference % frequency;
    var minutesAway = frequency - remainder;
    console.log(minutesAway);
    var nextArrival = moment().add(minutesAway, "minutes").format("hh:mm");
    console.log(nextArrival);
    database.ref().push({
        name: name,
        destination: destination,
        firstTime: firstTime,
        frequency: frequency,
        minutesAway: minutesAway,
        nextArrival: nextArrival
    });
    console.log("<- Submit");
});
database.ref().on("child_added", function (childSnapshot) {
    $("tbody").append('<tr class="tab-row"><td class="name">' + childSnapshot.val().name + '<td class="destination">' + childSnapshot.val().destination + '<td class="frequency">' + childSnapshot.val().frequency + '<td class="nextArrival">' + childSnapshot.val().nextArrival + '<td class="minutesAway">' + childSnapshot.val().minutesAway);
});