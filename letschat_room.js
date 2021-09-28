  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAXwWdVgK6NfRO1r9LUVbRPuG7sy8aY9k4",
    authDomain: "classtest2-6cabd.firebaseapp.com",
    databaseURL: "https://classtest2-6cabd-default-rtdb.firebaseio.com",
    projectId: "classtest2-6cabd",
    storageBucket: "classtest2-6cabd.appspot.com",
    messagingSenderId: "85308031539",
    appId: "1:85308031539:web:993a929b6fc5a27e089946"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name",room_name);

  window.location = "letschat_page.html";

}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
  console.log("Room name - " + Room_names);
  row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
  document.getElementById("output").innerHTML += row;
  
}); }); }

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "letschat_page.html";

}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
  
}