function connectFirebase() {
    var firebaseConfig = {
        apiKey: "AIzaSyCZ401Mf4SoCW7uVr-42bPzI_O5EStFIAg",
        authDomain: "loopigames-1c4a2.firebaseapp.com",
        projectId: "loopigames-1c4a2",
        storageBucket: "loopigames-1c4a2.appspot.com",
        messagingSenderId: "1051784016063",
        appId: "1:1051784016063:web:1b11a6fcae08764c91d60a",
        measurementId: "G-CGRV3KHM2K"
    };

    firebase.initializeApp(firebaseConfig);

}

connectFirebase();  // executa config do firebase

