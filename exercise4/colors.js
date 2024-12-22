/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/

const c1 = document.querySelector(".c1")
const c2 = document.querySelector(".c2")
const c3 = document.querySelector(".c3")
const c4 = document.querySelector(".c4")
const c5 = document.querySelector(".c5")
const c6 = document.querySelector(".c6")
const c7 = document.querySelector(".c7")
function change(r,g,b){
    const div = document.querySelectorAll(".s-one")
    let a = 1
    for(let i = 0; i< div.length; i++){
        a -= 0.15
        div[i].style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
    }
}
c1.addEventListener("click", ()=> change(31, 127, 102))
c2.addEventListener("click", ()=> change(255, 200, 0))
c3.addEventListener("click", ()=> change(255, 123, 0))
c4.addEventListener("click", ()=> change(216, 1, 1))
c5.addEventListener("click", ()=> change(127, 31, 85))
c6.addEventListener("click", ()=> change(93, 18, 199))
c7.addEventListener("click", ()=> change(223, 4, 70))