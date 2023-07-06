// 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getDatabase,
     ref,
      set,
       push,
       onValue,
       remove,
       update
       } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAnx0ijHURrpEHU7ZC1GONRWVTveBFhOx8",
    authDomain: "to-do-app-fcede.firebaseapp.com",
    projectId: "to-do-app-fcede",
    storageBucket: "to-do-app-fcede.appspot.com",
    messagingSenderId: "1088983608517",
    appId: "1:1088983608517:web:854e851ee8d622c3a194ac"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
var inputVal = document.getElementById("inputVal")


window.AddTask = function (){
  var obj = {
      todo: document.getElementById('input').value
  }
  console.log(obj);
  var userRef = push(ref(database , 'todos/'))
  
  obj.id = userRef.key
  
  set(userRef , obj)
      }
  
      // GET DATA2
  
      window.get = function(){
          var listData = document.getElementById('List')
  
          onValue(ref(database , 'todos/'),function(todo){
              listData.innerHTML = ""
  
              var todos = Object.values(todo.val())
              
              for(var i = 0; i < todos.length; i++){
                  var app = todos[i]
                  console.log(app.todo);
                  listData.innerHTML += `
                  <li class = "listing" > TODO : ${app.todo} <button class = "edit-btn"
                  onclick = "ToDoUpdate('${app.id}' )" > EDIT </button>
                  
                  <button class = "del-btn"
                  onclick = "Tododel('${app.id}')"  > DELETE</button>
                  
                  </li>`
              }
              var inp = document.getElementById('input').value = "";
          })
      }
      get()
      
      // DELETE DATA WORK
      
      window.Tododel = function(id){
      remove(ref(database , `todos/${id}`))
  }
  
  window.delAll = function (){
      remove(ref(database , `todos/`))
  
  }
  
  window.ToDoUpdate = function(id){
      var newTodo = prompt("enter your data")
  
      update(ref(database , `todos/${id}`),{
          todo : newTodo
      })
  }















