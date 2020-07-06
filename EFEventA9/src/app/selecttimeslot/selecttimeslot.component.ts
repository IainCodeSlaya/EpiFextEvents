import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { BookmeetingComponent } from '../bookmeeting/bookmeeting.component';

@Component({
  selector: 'app-selecttimeslot',
  templateUrl: './selecttimeslot.component.html',
  styleUrls: ['./selecttimeslot.component.scss'],
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
export class SelecttimeslotComponent implements OnInit {
  showTimeTable = false;

  constructor(
    public eService: EventService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.showTimeTable = false;
  }

  bookMeeting() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { };
    this.dialog.open(BookmeetingComponent, dialogConfig);
  }

  showTimetable() {
    var ttDiv = document.getElementById('timetable') as HTMLDivElement;
    if (this.showTimeTable === false) {
      ttDiv.hidden = false;
      ttDiv.focus();
    } else { ttDiv.hidden = true; }
    this.showTimeTable = !this.showTimeTable;
  }
}
