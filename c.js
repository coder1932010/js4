const firebaseConfig =
{
      apiKey: "AIzaSyA2JrrhHlg_educlrymdyLCPDahNX0uIGk",
      authDomain: "kwitter-c3927.firebaseapp.com",
      databaseURL: "https://kwitter-c3927-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3927",
      storageBucket: "kwitter-c3927.appspot.com",
      messagingSenderId: "668988906886",
      appId: "1:668988906886:web:9ab4651730682ad6e66007"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.datebase().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();
