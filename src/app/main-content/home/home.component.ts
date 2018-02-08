import { Component, OnInit } from '@angular/core';
import{ApiServeService}from '../../serve/api-serve/api-serve.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:ApiServeService) { console.log('000');}

  ngOnInit() {
    
    //  
  }
  homeGetData(){
    console.log('========');
    this.http.getData();
  } 
}
