import { Component, OnInit } from '@angular/core';

import {TaskService} from '../shared/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  submitted:boolean;
  showSucessMessage:boolean;

  formControls=this.taskService.form.controls;
  ngOnInit() {
  }
  resetForm(){
    this.taskService.form.reset();
  }
  onSubmit(){
    console.log("onSubmit method called");
    console.log(this.taskService.form.valid);
    this.submitted=true;
    if(this.taskService.form.valid){
      console.log("in 1st if");
      if(this.taskService.form.get('$key').value==null){
        //insert operation
        console.log("in if");
        this.taskService.insertTask(this.taskService.form.value);
      }
      
      this.showSucessMessage=true;
      setTimeout(()=>this.showSucessMessage=false,1000);
      this.submitted=false;
      this.taskService.form.reset(); 
    }
  }

}
