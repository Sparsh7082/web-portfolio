const jsresult = document.getElementById("jsresult")
const todo = document.getElementById("todo")
const color = document.getElementById("random-color")
const counter = document.getElementById("counter")
const jokes = document.getElementById("random-jokes")
const stopwatch = document.getElementById("stopwatch")

todo.addEventListener("click",function(){
    jsresult.innerHTML=`<iframe src="./js-portfolio/todo/todo.html" style="width: 100%; height: 50vh; border: none; border-radius: 50px;"></iframe>`
})

color.addEventListener("click",function(){
    jsresult.innerHTML=`<iframe src="./js-portfolio/color/color.html" style="width: 100%; height: 50vh; border: none; border-radius: 50px;"></iframe>`
})

counter.addEventListener("click",function(){
    jsresult.innerHTML=`<iframe src="./js-portfolio/counter/counter.html" style="width: 100%; height: 50vh; border: none; border-radius: 50px;"></iframe>`
})

jokes.addEventListener("click",function(){
    jsresult.innerHTML=`<iframe src="./js-portfolio/jokes/jokes.html" style="width: 100%; height: 50vh; border: none; border-radius: 50px;"></iframe>`
})

stopwatch.addEventListener("click",function(){
    jsresult.innerHTML=`<iframe src="./js-portfolio/stopwatch/stopwatch.html" style="width: 100%; height: 50vh; border: none; border-radius: 50px;"></iframe>`
})
