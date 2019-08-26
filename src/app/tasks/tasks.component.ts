import { Component, OnInit } from '@angular/core';

//creating new data type to be assigned to a variable
interface Task {
  description:string;
  startDate:Date;
  endDate:Date;
}

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent  {
  tasks:Task[]=[];
  addTask(/*this = ref. of component object*/ ){
    this.tasks.push ({description:"",startDate:new Date(),endDate:new Date()})
  }
  deleteTask(task:Task){
    const index=this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }
}
