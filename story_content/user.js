window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();
var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();
if (h>12){
   h = h-12};
var newh = (720/(12/h)) + Math.floor(m);
if (newh>720){
   newh = newh-720};

player.SetVar("Sce",s);
player.SetVar("Min",m);
player.SetVar("Hov",newh);
}

window.Script2 = function()
{
  var player = GetPlayer();
var d = new Date( Date.now() );
var Am_Pm = "AM";
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();
if(h>=12){
   Am_Pm = "PM";
}
	if(h>12){
		h = h - 12;
}

player.SetVar("Sce_1",s);
player.SetVar("Min_1",m);
player.SetVar("Hov_1",h);
player.SetVar("am_pm",Am_Pm);
}

};
