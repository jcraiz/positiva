window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)

}

window.Script2 = function()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxoxFu1mj0pQoBT-l5S0gMT_jm55mDjFBMAlmgCZBAfppp5xpZtncaj19s6OLljm1wW/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "Usuario" : player.GetVar("Usuario"),
 "Identificacion" : player.GetVar("Identificacion"),
 "Correo" : player.GetVar("Correo"),
 "SituacionLaboral" : player.GetVar("SituacionLaboral"),
 "Empresa" : player.GetVar("Empresa")
 }
}

window.Script3 = function()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzA_NjL6eSlCYGOnNiwTQ0ee7woTGYVn76FrxjGY23xELiikmK0TGZ00KzlEOtyoZW7/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "Usuario" : player.GetVar("Usuario"),
 "Identificacion" : player.GetVar("Identificacion"),
 "Correo" : player.GetVar("Correo"),
 "SituacionLaboral" : player.GetVar("SituacionLaboral"),
 "Empresa" : player.GetVar("EmpresaU")
 }
}

window.Script4 = function()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

window.Script5 = function()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

};
