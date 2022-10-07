import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  constructor(private http: HttpClient) {
  }
  ngOnInit(){
   this.food()
  }
  menu: any = [
    {id:1, name:'Chicken', icon:'abc'},
    {id:2, name:'Rice', icon:'abc'},
  ];
  flag = true;
  on(){
    this.flag = true;
  }
  off(){
    this.flag = false;
  }
  food(){
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    this.http.get<any>(url)
      .subscribe(data =>{
        var ls = data.data;
        this.menu = ls;
      });
  }
}
