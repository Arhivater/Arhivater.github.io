var kappa="";
        var JSON_var="";
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
              console.log(kappa);
              });
              fileReader.readAsText(kappa);
          } 
        }
        xhr.send();
    }
    var test = readJSON("./List.json");
    console.log(test);
    var parsed = JSON.parse(kappa.substring(0, kappa.length - 1));
	console.log(parsed.Paintings[1].Paintings_name);
/*

function Load () {
	var amount = Museum.Paintings.length;
	var shelf = amount/3;
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


*/

/*
	for (i in myObj.cars) {
	x += "<h2>" + myObj.cars[i].name + "</h2>";
	for (j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
	}
	}
	document.getElementById("demo").innerHTML = x;
	
	
*/



///////////////////////////////////////////////////////////////////////////////

/*
	
	var Main_section = document.getElementById('Main_section');						
	for(let i = 1; i <= 4 ; i++) {
	var section = document.createElement("div");
    section.classList.add("w3-row-padding");
	section.classList.add("w3-section");
	section.id=("Paintings_section"+'_'+i);
	Main_section.appendChild(section);	
	}
	
	console.log("123");
	
	
	for(let j = 1; j <= 4 ; j++) {
	for(let i = 1; i <= 3 ; i++) {
	var P_section = document.getElementById("Paintings_section"+'_'+j);
	var section1 = document.createElement("div");
	section1.classList.add("w3-third");
	section1.classList.add("w3-container");
	section1.classList.add("w3-margin-bottom");
	section1.id=("Painting"+'_'+j+'_'+i);
	P_section.appendChild(section1);		
	}
	}
	
	var temp = 0;
	for(let j = 1; j <= 4 ; j++) {
	for(let i = 1; i <= 3 ; i++) {
	var Painting_img = document.getElementById("Painting"+'_'+j+'_'+i);	
	var section2 = document.createElement("img");
	section2.classList.add("img_Paintings");
	section2.src = Paintings_img[temp];
	section2.setAttribute('alt', 'Painting_Image');
	Painting_img.appendChild(section2);	
	temp = temp + 1;
	}
	}
	
	for(let j = 1; j <= 4 ; j++) {
	for(let i = 1; i <= 3 ; i++) {
	var Painting_content = document.getElementById("Painting"+'_'+j+'_'+i);
	
	var section3 = document.createElement("div");
	section3.id=("Painting_content"+'_'+j+'_'+i);
	section3.classList.add("w3-container");
	section3.classList.add("w3-white");
	Painting_content.appendChild(section3);	
	
	var Content4 = document.getElementById("Painting_content"+'_'+j+'_'+i);
	var section4 = document.createElement("div");
	section4.id=("Content_media"+'_'+j+'_'+i);
	section4.classList.add("media");
	Content4.appendChild(section4);
	}
	}
	
	var temp2 = 0;
	var temp3 = 0;
	var temp4 = 0;
	var temp5 = 0;
	var temp6 = 0;
	for(let j = 1; j <= 4 ; j++) {
	for(let i = 1; i <= 3 ; i++) {
	var Media_left = document.getElementById("Content_media"+'_'+j+'_'+i);
	var section5 = document.createElement("div");
	section5.id=("media_left"+'_'+j+'_'+i);
	section5.classList.add("media-left");
	section5.setAttribute('style', 'padding-top: 35px;');
	Media_left.appendChild(section5);
	
	var P_Author = document.getElementById("media_left"+'_'+j+'_'+i);
	var section6 = document.createElement("img");
	section6.classList.add("Author");		
	section6.src = Authors_img[temp2];
	section6.setAttribute('alt', 'Author_Image');
	P_Author.appendChild(section6);
	temp2 = temp2 + 1;
	
	var Media_body = document.getElementById("Content_media"+'_'+j+'_'+i);
	var section7 = document.createElement("div");
	section7.id=("media-body"+'_'+j+'_'+i);
	section7.classList.add("media-body");
	section7.setAttribute('style', 'padding-top: 5px;');
	Media_body.appendChild(section7);
	
	var Media_body_content = document.getElementById("media-body"+'_'+j+'_'+i);
	
	var Content1 = document.createElement("h4");
	Content1.classList.add("media-heading");
	Content1 = document.createTextNode(Paintings_name[temp3]); 
	Media_body_content.appendChild(Content1);
	temp3 = temp3+1;
	
	var Content2 = document.createElement("h4");
	Content2.id=("Content2"+'_'+j+'_'+i);
	Media_body_content.appendChild(Content2);
	
	var Location_Content2_1 = document.getElementById("Content2"+'_'+j+'_'+i);
	var Content2_1 = document.createElement("small");
	Content2_1.id=("Content2_1"+'_'+j+'_'+i);
	Location_Content2_1.appendChild(Content2_1);
	
	var Location_Content2_2 = document.getElementById("Content2_1"+'_'+j+'_'+i);
	var Content2_2 = document.createElement("i");
	Content2_2 = document.createTextNode("Дата написания: "+Paintig_date[temp4]); 
	Location_Content2_2.appendChild(Content2_2);
	temp4 = temp4+1;
	
	var Content3 = document.createElement("p");
	Content3 = document.createTextNode("Автор: "+ Author_name[temp5]); 
	Media_body_content.appendChild(Content3);
	temp5 = temp5 + 1;
	
	var Content4 = document.createElement("p");
	Content4 = document.createTextNode(Paintig_description[temp6]); 
	Media_body_content.appendChild(Content4);
	temp6 = temp6 + 1;
	}
	}
	
	
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////