//console.log("test")
var flag = true 
var X = []
var O = []
var game =
[

    ["1","2","3"],
    ["1","4","7"],
    ["1","5","9"],
    ["2","5","8"],
    ["3","5","7"],
    ["3","6","9"],
    ["4","5","6"],
    ["7","8","9"]

]
$('.sequare').one("click", function(e){

console.log(e.target.id)
     if (flag){
    $(this).text("O")
    $(this).css('color','#ffb3ff')
    
    flag = false
    O.push(e.target.id)
    chechToWin(O);
    }else{
    $(this).text("X")
    $(this).css('color','#990099')
   
flag = true
X.push(e.target.id)
chechToWin(X);
}
//   alert("you win ")
})
//function Box1(){
//}
//var win =[]
function chechToWin(array){

    for (let i = 0; i < game.length; i++) {
        if (array.includes(game[i][0])&& array.includes(game[i][1]) && array.includes(game[i][2]))  {
           
              alert("You Are Win ")
        }
      else if(array.length == 5){

        alert("Tie");
      }
        
    }
    

}

console.log(game[0][0]);
