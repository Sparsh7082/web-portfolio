function generateColor(){
    let randomColor = "#"+Math.floor(Math.random()*16777215).toString(16)
    // document.body.style.backgroundColor = randomColor;   //background color
    document.getElementById('color').style.backgroundColor = randomColor
    document.getElementById('colorCode').innerText = randomColor
 } 