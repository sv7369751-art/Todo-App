function showInput(){
  document.getElementById("addTodo").style.display="block";
};
  
  function saveTodo(){
   const todoText= document.getElementById('todoInput').value
 const li= document.createElement('li');
 const checkbox= document.createElement('input');
 checkbox.type= 'checkbox';
 checkbox.addEventListener('change',function (){
   if(this.checked){document.getElementById('doneList').appendChild(li);}
   else{document.getElementById('addTodo').appendChild(li);}
 }
   
 )
 li.appendChild(checkbox);
 
 li.append(" "+todoText)
  document.getElementById("todolist").appendChild(li);
  
  document.getElementById('todoInput').value= "";
  document.getElementById('addTodo').style.display = 'none';
  }
  
  function refreshButton(){
    const fresh= document.getElementById('todolist')
    fresh.innerHTML= "";
    
    document.getElementById('doneList').innerHTML='';
  }
  