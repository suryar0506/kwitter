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
            like : 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like + " onclick = 'updateLikes(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
getData();

function updateLikes(message_id){
console.log("Liked a message - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
});

}

function logOut(){
      localStorage.removeItem("User's Name : ");
      localStorage.removeItem("Room Name : ");
      window.location = "index.html";
 }