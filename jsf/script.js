const buttonel=document.querySelector('#buttonid')
const inputel=document.querySelector('#input')


const listel=document.querySelector('#ulid')


 const deleteButton=document.createElement("button")
 const textnode=document.createTextNode("delete")
 deleteButton.appendChild(textnode)

 
 

buttonel.addEventListener('click',()=>{
    const inputvalue=inputel.value
    if(inputvalue!=""){
    listel.insertAdjacentHTML("afterend",`<li>${inputvalue}<button onclick="myfunction()">${deleteButton.textContent}</button></li>`)
    }
}

)

function myfunction(){
    document.querySelector("li").remove()
}



document.body.style.backgroundColor="#F5EFFF"

const buttonell=document.querySelector('#btn')

const buttonell1=document.querySelector('#btn1')

const buttonell2=document.querySelector('#btn2')

/*buttonell.addEventListener('click',()=>{
   document.body.style.backgroundColor="#00FFFF"
}
)

buttonell1.addEventListener('click',()=>{
    document.body.style.background="#FFF7D1"
}
)

buttonell2.addEventListener('click',()=>{
    document.body.style.background="#E7CCCC"
}
)*/

/*const buttonell=document.querySelector('#btn')

const buttonell1=document.querySelector('#btn1')

const buttonell2=document.querySelector('#btn2')*/

if(buttonell){
    
    buttonell.addEventListener('click',()=>{
        document.body.style.backgroundColor="#00FFFF"
     }
    )
}
 if (buttonell1) {
    buttonell1.addEventListener('click',()=>{
        document.body.style.backgroundColor="#FFF7D1"
     }
    )
}
  if(buttonell2) {
    buttonell2.addEventListener('click',()=>{
        document.body.style.backgroundColor="#E7CCCC"
     }
    )
}




