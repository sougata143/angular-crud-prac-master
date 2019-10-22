import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sougata Roy\'s angular app' ;
  data: any = {};
  pages: any = ["Add User", "Edit User", "View User", "Delete User"];
  isNavbarCollapsed=true;

  onSubmit(){
    alert(JSON.stringify(this.data));
  }
}
