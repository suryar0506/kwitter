//YOUR FIREBASE LINKS
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

    var user_name = localStorage.getItem("User's Name : ");
    var room_name = localStorage.getItem("Room Name : ");

    function Send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name : user_name,
            message: msg,
            likes : 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logOut(){
      localStorage.removeItem("User's Name : ");
      localStorage.removeItem("Room Name : ");
      window.location = "index.html";
 }