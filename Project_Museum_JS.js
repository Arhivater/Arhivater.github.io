let Paintings_img = ["https://upload.wikimedia.org/wikipedia/commons/8/83/Leonardo_da_Vinci_-_Portrait_of_a_Musician.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg","https://sun9-58.userapi.com/c845416/v845416689/826f4/8R0ZQXbkNXQ.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/470px-The_Scream.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/God2-Sistine_Chapel.png/800px-God2-Sistine_Chapel.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Shishkin%2C_Ivan_-_Morning_in_a_Pine_Forest.jpg/800px-Shishkin%2C_Ivan_-_Morning_in_a_Pine_Forest.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg/800px-Hovhannes_Aivazovsky_-_The_Ninth_Wave_-_Google_Art_Project.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg/800px-Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Apotheosis.jpg/800px-Apotheosis.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_William_Waterhouse_-_Fair_Rosamund.jpg/444px-John_William_Waterhouse_-_Fair_Rosamund.jpg","http://ayvazovskiy.su/wp-content/uploads/2017/02/ledgor.jpg"];					 

let Authors_img = ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/150px-Leonardo_self.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/150px-Leonardo_self.jpg","https://upload.wikimedia.org/wikipedia/commons/1/1f/Thomas_Cole.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/VincentVanGoghFoto.jpg/150px-VincentVanGoghFoto.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Edvard_Munch_1912.jpg/200px-Edvard_Munch_1912.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg/518px-Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ivan_Shishkin_restoration.jpg/250px-Ivan_Shishkin_restoration.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Aivazovsky_-_Self-portrait_1874.jpg/546px-Aivazovsky_-_Self-portrait_1874.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Brjullov.jpg/512px-Brjullov.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Vasili_Vereshchagin.jpg/432px-Vasili_Vereshchagin.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/John_William_Waterhouse_001.jpg/376px-John_William_Waterhouse_001.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Brjullov.jpg/512px-Brjullov.jpg"];

let Paintings_name = [	"«Портрет музыканта»",
						"«Портре́т госпожи́ Ли́зы дель Джоко́ндо»",
						"«Крушение»",
						"«Звёздная Ночь»",
						"«Крик»",
						"«Сотворение Адама»",
						"«Утро в сосновом лесу»",
						"«Девятый вал»",
						"«После́дний день Помпе́и»",
						"«Апофеоз войны»",
						"«Прекрасная Розамунда»",
						"«Ледяные горы»"];

let Paintig_date = ["1490-2","варьируется между 1503 и 1505 годами","1836 год","1889 год","в промежутке между 1893 и 1910 годами","около 1511 года","1889 год","1850 год","1833 год","1871 год","около 1150 года","1870 год"];

let Author_name = ["Леона́рдо ди сер Пье́ро да Ви́нчи","Леона́рдо ди сер Пье́ро да Ви́нчи","Томас Коул","Винсент ван Гог","Эдвард Мунк","Микела́нджело Буонарро́ти","И. И. Шишкин, К. А. Савицкий","Айвазовский Иван Константинович","Брюллов, Карл Павлович","Василий Верещагин","Джон Уильям Уотерхаус","Айвазовский Иван Константинович"];

let Paintig_description = ["Авторство Леонардо да Винчи оспаривается редко, хотя и существует предположение, что автором портрета является не Леонардо, а Антонелло да Мессина.","Одно из самых известных произведений живописи. Считается, что на картине изображена Лиза Герардини, супруга флорентийского торговца шёлком Франческо дель Джокондо.","Одно из картин входящих в серию из 5 картин Томаса Коула под названием <<Путь Империи>>.","Представляет вид из восточного окна спальни Ван Гога в Сен-Реми-де-Прованс на предрассветное небо и вымышленную деревню.","Cерия картин норвежского художника-экспрессиониста Эдварда Мунка. На них изображена кричащая в отчаянии человеческая фигура на фоне кроваво-красного неба и крайне обобщённого пейзажного фона.","Фреска Микеланджело, является четвёртой из девяти центральных композиций потолка Сикстинской капеллы, посвящённых девяти сюжетам книги Бытия. Фреска иллюстрирует эпизод: 'И сотворил Бог человека по образу Своему'","Савицкий написал медведей. но коллекционер П. М. Третьяков стёр его подпись, так что автором картины часто указывается один Шишкин.Картина пользуется популярностью благодаря композиционному включению в пейзажное полотно элементов анималистической сюжетности. Работа детально передает состояние природы, увиденное художником на острове Городомля. Показан не глухой дремучий лес, а солнечный свет, пробивающийся сквозь колонны высоких деревьев. Чувствуют приближение утра резвящиеся медвежата.","Живописец изображает море после очень сильного ночного шторма и людей, потерпевших кораблекрушение. Лучи солнца освещают громадные волны. Самая большая из них — девятый вал — готова обрушиться на людей, пытающихся спастись на обломках мачты.","На картине изображены события в Помпеях во время катастрофического извержения Везувия, которое произошло в 79 году нашей эры.","На раме сделана надпись: «Посвящается всем великим завоевателям — прошедшим, настоящим и будущим». Изначально полотно называлось «Торжество Тамерлана». Замысел был связан с Тамерланом, войска которого оставляли за собой такие пирамиды черепов, однако картина не носит конкретно-исторический характер.","На картине изображена дочь Уолтера Фиц-Ричарда де Клиффорд и Маргариты де Тосни, любовница короля Англии Генриха II Плантагенета. За свою красоту получила прозвища «Прекрасная Розамунда»","Полотно Айвазовского Ледяные горы является известным на весь мир, автор написал, чтобы увековечить великое открытие отечественных мореходов, нашедших континент на самом юге Земли."];

//////////////////////////////////////////////////////////////

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




// P_section.insertAdjacentHTML("beforebegin", "<div class='media-left' style='padding-top: 35px;'>");

// P_section.insertAdjacentHTML("beforebegin", "<div class='media-body' style='padding-top: 5px;'>");



/*
	
let i = 4; // i = 4 - это кол-во секций для картин. кол-во секций = кол-во картин / 3
while (i) {
	P_section.insertAdjacentHTML("beforebegin", "<div class='w3-row-padding w3-section'>");  
		let j = 3; // const x3
		while (j) { // когда i будет равно 0, условие станет ложным, и цикл остановится
			P_section.insertAdjacentHTML("beforebegin", "<div class='w3-third w3-container w3-margin-bottom'>");
			
				P_section.insertAdjacentHTML("beforebegin", "<img class='img_Paintings' src='"+ Paintings_img[1] +"' alt='Painting_Image'>");
				
				
				
				
				P_section.insertAdjacentHTML("beforebegin", "<div class='w3-container w3-white'>");
				
				
				
					
					P_section.insertAdjacentHTML("beforebegin", "<div class='media'>");
					
					
						
						P_section.insertAdjacentHTML("beforebegin", "<div class='media-left' style='padding-top: 35px;'>");
							P_section.insertAdjacentHTML("beforebegin", "<img class='Author' src='"+ Authors_img[1] +"' alt='Author_Image'>");
						P_section.insertAdjacentHTML("beforebegin", "</div>");
						
						P_section.insertAdjacentHTML("beforebegin", "<div class='media-body' style='padding-top: 5px;'>");
							P_section.insertAdjacentHTML("beforebegin", "<h4 class='media-heading'>"+ Paintings_name[1] +"</h4>");
							P_section.insertAdjacentHTML("beforebegin", "<h4><small><i>Дата написания:"+ Paintig_date[1] +"</i></small></h4>");
							P_section.insertAdjacentHTML("beforebegin", "<p>Автор: "+ Author_name[1] +"</p>");
							P_section.insertAdjacentHTML("beforebegin", "<p>"+ Paintig_description[1] +"</p>");
						
						P_section.insertAdjacentHTML("beforebegin", "</div>");
						
						
						
						
					P_section.insertAdjacentHTML("beforebegin", "</div>");
					
					
					
				
				P_section.insertAdjacentHTML("beforebegin", "</div>");
				
				
				
				
				
				
			P_section.insertAdjacentHTML("beforebegin", "</div>");
			j--;
		}
	P_section.insertAdjacentHTML("beforebegin", "</div>");
	i--;
}
*/

/*
	P_section.insertAdjacentHTML("beforebegin", "<div id='Paintings_section' class='w3-row-padding w3-section'>");  
		P_section.insertAdjacentHTML("beforebegin", "<div class='w3-third w3-container w3-margin-bottom'>");
			P_section.insertAdjacentHTML("beforebegin", "<img class='img_Paintings' src='"+ Paintings_img[1] +"' alt='Painting_Image'>");
			
			P_section.insertAdjacentHTML("beforebegin", "<div class='w3-container w3-white'>");
				
				P_section.insertAdjacentHTML("beforebegin", "<div class='media'>");
					
					P_section.insertAdjacentHTML("beforebegin", "<div class='media-left' style='padding-top: 35px;'>");
						P_section.insertAdjacentHTML("beforebegin", "<img class='Author' src='"+ Authors_img[1] +"' alt='Author_Image'>");
					P_section.insertAdjacentHTML("beforebegin", "</div>");
					P_section.insertAdjacentHTML("beforebegin", "<div class='media-body' style='padding-top: 5px;'>");
						P_section.insertAdjacentHTML("beforebegin", "<h4 class='media-heading'>"+ Paintings_name[1] +"</h4>");
						P_section.insertAdjacentHTML("beforebegin", "<h4><small><i>Дата написания:"+ Paintig_date[1] +"</i></small></h4>");
						P_section.insertAdjacentHTML("beforebegin", "<p>Автор: "+ Author_name[1] +"</p>");
						P_section.insertAdjacentHTML("beforebegin", "<p>"+ Paintig_description[1] +"</p>");
					P_section.insertAdjacentHTML("beforebegin", "</div>");
					
				P_section.insertAdjacentHTML("beforebegin", "</div>");
				
			P_section.insertAdjacentHTML("beforebegin", "</div>");
			
		P_section.insertAdjacentHTML("beforebegin", "</div>");
	P_section.insertAdjacentHTML("beforebegin", "</div>");
	


*/

/*
	<div class="w3-row-padding w3-section">
		
	    <div class="w3-third w3-container w3-margin-bottom">
			<img class="img_Paintings"  src="https://upload.wikimedia.org/wikipedia/commons/8/83/Leonardo_da_Vinci_-_Portrait_of_a_Musician.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
			<div class="w3-container w3-white">
				<div class="media">
    
					<div class="media-left" style="padding-top: 35px;">
						<img class="Author" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/150px-Leonardo_self.jpg" class="media-object" style="width:45px">
					</div>
    
					<div class="media-body" style="padding-top: 5px;">
						<h4 class="media-heading">«Портрет музыканта»</h4>
						<h4> <small><i> Дата написания 1490-2</i></small></h4>
						<p>Автор: Леона́рдо ди сер Пье́ро да Ви́нчи</p>
						<p>Авторство Леонардо да Винчи оспаривается редко, хотя и существует предположение, что автором портрета является не Леонардо, а Антонелло да Мессина.</p>
					</div>
					
				</div>
			</div>
		</div>
	
		<div class="w3-third w3-container w3-margin-bottom">
			<img class="img_Paintings"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
			<div class="w3-container w3-white">
				<div class="media">
    
					<div class="media-left" style="padding-top: 35px;">
						<img class="Author" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/150px-Leonardo_self.jpg" class="media-object" >
					</div>
    
					<div class="media-body" style="padding-top: 5px;">
						<h4 class="media-heading">«Портре́т госпожи́ Ли́зы дель Джоко́ндо»</h4>
						<h4> <small><i>Дата написания варьируется между 1503 и 1505 годами</i></small></h4>
						<p>Автор: Леона́рдо ди сер Пье́ро да Ви́нчи</p>
						<p>Одно из самых известных произведений живописи. Считается, что на картине изображена Лиза Герардини, супруга флорентийского торговца шёлком Франческо дель Джокондо.</p>
					</div>
	  
				</div>
			</div>
		</div>
	
		<div class="w3-third w3-container w3-margin-bottom">
			<img class="img_Paintings"  src="https://sun9-58.userapi.com/c845416/v845416689/826f4/8R0ZQXbkNXQ.jpg" alt="Norway" style="width:100%" class="w3-hover-opacity">
			<div class="w3-container w3-white">
				<div class="media">
    
					<div class="media-left" style="padding-top: 35px;">
						<img class="Author" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Thomas_Cole.jpg">
					</div>
    
					<div class="media-body" style="padding-top: 5px;">
						<h4 class="media-heading">«Крушение»</h4>
						<h4> <small><i>Дата написания 1836 год</i></small></h4>
						<p>Автор: Томас Коул</p>
						<p>Одно из картин входящих в серию из 5 картин Томаса Коула под названием <<Путь Империи>>.</p>
					</div>
	  
				</div>
			</div>
		</div>
	
	</div>



*/




