
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBm7CO2QF5zuzHyUkuj3w0N_y9wnvJqooI",
    authDomain: "letschat-45c50.firebaseapp.com",
    databaseURL: "https://letschat-45c50-default-rtdb.firebaseio.com",
    projectId: "letschat-45c50",
    storageBucket: "letschat-45c50.appspot.com",
    messagingSenderId: "983356898948",
    appId: "1:983356898948:web:5e583da48010215e59ccd1"
  };

  firebase.initializeApp(firebaseConfig)
user_info_name = localStorage.getItem("user_name");
document.getElementById('Welcome').innerHTML = "Welcome  " + user_info_name ;

function getData() {
firebase.database().ref("/").on('value', function(snapshot) {
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
    //Start code
console.log("listofroomnames" + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function logout(){

    localStorage.removeItem("user_name")
    window.location ="index.html" ;
}
function addroom(){

    room =  document.getElementById("room_name").value;
    firebase.database().ref("/").child(room).update({
     purpose:"room"    
    });
    localStorage.setItem("roomName",room);

window.location = "chat_page.html";


}
function redirectToRoomName(name){

    localStorage.setItem("room_name",name);
    window.location = "chat_page.html";


}