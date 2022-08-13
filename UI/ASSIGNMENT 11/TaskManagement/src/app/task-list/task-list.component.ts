import { Component, OnInit } from '@angular/core';
import {TaskService} from '../shared/task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService:TaskService) { }
  taskArray=[];
  ngOnInit() {
    this.taskArray=this.taskService.getTasks();
  }
  

  submitted:boolean;
  showSucessMessage:boolean;

  formControls=this.taskService.form.controls;


  onSubmit(){
    console.log("onSubmit method called");
    console.log(this.taskService.form.valid);
    this.submitted=true;
    if(this.taskService.form.valid){
      console.log("in 1st if");
      if(this.taskService.form.get('$key').value!==null){
        //insert operation
        console.log("in if");
        this.taskService.updateTask(this.taskService.form.value);
      }
      
      this.showSucessMessage=true;
      setTimeout(()=>this.showSucessMessage=false,1000);
      this.submitted=false;
      this.taskService.form.reset();
       
    }
  }
}
