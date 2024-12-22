// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
const spans = document.querySelectorAll(".circle")
spans.forEach( span => {
    if (span.className.includes("blue")){
        span.classList.remove("blue")
        span.classList.add("purple")
    }else if(span.className.includes("purple")) {
        span.classList.remove("purple")
        span.classList.add("blue")
    }
}
   
)