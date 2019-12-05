(function(){

    /* le code du tuto google semble être périmé => cf tous les comms récent */

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDKYKl6WSDXMFEkY9AZrYeQUBBIrxH1oU0",
        authDomain: "naisoncombi.firebaseapp.com",
        databaseURL: "https://naisoncombi.firebaseio.com",
        projectId: "naisoncombi",
        storageBucket: "naisoncombi.appspot.com",
        messagingSenderId: "289480175122",
        appId: "1:289480175122:web:7abbe72f1d8489cd3632cb"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //get elements
    const preObject = document.getElementById('object');

    //create references
    const dbRefObject = firebase.database().ref().child('object');

    //sync object changes
    dbRefObject.on('value', snap => {
        preObject.innerText =JSON.stringify(snap.val(), null, 3);
    });

}());
