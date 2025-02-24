const formel = document.getElementById("form1")

const tableel = document.querySelector("#table2 thead")

const tableel1 = document.querySelector("#table2 tbody")

/*const tableel1=document.querySelector("#table2 thead")*/

const buttonel = document.getElementById("submit")

buttonel.addEventListener("click", add)

function add() {
   event.preventDefault()

   const newname = document.getElementById("nameid").value

   console.log(newname)

   const age = document.getElementById("num").value

   const gender = document.querySelector('input[name="gender"]:checked').value

   const courses = document.getElementById("selectid").value

   const email = document.getElementById("emailid").value

   const deleteButton = document.createElement("button")
   deleteButton.textContent = "Delete"
   /*const textnode=document.createTextNode("Delete")
   deleteButton.appendChild(textnode)*/

   const tableell = document.createElement("tr")

   if (tableel.querySelector("tr") === null) {
      const tableell1 = document.createElement("tr")

      tableell1.innerHTML = `
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Email</th>  
                        <th>Action</th>
                        `;

      tableel.appendChild(tableell1)

   }

   tableell.innerHTML = `
                        <td>${newname}</td>
                        <td>${age}</td> 
                        <td>${gender}</td> 
                        <td>${courses}</td> 
                        <td>${email}</td> 
                        <td><button onclick="deletefunction()" style="width:50%; background-color:red; color:white; margin:5px;" id="btn1">${deleteButton.textContent}</button></td>
                        `;
   /*tableel1.appendChild(tableell)*/

   /*tableell.lastElementChild.appendChild(deleteButton)*/

   tableel1.appendChild(tableell)

   form1.reset()

}

function deletefunction() {

   /*const deletebutton1 = document.getElementById("btn1")*/

   const closest = event.target.closest("tbody").previousElementSibling
   const nearest=event.target.parentElement.parentElement
   const nearer=event.target.parentElement.parentElement.parentElement.firstElementChild
   console.log(closest)
   if (closest && closest.tagName=="THEAD" && nearest==nearer) {
      event.target.parentElement.parentElement.remove()
      closest.remove()
   }
   else {
      event.target.parentElement.parentElement.remove()
   }

   /*if(event.target.closest("thead")){
      event.target.parentElement.parentElement.remove()
      event.target.closest.remove()
   }
   else{
      event.target.parentElement.parentElement.remove()
   }*/

}



/*const inputel=document.querySelectorAll("input,select")*/

/*tableell.innerHTML="<th>Name</th><th>Age</th><th>Course</th><th>Gender</th><th>Email</th><th>Action</th>"*/

/*function add(){
    const inputvalue=inputel.value

    if(inputvalue!=""){

    const  tableell=document.createElement("tr")

    tableel.appendChild(tableell)


    tableell.innerHTML="<td>Name</td><td>Age</td><td>Course</td><td>Gender</td><td>Email</td><td>Action</td>"

    console.log(tableell.innerHTML)

   
    } 
    

       /* console.log(tableell)*/

/*tableel.insertAdjacentHTML("afterend",)*/


/*}
*/

