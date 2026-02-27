<!DOCTYPE html>
<html>
<head>
  <title>Auwal MD</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body{
      margin:0;
      font-family:Arial;
      background:linear-gradient(135deg,#0a0f1c,#111a2e);
      color:white;
      text-align:center;
    }

    h1{
      margin-top:40px;
      background:linear-gradient(90deg,#00aaff,#8a2be2);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }

    .box{
      margin-top:50px;
    }

    input{
      padding:12px;
      margin:10px;
      width:80%;
      max-width:300px;
      border-radius:5px;
      border:none;
    }

    button{
      padding:10px 20px;
      border:none;
      border-radius:20px;
      background:linear-gradient(90deg,#00aaff,#8a2be2);
      color:white;
      font-weight:bold;
      cursor:pointer;
      margin:5px;
    }

    button:hover{
      transform:scale(1.05);
    }
  </style>
</head>

<body>

<h1>Auwal MD Login</h1>

<div class="box">
  <input type="email" id="email" placeholder="Enter Gmail">
  <br>
  <input type="password" id="password" placeholder="Enter Password">
  <br>
  <button onclick="register()">Register</button>
  <button onclick="login()">Login</button>
</div>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCKg3APPgfsx94I3HDMNFgr-ySpKnbVmIg",
    authDomain: "auwalmdtech.firebaseapp.com",
    projectId: "auwalmdtech",
    storageBucket: "auwalmdtech.firebasestorage.app",
    messagingSenderId: "202329584080",
    appId: "1:202329584080:android:33b8aa59e2267dd04609d5"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  window.register = function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      alert("Registration Successful!");
    })
    .catch((error)=>{
      alert(error.message);
    });
  }

  window.login = function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      alert("Login Successful!");
    })
    .catch((error)=>{
      alert(error.message);
    });
  }
</script>

</body>
</html>
