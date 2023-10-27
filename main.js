const submitbtn = document.getElementById("submitbtn");
const form = document.querySelector("form");
const radiocheck = document.getElementById("radio-container")




document.addEventListener('click', function(evt){
  if(evt.target.type == 'checkbox' && evt.target.checked == true){
    const newLi = document.createElement('li');
    newLi.id = evt.target.id + 'Item';
    newLi.textContent = evt.target.value;
    document.getElementById('list').appendChild(newLi);
  }
  if (evt.target.type == 'checkbox' && evt.target.checked == false) {
    const idremove = evt.target.id + 'Item';
    document.getElementById(idremove).remove();
  }

  if(evt.target.type == 'radio' && evt.target.checked == true){document.getElementById("drink").textContent = evt.target.value;
  }



});

submitbtn.addEventListener("click", function(event){
  event.preventDefault()
  let todaysDish = document.getElementById("comments").value;
  if(todaysDish != ""){
    const newLi = document.createElement('li');
    newLi.id = event.target.id + 'Item';
    newLi.textContent = todaysDish;
    document.getElementById('list').appendChild(newLi);

  }

  
})

