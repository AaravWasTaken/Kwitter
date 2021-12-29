const firebaseConfig = {
      apiKey: "AIzaSyAh3uJUmiECmsrjihW0qFlHtTgCTvcOQjs",
      authDomain: "kwitterremake.firebaseapp.com",
      databaseURL: "https://kwitterremake-default-rtdb.firebaseio.com",
      projectId: "kwitterremake",
      storageBucket: "kwitterremake.appspot.com",
      messagingSenderId: "986585976187",
      appId: "1:986585976187:web:b3034a56b5c3fe0943c1de"
    };
    
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
