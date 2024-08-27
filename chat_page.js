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

roomName = localStorage.getItem("room_name");
function logout(){

    localStorage.removeItem("room_name")
    localStorage.removeItem("user_name")
    window.location ="index.html" ;
}
function sent(){

    var message = document.getElementById("mesbox").value ;
    firebase.database().ref(roomName).push({
        message:message,
        name:user_info_name,
        like:0

        

    })
    document.getElementById("mesbox").value = "";

}
function getData() {
    firebase.database().ref("/"+roomName).on('value', function(snapshot)
    { document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
    childData = childSnapshot.val();
    if(childKey != "purpose") { firebase_message_id = childKey; 
    mes_names = childData;
          //Start code
    console.log("listofroomnames" + mes_names);
    mesg = mes_names['message'];
    usrname = mes_names['name'];
    lk = mes_names['like'];
    likbtn = "<button class= 'btn btn-success' id =" + firebase_message_id + "value =" + lk + "onclick ='updatelik(this.id)'>"
    span_tag = "<span class='glyphicon glyphicon-thumbs-up '> Like " + lk + "</span></button> <hr>";
    row_tem = "<h4>" + usrname + ": " + mesg + "</h4>";
    row = row_tem + likbtn + span_tag;
    document.getElementById("output").innerHTML += row;
          //End code
          }});});}
    getData();

    function updatelik(id){
console.log("button clicked" + id);
        button_id = id;
        likes = document.getElementById(button_id).value ;
        update_likes = Number(likes) + 1 ;
        firebase.database().ref(roomName).child(id).update({
        like:update_likes 

        })

    }