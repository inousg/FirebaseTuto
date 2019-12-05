let config = {
  apiKey: "AIzaSyDKYKl6WSDXMFEkY9AZrYeQUBBIrxH1oU0",
  authDomain: "naisoncombi.firebaseapp.com",
  databaseURL: "https://naisoncombi.firebaseio.com",
  projectId: "naisoncombi",
  storageBucket: "naisoncombi.appspot.com",
  messagingSenderId: "289480175122",
  appId: "1:289480175122:web:7abbe72f1d8489cd3632cb"
};

// Initialize Firebase
firebase.initializeApp(config);

let db = firebase.database();

let tv = db.ref("tv-show");

let billet = {
  "titre": "retard",
  "contenu": "déso",
  "auteur": "ines",
  "commentaires": [
      "lasagna hmmmmm"
  ]
};

$.getJSON( billet, function( data ){
  tv.set( json );
});

/*
function createTvShow(){
 
  if (document.tvShowForm.title.value === '' && 
  document.tvShowForm.episode.value === '' && 
  document.tvShowForm.season.value === '' ) {
        return false;
  }
  
  let title = document.tvShowForm.title.value;
  let episode = document.tvShowForm.episode.value;
  let season = document.tvShowForm.season.value;
  let comment = document.tvShowForm.comment.value;

  writeTVShowData(title, title, episode, season, comment);
  
}

function writeTVShowData(showId, title, season, episode, comment) {
  firebase.db().ref('tv-shows/' + showId).set({
    showTitle: title,
    season: season,
    episode: episode,
    comment: comment
  });
}
*/

  