import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ajs';
  id:any = "login";
  tabChange(ids:any){
    this.id = ids;
    console.log(this.id);
  }
}
