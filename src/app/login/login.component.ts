import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import{ApiServeService}from '../serve/api-serve/api-serve.service'

 

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:ApiServeService  ) {
    
  }

  /**
   * 初始化
   */
  ngOnInit() {

  }

  //  data:
  /**
   * 登录
   */
  login() {
   
 console.log('-----',this.http.login());
    
          // this.router.navigate(['/app/home']);
       
  }

}
