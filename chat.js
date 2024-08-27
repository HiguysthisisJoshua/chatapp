function set(){

    user = document.getElementById("user_name").value ;
    
    localStorage.setItem("user_name",user)
    
    window.location = "chat_room.html" ;
    
    }