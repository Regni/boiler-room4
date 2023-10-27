const submitbtn = document.getElementById("submitbtn");
const form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//   event.preventDefault()
// })


submitbtn.addEventListener("click",function(e){
  e.preventDefault()
  console.log("we have sendedede it")

  // console.log(document.getElementById("yesFries").checked)
  console.log(document.getElementById("dish1").checked)
  console.log(document.getElementById("dish1").value)
})

console.log("heloo")