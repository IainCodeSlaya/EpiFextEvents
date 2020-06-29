import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddvisitorComponent } from './addvisitor/addvisitor.component';
import { CreateeventComponent } from '../createevent/createevent.component';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-addguesttolist',
  templateUrl: './addguesttolist.component.html',
  styleUrls: ['./addguesttolist.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.35s')
      ]),
      transition('closed => open', [
        animate('0.35s')
      ]),
    ]),
  ]
})
export class AddguesttolistComponent implements OnInit {
  showDep = false;
  showEmp = false;
  showVis = false;

  constructor(
    public eService: EventService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.showDep = false;
    this.showEmp = false;
    this.showVis = false;
  }

  showDepartment() {
    var depDiv = document.getElementById('addDepartmentToList') as HTMLDivElement;
    if (this.showDep === false) {
      depDiv.hidden = false;
      depDiv.focus();
    } else { depDiv.hidden = true; }
    this.showDep = !this.showDep;
  }

  showEmployee() {
    var empDiv = document.getElementById('addEmployeeToList') as HTMLDivElement;
    if (this.showEmp === false) {
      empDiv.hidden = false;
      empDiv.focus();
    } else { empDiv.hidden = true; }
    this.showEmp = !this.showEmp;
  }

  showVisitor() {
    var visDiv = document.getElementById('addVisitorToList') as HTMLDivElement;
    if (this.showVis === false) {
      visDiv.hidden = false;
      visDiv.focus();
    } else { visDiv.hidden = true; }
    this.showVis = !this.showVis;
  }

  saveList() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '70%';
    dialogConfig.data = {};
    this.dialog.open(CreateeventComponent, dialogConfig);
  }

  backToEvent() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '70%';
    dialogConfig.data = {};
    this.dialog.open(CreateeventComponent, dialogConfig);
  }

}
