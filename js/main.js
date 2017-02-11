/**
 * Created by Pranjal Paliwal on 2/11/2017.
 */
var config = {
    apiKey: "AIzaSyCVmeKiEIgc3vnXfKpV9of_ib8Ev8J6cnY",
    authDomain: "saga-39285.firebaseapp.com",
    databaseURL: "https://saga-39285.firebaseio.com",
    storageBucket: "saga-39285.appspot.com",
    messagingSenderId: "235516453088"
};
firebase.initializeApp(config);

var database = firebase.database();

function getData() {
    var ref = database.ref('appliances');
    ref.on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {

            console.log(childSnapshot.val());
            var ac1state = childSnapshot.val().ac1;
            var ac2state = childSnapshot.val().ac2;
            var wmstate = childSnapshot.val().wm;
            var rfstate = childSnapshot.val().rf;

            console.log(ac1state, ac2state, wmstate, rfstate);


            if (ac1state == 0) {
                document.querySelector("#ac1 p").innerHTML = "AC is OFF Currently";
                document.getElementById("ac1").style.background = "#ff6d6b";
            }
            else {
                document.querySelector("#ac1 p").innerHTML = "AC is ON Currently";
                document.getElementById("ac1").style.background = "#7dff83";
            }
            if (ac2state == 0) {
                document.querySelector("#ac2 p").innerHTML = "AC is OFF Currently";
                document.getElementById("ac2").style.background = "#ff6d6b";
            }
            else {
                document.querySelector("#ac2 p").innerHTML = "AC is ON Currently";
                document.getElementById("ac2").style.background = "#7dff83";
            }
            if (wmstate == 0) {
                document.querySelector("#rs1 p").innerHTML = "Washing Machine is OFF Currently";
                document.getElementById("rs1").style.background = "#ff6d6b";
            }
            else {
                document.querySelector("#rs1 p").innerHTML = "Washing Machine is ON Currently";
                document.getElementById("rs1").style.background = "#7dff83";
            }
            if (rfstate == 0) {
                document.querySelector("#rf1 p").innerHTML = "Refridgerator is OFF Currently";
                document.getElementById("rf1").style.background = "#ff6d6b";
            }
            else {
                document.querySelector("#rf1 p").innerHTML = "Refridgerator is ON Currently";
                document.getElementById("rf1").style.background = "#7dff83";
            }

        })
    })
}


getData();




