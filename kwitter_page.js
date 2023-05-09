const firebaseConfig = {
    apiKey: "AIzaSyDdVZpTDvPM3kxO8rai6V0boxlc9rk-8V0",
    authDomain: "friendschat-a9e50.firebaseapp.com",
    databaseURL: "https://friendschat-a9e50-default-rtdb.firebaseio.com",
    projectId: "friendschat-a9e50",
    storageBucket: "friendschat-a9e50.appspot.com",
    messagingSenderId: "43656559235",
    appId: "1:43656559235:web:07b20f3b391330ca7ef9b6"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("name_of_user");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
           message:msg,
           like:0
    });

    document.getElementById("msg").value = "";
}
function getData()
{
    firebase.database().ref("/"+room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "", snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            childData = childSnapshot.val();
            if(childKey != "purpouse")
            {
                firebase_message_id = childKey;
                message_data = childData;
//Inicie a progamar aqui
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data ['message'];
                like = message_data ['like'];
                name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button ="<button class 'btn btn-warning' id="+firebase_message_id+" value="+ like+" onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Curtidas: "+   like+"</span></button><hr>";
                document.getElementById("output").innerHTML += row;
//Progame até aqui
            }
        });
    });
}
getData()

function updateLike(message_id)
{
    console.log("clicou no botão curtir - " + message_id);
    button_id - message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) +1;
    console.log(update_likes);

    firebase.database().ref(room_name).child(message_id).update({
         like : update_likes
    })

}

function Logout()
{
    localStorage.removeItem("name_of_user");
    localStorage.removeItem("room_name");
    window.location.replace("index (1).html");
}