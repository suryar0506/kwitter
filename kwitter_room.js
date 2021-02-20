
//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
      apiKey: "AIzaSyD3R6zKhpl4UQcqQm6AVOdSNaXtSze15FA",
      authDomain: "kwitter-c71ca.firebaseapp.com",
      databaseURL: "https://kwitter-c71ca-default-rtdb.firebaseio.com",
      projectId: "kwitter-c71ca",
      storageBucket: "kwitter-c71ca.appspot.com",
      messagingSenderId: "774546883472",
      appId: "1:774546883472:web:048a79d87ff6c94fb12915",
      measurementId: "G-QG4QSK5RCF"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
