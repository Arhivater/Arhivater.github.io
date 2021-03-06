var kappa="";
var JSON_var="";
var Museum="";
var path="./List.json";
var ref = 0;

function readJSON(path) {
var xhr = new XMLHttpRequest();
xhr.open('GET', path, true);
xhr.responseType = 'blob';
xhr.onload = function(e) { 
          if (this.status == 200) {
              kappa = new File([this.response], 'temp');
              var fileReader = new FileReader();
              fileReader.addEventListener('load', function(){
              kappa=fileReader.result;
              JSON_var = JSON.stringify(kappa);
              Museum = JSON.parse(kappa.substring(0, kappa.length - 1));
              Load();
              });
              fileReader.readAsText(kappa);
          } 
        }
        xhr.send();
}

readJSON(path);


function Load() {
	Clear_Main_section = document.getElementById('Main_section');
	Clear_Main_section.innerHTML = '';
	var amount = Museum.Paintings.length;
	var shelf = Math.ceil(amount/3);
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

			if (k < amount){
			k+=1;
			}

			var id_section = "Paintings_section"+'_'+g
			document.getElementById(id_section).innerHTML += ins;
		}
	}
}

function Login(str) {
	var name = "";
	if (str.length == 0) {
		return;
		} else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var key = this.responseText;
				if (key == "true"){
					alert("Добро пожаловать " + name + " !");
					var base = document.getElementById("Login_Museum");
					base.innerHTML = '';	
					var Log = document.createElement("p");
					Log.id=("Logo_name");
					base.appendChild(Log);
					document.getElementById("Logo_name").innerHTML="Пользователь: " + name;

					var dlT = document.createElement("p");
					dlT.id = ("del_txt");
					base.appendChild(dlT);
					document.getElementById("del_txt").innerText="Удалить картину";
					var setd = document.createElement("select");
					setd.setAttribute('name', '');
					setd.id=("select_to_delet");
					setd.setAttribute('class', 'style11 style12');
					base.appendChild(setd);
					var id_setd = document.getElementById('select_to_delet');
					id_setd.innerHTML = '';
  					item = document.createElement('option');
					for (var i = 0; i < Museum.Paintings.length; i++) {
  						item.innerHTML = Museum.Paintings[i].Paintings_name;
  						item.setAttribute('value', i);
  						id_setd.appendChild(item.cloneNode(true));
					}

					var confdel = document.createElement("input");
					confdel.setAttribute('type', 'button');
					confdel.id=("confirm_deletion");
					confdel.setAttribute('value', 'Сonfirm Deletion');
					confdel.setAttribute('class', 'style11');
					confdel.setAttribute('onclick', 'Delet_element()');
					base.appendChild(confdel);

					var addp1 = document.createElement("p");
					base.appendChild(addp1);

					var addlT = document.createElement("p");
					addlT.id = ("add_txt");
					base.appendChild(addlT);
					document.getElementById("add_txt").innerText="Добавить картину";

					var addlT0 = document.createElement("p");
					addlT0.id = ("add_txt0");
					base.appendChild(addlT0);
					document.getElementById("add_txt0").innerText="ссылка на картину";

					var inp0 = document.createElement("input");
					inp0.setAttribute('type', 'text');
					inp0.setAttribute('value', '');
					inp0.id=("id_p_img_src");
					inp0.setAttribute('class', 'style8');
					base.appendChild(inp0);

					var addlT9 = document.createElement("p");
					addlT9.id = ("add_txt9");
					base.appendChild(addlT9);
					document.getElementById("add_txt9").innerText="ссылка на изображение автора";

					var inp9 = document.createElement("input");
					inp9.setAttribute('type', 'text');
					inp9.setAttribute('value', '');
					inp9.id=("id_aut_img_src");
					inp9.setAttribute('class', 'style8');
					base.appendChild(inp9);

					var addlT8 = document.createElement("p");
					addlT8.id = ("add_txt8");
					base.appendChild(addlT8);
					document.getElementById("add_txt8").innerText="Название картины";

					var inp8 = document.createElement("input");
					inp8.setAttribute('type', 'text');
					inp8.setAttribute('value', '');
					inp8.id=("id_p_n");
					inp8.setAttribute('class', 'style8');
					base.appendChild(inp8);

					var addlT7 = document.createElement("p");
					addlT7.id = ("add_txt7");
					base.appendChild(addlT7);
					document.getElementById("add_txt7").innerText="Дата написания";

					var inp7 = document.createElement("input");
					inp7.setAttribute('type', 'text');
					inp7.setAttribute('value', '');
					inp7.id=("id_p_d");
					inp7.setAttribute('class', 'style8');
					base.appendChild(inp7);

					var addlT6 = document.createElement("p");
					addlT6.id = ("add_txt6");
					base.appendChild(addlT6);
					document.getElementById("add_txt6").innerText="Имя Автора/Авторов";

					var inp6 = document.createElement("input");
					inp6.setAttribute('type', 'text');
					inp6.setAttribute('value', '');
					inp6.id=("id_aut_n");
					inp6.setAttribute('class', 'style8 ');
					base.appendChild(inp6);

					var addlT5 = document.createElement("p");
					addlT5.id = ("add_txt5");
					base.appendChild(addlT5);
					document.getElementById("add_txt5").innerText="Описание картины";

					var inp5 = document.createElement("input");
					inp5.setAttribute('type', 'text');
					inp5.setAttribute('value', '');
					inp5.id=("id_dis");
					inp5.setAttribute('class', 'style8 ');
					base.appendChild(inp5);

					var Logout = document.createElement("input");
					Logout.setAttribute('type', 'button');
					Logout.id=("Logout_Museum");
					Logout.setAttribute('value', 'Добавить');
					Logout.setAttribute('class', 'style11');
					Logout.setAttribute('onclick', 'Add_element()');
					base.appendChild(Logout);

					var addp2 = document.createElement("p");
					base.appendChild(addp2);

					var Logout = document.createElement("input");
					Logout.setAttribute('type', 'button');
					Logout.id=("Logout_Museum");
					Logout.setAttribute('value', 'Logout');
					Logout.setAttribute('class', 'style11');
					Logout.setAttribute('onclick', 'Logout()');
					base.appendChild(Logout);


					} else {
					document.getElementById("POSTparam1").value="";
					document.getElementById("POSTparam2").value = "";
					alert("Введенные данные логина или пароля были не верны");				
				}
			}
		};
		xmlhttp.open("POST", "http://localhost:1111", true);
		var send ="";
		name = document.getElementById("POSTparam1").value;
		send = document.getElementById("POSTparam1").value;
		send += "_"+document.getElementById("POSTparam2").value
		xmlhttp.send(send);
	}
}


function Delet_element() {
	var select = document.getElementById("select_to_delet");
    var del_element = select.value;
	Museum.Paintings.splice(del_element, 1);

	var id_setd = document.getElementById('select_to_delet');
	id_setd.innerHTML = '';
  	item = document.createElement('option');
	for (var i = 0; i < Museum.Paintings.length; i++) {
  		item.innerHTML = Museum.Paintings[i].Paintings_name;
  		item.setAttribute('value', i);
  		id_setd.appendChild(item.cloneNode(true));
	}

	Load();	
}

function Add_element() {
	
	var p_img_src = document.getElementById("id_p_img_src").value;
	var aut_img_src = document.getElementById("id_aut_img_src").value;
	var p_n = document.getElementById("id_p_n").value;
	var p_d = document.getElementById("id_p_d").value;
	var aut_n = document.getElementById("id_aut_n").value;
	var dis = document.getElementById("id_dis").value;

	var add = {
		"Paintings_img": ""+p_img_src+"",
		"Authors_img": ""+aut_img_src+"",
		"Paintings_name": ""+p_n+"",
		"Paintig_date": ""+p_d+"",
		"Author_name": ""+aut_n+"",
		"Paintig_description": ""+dis+""};

    Museum.Paintings.push(add);

	var id_setd = document.getElementById('select_to_delet');
	id_setd.innerHTML = '';
  	item = document.createElement('option');
	for (var i = 0; i < Museum.Paintings.length; i++) {
  		item.innerHTML = Museum.Paintings[i].Paintings_name;
  		item.setAttribute('value', i);
  		id_setd.appendChild(item.cloneNode(true));
	}
	Load();	
}

function Logout() {
	var base = document.getElementById("Login_Museum");
	base.innerHTML = '';
	var plg = document.createElement("p");
	plg.id=("lg");
	base.appendChild(plg);
	document.getElementById("lg").innerHTML="Логин";
	var inp1 = document.createElement("input");
	inp1.setAttribute('type', 'text');
	inp1.setAttribute('value', '');
	inp1.id=("POSTparam1");
	inp1.setAttribute('class', 'style8');
	base.appendChild(inp1);
	var pps = document.createElement("p");
	pps.id=("password");
	base.appendChild(pps);
	document.getElementById("password").innerHTML="Пароль";
	var inp2 = document.createElement("input");
	inp2.setAttribute('type', 'password');
	inp2.setAttribute('value', '');
	inp2.id=("POSTparam2");
	inp2.setAttribute('class', 'style8');
	base.appendChild(inp2);
	var plg2 = document.createElement("p");
	plg2.id=("Login1");
	plg2.setAttribute('class', 'fig');
	plg2.setAttribute('class', 'style9');
	base.appendChild(plg2);
	var base2 = document.getElementById("Login1");
	var inp3 = document.createElement("input");
	inp3.setAttribute('type', 'button');
	inp3.setAttribute('value', '');
	inp3.id=("Login2");
	inp3.setAttribute('value', 'Login');
	inp3.setAttribute('class', 'style11');
	inp3.setAttribute('onclick', 'Login(this.value)');
	base2.appendChild(inp3);
}

function Adver () {
for (var l = 0; l<4; l++) {
$('#Advertising').after(function() {
var vst = "<a href='https://georgevorob.github.io/index.html'>"+
	"<a href='https://georgevorob.github.io/index.html'>"+
	"<p class='text-align: center;'>"+
	"<img src='Advertising.png' alt='Здесь могла быть ваша реклама...'>"+
	"</p>"+
	"</a>"+
	"<br>";
  return vst;
});
}
}