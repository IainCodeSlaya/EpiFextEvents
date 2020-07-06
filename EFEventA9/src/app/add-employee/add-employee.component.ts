import { Component, OnInit } from '@angular/core';
import { BookmeetingComponent } from '../bookmeeting/bookmeeting.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    public eService: EventService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  backtoMeeting() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '70%';
    dialogConfig.data = {};
    this.dialog.open(BookmeetingComponent, dialogConfig);
  }

}
