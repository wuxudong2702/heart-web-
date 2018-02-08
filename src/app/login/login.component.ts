import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';

 

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(  ) {
    
  }

  /**
   * 初始化
   */
  ngOnInit() {

  }


  /**
   * 登录
   */
  login() {
   
       
    
          // this.router.navigate(['/app/home']);
       
  }

}
