import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }
  
  ngOnInit() {
    this.userService.getUsers()
        .subscribe(data => {
          this.users = data;
        });
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(res => {
      alert("Deleted Successfully");
      this.router.navigate(['index']);
    });
  }

  editUser(id){
    this.userService.editUser(id);
  }

}
