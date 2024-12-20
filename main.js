let i=1;
let input1;
let input2;
let input3;
let input4;
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr=[];
    function getRandomInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
        while (arr.length < 4) {
let number = digits[getRandomInt(0, 9)];
        if (!arr.includes(number)) {
            arr.push(number);
        }
    }
console.log(arr);
    function StartGame()
    {
    input1 = Number(document.getElementById('Number1').value);
    if (input1 < 0 || input1 > 9) {
        alert('Первое число должно быть от 0 до 9');
    }
    input2 = Number(document.getElementById('Number2').value);
    if (input2 < 0 || input2 > 9) {
        alert('Второе число должно быть от 0 до 9');
    }
    input3 = Number(document.getElementById('Number3').value);
    if (input3 < 0 || input3 > 9) {
        alert('Третье число должно быть от 0 до 9');
    }
    input4 = Number(document.getElementById('Number4').value);
    if (input4 < 0 || input4 > 9) {
        alert('Четвертое число должно быть от 0 до 9');
    }
    if (input1 == input2 || input2 == input3 || input3 == input4 || input4 == input1 || input2 == input3 || input1 == input3) {
        alert('Вы ввели два одинаковых числа');
    }
let array = [input1,input2,input3,input4];
console.log(array);
let cows=0;
let bulls=0;
  for (let i = 0; i < 4; i++) {
      if (arr[i] ===array[i]) {
          bulls++;
      } else if (array[i] !==arr[i] && array.includes(arr[i])) {
          cows++;
      }
  }
console.log(cows,bulls);
if(bulls===4){
  document.querySelector("#text").innerHTML = "Вы выиграли!"+" "+"С" + " " +i+" "+"попытки";
  let img = document.createElement('img');
    img.src = 'https://sun9-9.userapi.com/impg/LqdHPP76sHlhAyjwwxWz6NFZ3tp9uXiBYYic6A/akNKFU7uipc.jpg?size=807x626&quality=96&sign=84b6ae42c5debaf7e5550ac308b8376a&c_uniq_tag=1aLW3XmesE_n-_A0ac-vE8Q27sHk6VjbpM2VjwNYJiM&type=album';
    img.alt = 'picture';
    let imageContainer = document.getElementById('imageContainer');
    imageContainer.appendChild(img);
}
else{
  document.querySelector("#text").innerHTML += " Попытка"+" "+i+"  —  "+array[0]+array[1]+array[2]+array[3]+" "+"Коров🐄: " + cows +" , " +"быков🐂: " + bulls + "<br>";
}
i++
  return { cows, bulls };
}