import './style.css';
import _ from 'lodash';

const Tasks = [];
let count = 0;

class Todo {
    constructor(description, completed, index) {
        this.description = description;
        this.completed = completed;
        this.index = index;
    }
}

Tasks.push(new Todo('Read', false, (count += 1)));
Tasks.push(new Todo('Yoga', false, (count += 1)));
Tasks.push(new Todo('Cook', false, (count += 1)));

const Items = document.getElementById('items');

const addList = () => {
    Tasks.forEach((task) => {
        const taskItem = document.createElement('div');

        const descriptionElem = document.createElement('span');
    descriptionElem.innerText = task.description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    taskItem.classList.add('element');
    taskItem.appendChild(checkBox);
    taskItem.appendChild(descriptionItem);
    Items.appendChild(taskItem);
    });



const removeButton = document.createElement('button');
removeButton.classList.add('removeBtn');
removeButton.innerText = 'Clear all completed';
removeButton.type = 'button';
Items.appendChild(removeButton);

return Items;
};

addList(); 
