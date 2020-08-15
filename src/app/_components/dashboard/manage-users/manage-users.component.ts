import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'r3app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  displayAddUserDialog: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddUserDialog(): void{
    this.displayAddUserDialog = !this.displayAddUserDialog;
  }


  onAddUser(){
    console.log("Adding user...");

  }



}
