const submitbtn = document.getElementById("submitbtn");
const form = document.querySelector("form");


submitbtn.addEventListener("click",function(e){
  e.preventDefault()
  console.log("we have sendedede it")
});

document.addEventListener('click', function(evt){
  if(evt.target.type == 'checkbox' && evt.target.checked == true){
    const newLi = document.createElement('li');
    newLi.id = evt.target.id + 'Item';
    newLi.textContent = evt.target.value;
    document.getElementById('list').appendChild(newLi);
  }
});