import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {  UserService } from '../../service/user-service/user.service';
import { User } from 'src/app/model/user.model';

@Component({
    
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    user: User = new User();
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.loading = true;
        this.userService.addUser(this.user)
            .subscribe(
                data => {
                    this.router.navigate(['login']);
                },
                error => {
                    this.loading = false;
                });
    }
}