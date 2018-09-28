console.log ('testing123')

document.addEventListener('DOMContentLoaded', () => {

const title = document.createElement('h1');
document.body.appendChild(title);
title.innerText ='Todo App';

const inputField = document.createElement('input');
document.body.appendChild(inputField);
inputField.setAttribute('placeholder', 'what do you need to do?')

const ul = document.createElement('ul');
document.body.appendChild(ul);

const addTodoButton= document.createElement('button')
addTodoButton.setAttribute('id','add_todo');
addTodoButton.innerText='Add Todo'
document.body.appendChild(addTodoButton)

inputField.addEventListener('keydown', addItem)
addTodoButton.addEventListener('click', addItem)

let formInput = '';
function addItem (ev) {

    if (ev.keyCode > 64 && ev.keyCode < 91) {
        formInput += ev.key;
        } 
    else if (ev.keyCode === 61) {
        formInput.substring(0,formInput.length-1)
        }
        
    else if (formInput.length !==0 && ev.key === 'Enter'|| formInput.length !==0 && ev.type ==='click') {
        
        const list = document.createElement('li'); 
        ul.appendChild(list);
        list.innerText = formInput;

        const xButton = document.createElement('button')
        list.appendChild(xButton);
        xButton.innerText = 'X';
        xButton.style.float = 'right'
        xButton.setAttribute('id','add_todo')
        xButton.addEventListener('click', (ev) => {
            ul.removeChild(list)
        })

        const editButton = document.createElement('button')
        list.appendChild(editButton);
        editButton.innerText = 'Edit';
        editButton.style.float = 'right';
        editButton.setAttribute('id','add_todo');
        
        editButton.addEventListener('click', (ev) => {
        const revision = document.createElement('input')
        list.appendChild(revision);
        })
        
        formInput = '';
        inputField.value = '';
    
    } 

} //addItem function

    }) // main function












