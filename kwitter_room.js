
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCNNU4HHcvVXLB1QkqRDfls5N53lDCJwoQ",
      authDomain: "kwitter-project-cdc06.firebaseapp.com",
      databaseURL: "https://kwitter-project-cdc06-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-cdc06",
      storageBucket: "kwitter-project-cdc06.appspot.com",
      messagingSenderId: "69802262594",
      appId: "1:69802262594:web:8ae0dba48763e4a6946ddb"
    };
    firebase.initializeApp(firebaseConfig);

var users_name = localStorage.getItem("User's Name : ");
document.getElementById("user_name").innerHTML = "Welcome, " + users_name + "!";


function addRoom(){
      var room_name = document.getElementById("create_room").value;
      localStorage.setItem("Room Name : ",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Names - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div></hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("Room Name : ",name);
window.location = "kwitter_page.html";
}
function logOut(){
      localStorage.removeItem("User's Name : ");
      localStorage.removeItem("Room Name : ");
      window.location = "index.html";
 }