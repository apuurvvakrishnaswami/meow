const firebaseConfig = {
    apiKey: "AIzaSyCH_7WleKtRz3pB-hPsVdC77jhDNfFHm4Y",
    authDomain: "kwitter-21d3a.firebaseapp.com",
    databaseURL: "https://kwitter-21d3a-default-rtdb.firebaseio.com",
    projectId: "kwitter-21d3a",
    storageBucket: "kwitter-21d3a.appspot.com",
    messagingSenderId: "1056252205339",
    appId: "1:1056252205339:web:1fe6f60b2a2691dc3b1bbe"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
room_name=document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData()
{
    firebase.database().ref("/").on('value',function(snapshot)
    {
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot)
        {

            childKey=childSnapshot.key;
            Room_names=childKey;
            console.log("room name-"+Room_names);
            row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML +=row;

        });
            
        
    });
}

getData();

function  redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";

}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem ("room_name");
    window.location="kwitter.html";  
}