var firebaseConfig = {
      apiKey: "AIzaSyBqskJF25yo0WP6qiYVcFGx2sxiSPJNdK8",
      authDomain: "kwitter-2bab2.firebaseapp.com",
      projectId: "kwitter-2bab2",
      storageBucket: "kwitter-2bab2.appspot.com",
      messagingSenderId: "659894555628",
      appId: "1:659894555628:web:51df5d25bcf3749d45a6c9",
      measurementId: "G-RRCZZDS026"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome" +user_name;
    function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_Names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName (this.id)'>#"+ Room_name +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}