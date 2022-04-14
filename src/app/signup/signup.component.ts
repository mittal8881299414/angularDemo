import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!:FormGroup;
  constructor(private router:Router, private formBuilder: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {

    this.signupForm=this.formBuilder.group({
      email:[''],
      password:[''],
      confirm:['']
      
    })

  }

  signUp(){
    this.http.post<any>("http://localhost:3000/Users", this.signupForm.value)
    .subscribe(res=>{
      alert("Succesfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("somthing went wrong.");
    });
  }

}
