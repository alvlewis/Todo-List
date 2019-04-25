import { Component } from '@angular/core';


interface Todo {
  task: string;
  completed: boolean;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TodoComponent {
  title = 'TODO List';
  titleExt = 'A place to store things you have to do.'
  newTask: string;
  newComplete: boolean = false;


  todoArray: Todo[]=[
    { task: "clean house", completed: false},
    { task: "walk nitro", completed: true },
    { task: "grocery shop", completed: true },
    { task: "laundry", completed: false },
  ]

  addButton = () => {
    const addTodo = {
      task: this.newTask,
      completed: this.newComplete,
    }
    this.todoArray.push(addTodo);
  }
  completeBTN = (item) => {
    item.completed = true;    
  }

  remove = (index) => {
    this.todoArray.splice(index, 1)
  }


  }
// }


