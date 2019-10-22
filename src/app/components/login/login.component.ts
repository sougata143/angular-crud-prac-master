import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
// import {first} from "rxjs/operators";
import {UserService} from "../../service/user-service/user.service";
import {LoginService} from "../../service/login-service/login.service";
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  model: User = new User();
  returnUrl: String = "index";
  loading: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,
                    private loginService: LoginService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.email.value == 'sroy@slscomptech.com' 
            && this.loginForm.controls.password.value == 'kolkata') {
        this.router.navigate(['index']);
    }else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loading = true;
    this.userService.getUserByEmail(this.model.email, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                alert("Invalid Credential");
                this.loading = false;
            });
}


}