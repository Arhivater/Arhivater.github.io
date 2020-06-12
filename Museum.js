var kappa="";
var JSON_var="";
var Museum="";
function readJSON(path) {
var xhr = new XMLHttpRequest();
xhr.open('GET', path, true);
xhr.responseType = 'blob';
xhr.onload = function(e) { 
          if (this.status == 200) {
              kappa = new File([this.response], 'temp');
              var fileReader = new FileReader();
              fileReader.addEventListener('load', function(){
                   //do stuff with fileReader.result
              kappa=fileReader.result;
              JSON_var = JSON.stringify(kappa);
              Museum = JSON.parse(kappa.substring(0, kappa.length - 1));
              });
              fileReader.readAsText(kappa);
          } 
        }
        xhr.send();
    }
readJSON("./List.json");

function Load () {
	var amount = Museum.Paintings.length;
	var shelf = amount/3;
//	Math.ceil(shelf);
	var k = 0;
	var Main_section = document.getElementById('Main_section');	
	
	for(let g = 1; g <= shelf ; g++) {
		var section = document.createElement("div");
		section.classList.add("w3-row-padding");
		section.classList.add("w3-section");
		section.id=("Paintings_section"+'_'+g);
		Main_section.appendChild(section);	
		
		for(var i = 0; i < 3; i++)
		{
			var ins = "";
			ins += 		  
			'<div class="w3-third w3-container w3-margin-bottom">'+
			'<img class="img_Paintings" src="'+Museum.Paintings[k].Paintings_img+'" alt="Norway" style="width:100%" class="w3-hover-opacity">'+
			'<div class="w3-container w3-white">' +
	   		'<div class="media">' +
			'<div class="media-left" style="padding-top: 35px;">'+
			'<img class="Author" src="'+Museum.Paintings[k].Authors_img+'" class="media-object">'+
			'</div>'+
			'<div class="media-body" style="padding-top: 5px;">'+
			'<h4 class="media-heading">'+Museum.Paintings[k].Paintings_name+'</h4>'+
			'<h4><small><i>'+Museum.Paintings[k].Paintig_date+'</i></small></h4>'+
			'<p>'+Museum.Paintings[k].Author_name+'</p>'+
			'<p>'+Museum.Paintings[k].Paintig_description+'</p>'
			'</div>'+
          	'</div>'+
			'</div>'+
			'</div>';
			k+=1;
			
			var id_section = "Paintings_section"+'_'+g
			document.getElementById(id_section).innerHTML += ins;
		}
	}
}


function showHint(str) {
	var name = "";
	if (str.length == 0) {
		document.getElementById("txtHint").innerHTML = "";
		return;
		} else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var key = this.responseText;
				if (key == "true"){
					alert("Добро пожаловать!");
					document.getElementById("POSTparam1").remove();
					document.getElementById("POSTparam2").remove();
					document.getElementById("password").remove();
					document.getElementById("Login1").remove();
					document.getElementById("lg").remove();
					var base = document.getElementById("Login_Museum");	
					var Log = document.createElement("p");
					Log.id=("Logo_name");
					base.appendChild(Log);
					document.getElementById("Logo_name").innerHTML="Логин: " + name;
					var Logout = document.createElement("input");
					Logout.setAttribute('type', 'button');
					Logout.id=("Logout_Museum");
					Logout.setAttribute('alt', 'Painting_Image');
					Logout.setAttribute('value', 'Logout');
					Logout.setAttribute('onclick', 'Logout()');
					base.appendChild(Logout);
					} else {
					document.getElementById("POSTparam1").value="";
					document.getElementById("POSTparam2").value = "";
					alert("Введенные данные логина или пароля были не верны");				
				}
			}
		};
		xmlhttp.open("POST", "http://localhost:8888", true);
		var send ="";
		name = document.getElementById("POSTparam1").value;
		send = document.getElementById("POSTparam1").value;
		send += "_"+document.getElementById("POSTparam2").value
		xmlhttp.send(send);
	}
}


function Logout() {
	document.getElementById("Logout_Museum").remove();
	document.getElementById("Logo_name").remove();
	var base = document.getElementById("Login_Museum");
	var plg = document.createElement("p");
	plg.id=("lg");
	base.appendChild(plg);
	document.getElementById("lg").innerHTML="Логин";
	var inp1 = document.createElement("input");
	inp1.setAttribute('type', 'text');
	inp1.setAttribute('value', '');
	inp1.id=("POSTparam1");
	inp1.setAttribute('style', 'width: 149px;');
	base.appendChild(inp1);
	var pps = document.createElement("p");
	pps.id=("password");
	base.appendChild(pps);
	document.getElementById("password").innerHTML="Пароль";
	var inp2 = document.createElement("input");
	inp2.setAttribute('type', 'password');
	inp2.setAttribute('value', '');
	inp2.id=("POSTparam2");
	inp2.setAttribute('style', 'width: 149px;');
	base.appendChild(inp2);
	var plg2 = document.createElement("p");
	plg2.id=("Login1");
	plg2.setAttribute('class', 'fig');
	plg2.setAttribute('style', 'padding-top: 10px;');
	base.appendChild(plg2);
	var base2 = document.getElementById("Login1");
	var inp3 = document.createElement("input");
	inp3.setAttribute('type', 'button');
	inp3.setAttribute('value', '');
	inp3.id=("Login2");
	inp3.setAttribute('value', 'Login');
	inp3.setAttribute('onclick', 'showHint(this.value)');
	base2.appendChild(inp3);
}