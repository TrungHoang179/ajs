import {Component} from "@angular/core";
@Component({
  selector: 'classroom',
  templateUrl: './classroom.component.html'
})
export class ClassroomComponent{
  className = 'T2207A - SEM 1';
  num = 20;

  addStudent(){
    this.num++;
  }
  delStudent(){
    this.num--;
    if(this.num<0){
      this.num = 0;
    }
  }
  schoolName = 'FPT Academy International';
}

