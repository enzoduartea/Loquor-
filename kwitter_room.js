
//ADICIONE SEUS LINKS DO FIREBASE
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

name_of_user= localStorage.getItem("name_of_user");
//-codigo que vem depois do firebase-//
document.getElementById("name_of_user").innerHTML = "Bem vindo(a)," + name_of_user + "!";
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adicionando nome da sala"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot){ document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot ){ childKey = childSnapshot.key;
  Room_names = childKey;
  console.log("Nome da sala: " +Room_names);
row = "<div class = 'room_name' id="+Room_names+"oncilck = 'redirectToRoomName(this.id'>#"+ Room_names + "</div<hr>";
document.getElementById("output").innerHTML += row;
   });
})};
getData()

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "Kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_html");
    localStorage.removeItem("room_name");
         window.location = "index(1).html";
}