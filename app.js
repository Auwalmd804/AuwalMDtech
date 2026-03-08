import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loading = document.getElementById("loading");

function showLoading(){
  loading.style.display="block";
}
function hideLoading(){
  loading.style.display="none";
}

window.showRegister = ()=>{
  loginForm.style.display="none";
  registerForm.style.display="block";
}

window.showLogin = ()=>{
  registerForm.style.display="none";
  loginForm.style.display="block";
}

window.register = async ()=>{
  showLoading();
  await createUserWithEmailAndPassword(auth, regEmail.value, regPassword.value);
  hideLoading();
}

window.login = async ()=>{
  showLoading();
  await signInWithEmailAndPassword(auth, email.value, password.value);
  hideLoading();
}

window.logout = ()=> signOut(auth);

onAuthStateChanged(auth,(user)=>{
  if(user){
    authCard.style.display="none";
    app.style.display="block";
  }else{
    authCard.style.display="block";
    app.style.display="none";
  }
});

window.createPost = async ()=>{
  await addDoc(collection(db,"posts"),{
    text: postText.value,
    time: serverTimestamp()
  });
  postText.value="";
}

onSnapshot(collection(db,"posts"),(snapshot)=>{
  posts.innerHTML="";
  snapshot.forEach(doc=>{
    posts.innerHTML += "<p>"+doc.data().text+"</p>";
  });
});

window.sendMessage = async ()=>{
  await addDoc(collection(db,"messages"),{
    text: chatText.value,
    time: serverTimestamp()
  });
  chatText.value="";
}

onSnapshot(collection(db,"messages"),(snapshot)=>{
  messages.innerHTML="";
  snapshot.forEach(doc=>{
    messages.innerHTML += "<p>"+doc.data().text+"</p>";
  });
});
