import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations:[
    trigger('fade',[
      transition(':enter',[
        style({backgroundColor: 'yellow',opacity: 0}),
        animate(2000)
      ]),

      transition(':leave',[
        animate(2000,style({opacity:0}))
      ])

    ])
  ]
})
export class TodoComponent implements OnInit {

  todoList:any = [];
  todoData:string = '';
  myData: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.makeTodoList();
  }

  makeTodoList(){
    this.todoList = [
      'kartik','Gaurav','Kavita'
    ]
  }

  isSubmit(forms){
    console.log("Forms :", forms.value);
    this.todoList.unshift(forms.value.todoData);
  }

  removeItem(todoItem){
    this.todoList.splice(this.todoList.indexOf(todoItem),1);
  }

}
