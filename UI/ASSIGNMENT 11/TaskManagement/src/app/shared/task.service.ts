import { Injectable } from '@angular/core';

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  counter:number=500;
  constructor() { }
  tasks=[
    {
      $key:101,
      title:'Do Assignment',
      description:'Angular Assignment 10 and 11 have to comeplete Angular Assignment 10 and 11 have to comeplete',
      status:'new',
      creationDate:'12 Oct 2019',
      completionDate: '15 Oct 2019',
      priority:'high'
      
    },
    {
      $key:102,
      title:'Do Assignment',
      description:'Angular Assignment 10 and 11 have to comeplete',
      status:'completed',
      creationDate:'12 Oct 2019',
      completionDate: '15 Oct 2019',
      priority:'low'
      
    },
    {
      $key:103,
      title:'Do Assignment',
      description:'Angular Assignment 10 and 11 have to comeplete Angular Assignment 10 and 11 have to comeplete',
      status:'progress',
      creationDate:'12 Oct 2019',
      completionDate: '15 Oct 2019',
      priority:'low'
      
    }
  ];


  // to create form group
  form=new FormGroup({
    $key : new FormControl(null),
    title : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    status : new FormControl(''),
    creationDate : new FormControl(''),
    completionDate : new FormControl(''),
    priority : new FormControl('',Validators.required)

  });
  //method to get task array
  getTasks(){
    return this.tasks;
  }

  //method to insert into array
  insertTask(task){
    this.tasks.push( {
      $key:this.counter++,
      title:task.title,
      description:task.description,
      status:'new',
      creationDate:'12 Oct 2019',
      completionDate: '15 Oct 2019',
      priority:task.priority
    });
  }
  populateTask(task){
    this.form.setValue(task);
  }
  //method to update task
  updateTask(task){
      var found, index;
      found = false;
      index = 0;
      while (index < this.tasks.length) {
      if (task.$key === this.tasks[index].$key) {
        this.tasks[index].title=task.title;
        this.tasks[index].description=task.description;
        this.tasks[index].status=task.status;
        this.tasks[index].priority=task.priority;
        found = true;
        break;
      }
      index++;
    }
  }

  removeTask(keyValue){
    console.log(keyValue);
    this.tasks=this.tasks.filter(t=> t.$key!== keyValue);
  }
}
