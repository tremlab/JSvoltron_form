//Final Javascript
//Renee Balmert

var divReg;
var divMain;
var inputElements;
var spanElements;


document.addEventListener
(									//ok to break this out by lines? yep!
	"DOMContentLoaded", function()
		{
		var divReg = document.getElementById("divRegistered"); //check syntax - WORKS!
		var divMain = document.getElementById("divMain");

		divMain.addEventListener("focus", fHandleEnter, true); //check syntax quotes for true? NOPE - works!
		divMain.addEventListener("blur", fHandleExit, true);

		fProcessForm(); 
	
		var inputElements = document.querySelectorAll("#frmRegister input[type='text'], input[type='password']");	//from Michael! :D
		var spanElements =  document.querySelectorAll("#frmRegister span");	
		inputElements[2].addEventListener("blur", function() {fCompareInput(inputElements[1].value, inputElements[2].value, spanElements[2]);});//TEST!!? 
		inputElements[4].addEventListener("blur", function() {fCompareInput(inputElements[3].value, inputElements[4].value, spanElements[4]);});
		
		var btnReg = document.getElementById("btnRegister");
		btnReg.addEventListener("click", fRobotLion, true);
		}
); 

function fHandleEnter(fcs)
	{
	fcs.target.style.backgroundColor = "yellow";  //syntax? quotes - yes! target? i don't get it...BUT IT WORKS!!
	};

function fHandleExit(blr)
	{
	blr.target.style.backgroundColor = "";	//
	};

function fProcessForm()
	{
	var x = location.search;
	var strQueryString = x.replace(/^.*\=/,"");		//from HW4 :D
	if (strQueryString.length > 0)
		{
		var login = strQueryString;
		var divReg = document.getElementById("divRegistered");	//argh! doesn't work unless I declare divReg again? undefined??!
		divReg.innerHTML = "Thank you, " + login + ", you are now registered with Voltron.";	//booyah - nailed syntax for once!
		$("#divRegistered").fadeIn(700);		//my first jQuery! :D couldn't get #divReg to work..? :(
		$("#divMain").hide();			//hide form... nailed it! jQuery Goddess :D
		}					//no semi colon!!!!! seriously!!! >:(
/*	else				//don't need an else, right? the page just stays as it was.
		{
			?? status quo A-OK?
		}

*/
	};


function fCompareInput(value1, value2, display)		//arguments OK?
	{
	if (value1.length==0 || value2.length==0)	//if blank
		{
		display.innerHTML = "";
		display.target.style.backgroundColor = ""; //grr!! says target undefined, but above line works!!		
		}	
	else if (value1==value2)			//if equal
		{
		display.innerHTML = "entries match :)";	//working first try!! holy cow! that %^&^*%* array works!!
		display.className = 'good';	//trying a work-around... voila!
		}
	else						//if different
		{
		display.innerHTML = "entries don't match :(";
		display.className = 'badboy';		//grr!!! one stupid bracket cost an eternity of troubleshooting >:(
		}
	
	};

	function fRobotLion() 
	{
	//var RL = document.getElementById("robotLion");
	//RL.innerHTML = "<img src = 'voltron.jpg'>";
	//alert("robots?"); testing - this works...why not fadein?????
	//commenting out for now :(  $("#robotLion").fadeIn(4000);	//testing why is fade in to working??? works up top, but not here. but I know the button trigger works...?
	};
		
/*	this was goign to be a goofy test for whether or not there is a robot in your passowrd, and a different animation depending on the result.
	{
	var liroRegExp = new RegExp (robot|lion); 	//syntax?
	var pword = inputElements[1].value;
	var s = document.getElementById("robotLion");	//helps if you save the HTML changes!

	if (liroRegExp.test(pword))	//syntax?
		{
		s.innerHTML = "<img src = 'voltron.jpg'>";
		}
	else
		{	
		alert ("Your password doesn't contain any lions or robots. Sad!");
		s.innerHTML = "<img src = 'sadrobot.jpg'>";
		}
	};
*/

			