
var firebaseConfig = {
      apiKey: "AIzaSyDOZcg61dzq-y7J7fsO5u91Jy8qoozVJxY",
      authDomain: "kwitter-f21ed.firebaseapp.com",
      databaseURL: "https://kwitter-f21ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-f21ed",
      storageBucket: "kwitter-f21ed.appspot.com",
      messagingSenderId: "113574623792",
      appId: "1:113574623792:web:7fe8b55b2010b676dfcbf5"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
