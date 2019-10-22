import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user-service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add User';
  users: User = new User();
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  addUser(): void {
    this.userService.addUser(this.users)
        .subscribe(data => {
          alert("User Added Successfully");
          this.router.navigate(['index']);
        });
  };

  getUsers() {
    return null;
  };

}
