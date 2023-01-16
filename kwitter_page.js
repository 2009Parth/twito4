// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEXWuMIKiP78XfCVNTRHI6Py-uiRm5BwA",
    authDomain: "twito-ba470.firebaseapp.com",
    databaseURL: "https://twito-ba470-default-rtdb.firebaseio.com",
    projectId: "twito-ba470",
    storageBucket: "twito-ba470.appspot.com",
    messagingSenderId: "125020631690",
    appId: "1:125020631690:web:7ed430feec26a860547373"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);







user_name = localStorage.getItem("UserName");
room_name = localStorage.getItem("room_name");









   function getData() 
   { 
         firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
          {
            firebase_message_id = childKey;
            message_data = childData;
   //Start code
   
   //End code
          }
         }); 
       }); 
   }










getData();













function send()
{
   msg = document.getElementById("msg").value;

   firebase.database().ref(room_name).push({
      name : user_name ,
      message : msg ,
      like : 0
   });

   document.getElementById("msg").value = "" ;
}








function logout()
{
    localStorage.removeItem("UserName");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}