// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();
console.log(firebase);

var ref = database.ref('AxData');
ref.on('value', gotData, errData);

function gotData(data) {
  console.log(data);
}
function errDate(error) {
  console.log('Error!!');
  console.log(error);
}