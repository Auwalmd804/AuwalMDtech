import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loading = document.getElementById("loading");

function showLoading(){
loading.style.display="block";
}

function hideLoading(){
loading.style.display="none";
}

window.showRegister = ()=>{
document.getElementById("loginBox").style.display="none";
document.getElementById("registerBox").style.display="block";
}

window.showLogin = ()=>{
document.getElementById("loginBox").style.display="block";
document.getElementById("registerBox").style.display="none";
}

window.register = async ()=>{

showLoading()

try{

await createUserWithEmailAndPassword(
auth,
document.getElementById("regEmail").value,
document.getElementById("regPassword").value
)

alert("Account created successfully")

}catch(e){

alert(e.message)

}

hideLoading()

}

window.login = async ()=>{

showLoading()

try{

await signInWithEmailAndPassword(
auth,
document.getElementById("email").value,
document.getElementById("password").value
)

alert("Login successful")

}catch(e){

alert(e.message)

}

hideLoading()

}
