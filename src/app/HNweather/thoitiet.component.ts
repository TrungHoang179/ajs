import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'thoitiet',
  templateUrl: './thoitiet.component.html',

})
export class ThoitietComponent{
  city: string = 'Hanoi'
  temp: number = 30;
  hump: number = 70;
  pres: number = 1001;
  constructor(private http: HttpClient) {
  }
  ngOnInit(){ //ham auto chay sau khi in ra html
    this.hanoi();
    this.hcm();
    this.london();
    this.newyork();
    this.tokyo();
    this.berlin();
  }
  hanoi(){
    // lay infor thoi tiet hanoi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.pres = data.main.pressure;
        this.city = data.name +","+ data.sys.country
      })
  }
  hcm() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data => {
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.pres = data.main.pressure;
        this.city = data.name + "," + data.sys.country
      })
  }
  london(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data => {
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.pres = data.main.pressure;
        this.city = data.name + "," + data.sys.country
      })
  }
  newyork(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data => {
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.pres = data.main.pressure;
        this.city = data.name + "," + data.sys.country
      })
  }
  tokyo(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data => {
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.pres = data.main.pressure;
        this.city = data.name + "," + data.sys.country
      })
  }
  berlin(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data => {
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.pres = data.main.pressure;
        this.city = data.name + "," + data.sys.country
      })
  }
}
