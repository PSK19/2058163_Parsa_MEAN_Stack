import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  show: boolean = false;
  tasks: Array<Task> = [];
  constructor() { }

  ngOnInit(): void {
  }
  addTask(taskRef: NgForm) {
    let task = taskRef.value;
    if (task.id != "" && task.name != "" && task.desc != "" && task.date != "") {
      let newTask = new Task(task.id, task.name, task.desc, task.date);
      this.tasks.push(newTask);
      this.show = true;
    }
    else{
      alert("Please fill ALL fields")
    }
  }
}
