const navs = document.querySelectorAll(".nav");
const title = document.querySelector(".title");

navs.forEach(function(nav)
{
    nav.addEventListener("click", function(event)
    {   
        const target = event.target;

        // Remove the "active" class from all nav items
        navs.forEach(function(navItem)
        {
            navItem.classList.remove("active");
        });

        // Add the "active" class to the clicked nav item
        target.classList.add("active");
        
        
        const displays = document.querySelectorAll(".display");
        displays.forEach(function(display)
        {
            // add the "hidden" class to all containers.
            display.classList.add("hidden");
        })
            // remove the "hidden" class from clicked nav's display container.

            // ALERT BOX FUNCITONS
        if (target.classList.contains("nav_alert"))
        {   
            title.textContent = "Alert Box Page";
            const alertBox = document.querySelector(".alert-box");
            const alertBoxText = document.querySelector(".alert-box_text");
            const alertBoxBtn =  document.querySelector(".alert-box_btn");
            const alertBoxTextBtn = document.querySelector(".alert-box_text-btn");

            alertBox.classList.remove("hidden");

            alertBoxBtn.addEventListener("click", function()
            {
                alertBoxText.classList.remove("hidden");
            });

            alertBoxTextBtn.addEventListener("click", function()
            {
                alertBoxText.classList.add("hidden");
            })
        }

        // todo sections
        if (target.classList.contains("nav_todo"))
        { 
          title.textContent = "Todo Page";
          const todoBox = document.querySelector(".todo");
          todoBox.classList.remove("hidden");
          
          const addTodoBtn = document.querySelector(".todo_btn");
         
          const search = document.querySelector(".search");
          const newTodo = document.querySelector(".add_todo");
        
          // to check user is tryint to add or search toods.
          let searchBtn;
          const todo_list = [];
          
          addTodoBtn.addEventListener("click", function(event)
          {     
                // check user is adding or searching todos.
                search.value === "" ? searchBtn = false : searchBtn = true;
                
                event.preventDefault();

                const taskList = document.querySelector(".todos");

                // if user is adding todos
                if (searchBtn === false)
                {
                    
                    if (newTodo.value === "") return;

                    // add the todos to array.
                    todo_list.unshift(newTodo.value);

                    // create "li" element.
                    const taskItem = document.createElement("li");
                    // textContent of the element is array's first element.
                    taskItem.innerHTML = todo_list[0];
                    taskItem.className = "li todo-styles";

                    taskList.appendChild(taskItem);
                    
                    // when user click on the todos remove also from array.
                    taskItem.addEventListener("click", function(event)
                    {   
                        const index = todo_list.indexOf(event.target.innerHTML);
                        if (index !== -1)   
                        {
                        todo_list.splice(index, 1);
                        event.target.remove();  
                        }
                    });
                }

                // if user is searching.
                if (searchBtn === true)
                {   
                    // check array is empty or not.
                    if (todo_list.length === 0)
                    {
                        alert("Nothing todo.")
                    }

                    // filter the todo_list array.
                   const search_box = todo_list.filter(todo=>todo.includes(search.value));
                    
                   // remove all the element inside of ul element.
                   const liElements = taskList.querySelectorAll(".li");
                   for (let i = 0; i < liElements.length; i++) {
                       taskList.removeChild(liElements[i]);
                   }

                   // display the filtered array with li element.
                   search_box.forEach(function(s)
                   {    
                        const taskItem = document.createElement("li");
                        taskItem.innerHTML = s;
                        taskItem.className = "todo-styles filter";
                        taskList.appendChild(taskItem);
                        
                        // add the click to delete feature.
                        taskItem.addEventListener("click", function(event)
                        {   
                            const index = todo_list.indexOf(event.target.innerHTML);
                            if (index !== -1)   
                            {
                            todo_list.splice(index, 1);
                            event.target.remove();  
                            }        
                        });
                   }); 

                }; 

                // clean the inputs.
                newTodo.value = "";
                search.value ="";               
            });
        }

        // form section.
       

        if (target.classList.contains("nav_form"))
        {
            title.textContent = "Form Page";
            const form_container = document.querySelector(".form");
            const myForm = document.querySelector('.myForm');
            const login = document.querySelector(".form-btn");

            form_container.classList.remove("hidden");

            login.addEventListener('click', function(event) {
                

                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const passwordInput = document.getElementById('password');
                const nameErr = document.querySelector(".name-error");
                const emailErr = document.querySelector(".email-error");
                const passErr = document.querySelector(".password-error");
    
                // Regular expressions
                const nameRegex = /^(?=.*[a-z])(?=.*\d)/;
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                const passwordRegex = /^.{6,}$/;
    
                // Validation
                
                if (!nameRegex.test(nameInput.value) || nameInput.value === "") {
                    
                   nameErr.textContent = 'Name must include at least one lowercase letter and one number';
                   event.preventDefault();
                }
                
    
               else if (!emailRegex.test(emailInput.value) || emailInput.value === "") {
                    nameErr.textContent = "";
                    emailErr.textContent = 'Invalid format!.'
                    event.preventDefault();
                }
    
               else if (!passwordRegex.test(passwordInput.value) || passwordInput.value === "") {

                    emailErr.textContent = "";
                    passErr.textContent = 'Password must be at least 6 characters long.'
                    event.preventDefault();
                    
                }                             
            });

        }
    });
});



        
    





