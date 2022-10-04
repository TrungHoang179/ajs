import {Component, Input} from "@angular/core";
@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export class StudentComponent{
  girlNum = 10;
  addgirl(){
    this.girlNum++;
  }
  delgirl(){
    this.girlNum--;
    if(this.girlNum<0){
      this.girlNum = 0;
    }
  }
  @Input()
  classN?: string;
}
