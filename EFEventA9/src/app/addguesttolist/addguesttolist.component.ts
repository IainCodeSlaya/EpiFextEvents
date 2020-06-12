import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';

@Component({
  selector: 'app-addguesttolist',
  templateUrl: './addguesttolist.component.html',
  styleUrls: ['./addguesttolist.component.scss']
})
export class AddguesttolistComponent implements OnInit {

  constructor(
    public eService: EventService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addDepartment() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "70%";
    dialogConfig.data = {  };
    this.dialog.open(AdddepartmentComponent, dialogConfig);
  }

  addEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "70%";
    dialogConfig.data = {  };
    this.dialog.open(AddemployeeComponent, dialogConfig);
  }

  addVisitor() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "70%";
    dialogConfig.data = {  };
    this.dialog.open(AddvisitorComponent, dialogConfig);
  }

}
