// Importă SDK-ul Firebase (folosește versiunea 8.x.x pentru compatibilitate)
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Inițializează Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAY1Swai7Ag8g_ha2V85BMzGAenLM-PqHg",
  authDomain: "friendlychat-61629.firebaseapp.com",
  projectId: "friendlychat-61629",
  storageBucket: "friendlychat-61629.appspot.com",
  messagingSenderId: "774683896625",
  appId: "1:774683896625:web:fa4c89c414a3999166de10"
};

firebase.initializeApp(firebaseConfig);

// Configurează Firebase Messaging
const messaging = firebase.messaging();
