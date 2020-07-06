import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { BookmeetingComponent } from '../bookmeeting/bookmeeting.component';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.scss'],
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
export class AddVisitorComponent implements OnInit {
  showDep = false;
  showVis = false;

  constructor(
    public eService: EventService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.showDep = false;
    this.showVis = false;
  }

  showVehicle() {
    var vehDiv = document.getElementById('addVehicleToVisitor') as HTMLDivElement;
    if (this.showDep === false) {
      vehDiv.hidden = false;
      vehDiv.focus();
    } else { vehDiv.hidden = true; }
    this.showDep = !this.showDep;
  }

  showVisitor() {
    var visDiv = document.getElementById('addVisitorToList') as HTMLDivElement;
    if (this.showVis === false) {
      visDiv.hidden = false;
      visDiv.focus();
    } else { visDiv.hidden = true; }
    this.showVis = !this.showVis;
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
