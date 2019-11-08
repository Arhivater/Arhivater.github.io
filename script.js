function test(quest, value) {
    if (quest == 4 || quest == 5 || quest == 6){
        if (array[quest] == undefined){
            array[quest] = String(value);
            console.log(value);
        }
        else{
            array[quest] += String(value);
            console.log(value);
        }
    }
    else{
        array[quest] = String(value);
        console.log(value);
    }
};

function checkArray(){
    for (let i = 0; i < array.length; i++){
        console.log((i+1) + ") " + array[i]);
    }
};

function checkTrue(){
    let t = 0;
    for (let i = 0; i < array.length; i++) {
        if ((i == 4 || i == 5 || i == 6) && (array[i] != undefined)){
            let arrayMore = array[i].split('');
            let arrayMoreTrue = trueArray[i].split('');
            let x = 0;
            for (let i = 0; i < arrayMore.length; i++) {
                for (let j = 0; j < arrayMoreTrue.length; j++) {
                    if (arrayMore[i] == arrayMoreTrue[j]){
                        x++;
                        break;
                    }
                }
            }
            if (x == trueArray[i].length) {
                t++;
            }
        }
        else {
            if (array[i] == trueArray[i]){
                t++;
            }
        }

    }
    document.getElementById('place-for-result').innerHTML='Ваш резульат: ' + t + ' правильных ответов';
};

function resetAnswer(quest) {
    array[quest] = undefined;
};
let array = new Array(10);
let trueArray = ['1', '4', '2', '3', '123', '14', '15', '6', 'Иллидану', 'Анубарак'];

function disable() {
document.getElementById("proverka").disabled = true;
document.getElementById("proverka").checked = false;
}
function enable() {
document.getElementById("proverka").disabled = false;
}
