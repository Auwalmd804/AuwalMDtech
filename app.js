import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6Ce7cEDzcxOoEyh5Swl3wFx7ju-Up00k",
  authDomain: "auwalmdtech.firebaseapp.com",
  projectId: "auwalmdtech",
  storageBucket: "auwalmdtech.firebasestorage.app",
  messagingSenderId: "202329584080",
  appId: "1:202329584080:web:8f4a816bfca6c7834609d5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.register = function() {
  createUserWithEmailAndPassword(auth, email.value, password.value);
}

window.login = function() {
  signInWithEmailAndPassword(auth, email.value, password.value);
}

window.logout = function() {
  signOut(auth);
}

onAuthStateChanged(auth, (user) => {
  if(user){
    document.getElementById("auth").style.display="none";
    document.getElementById("app").style.display="block";
  } else {
    document.getElementById("auth").style.display="block";
    document.getElementById("app").style.display="none";
  }
});

window.createPost = async function(){
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

window.sendMessage = async function(){
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
