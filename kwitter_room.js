
const firebaseConfig = {
  apiKey: "AIzaSyAh60eQNflteTbgcuQ21zHtaDnUVU81jXA",
  authDomain: "hiupforefirebase.firebaseapp.com",
  databaseURL:"https://hiupforefirebase-default-rtdb.firebaseio.com/",
  projectId: "hiupforefirebase",
  storageBucket: "hiupforefirebase.appspot.com",
  messagingSenderId: "880859256218",
  appId: "1:880859256218:web:5429ac907df7a1dcc19623"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Bem vindo(a) "+user_name+"!";

function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Loading..."
    })
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on("value", function(snapshot){
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot){
          childKey=childSnapshot.key;
          Room_names=childKey;
          console.log("Nome da sala:"+Room_names);
          Row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML+=Row;
        })
      }) 
}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout () {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}