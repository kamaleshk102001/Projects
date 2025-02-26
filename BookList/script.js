const pop1=document.querySelector(".pop-overlay")
var pop2=document.querySelector(".pop-up-box")
const button1=document.getElementById("add-button-popup")

button1.addEventListener("click",function()
    {
    pop1.style.display="block"
    pop2.style.display="block"
});

/*function add(){
      pop1.style.display="block"
      pop2.style.display="block"
}*/

var cancelpop=document.getElementById("cancel-pop")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
})

var container=document.querySelector(".container")
const addButton=document.getElementById("add-book-button")
var booktitle=document.getElementById("book_id")
var authorname=document.getElementById("author_id")
var descriptioncontent=document.getElementById("description_id")


addButton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${authorname.value}</h5>
            <p>${descriptioncontent.value}</p>
           <button onclick="removeBook()">Remove</button>`
    container.append(div)
    pop1.style.display="none"
    pop2.style.display="none"
})

function removeBook(){
    event.target.parentElement.remove()
}