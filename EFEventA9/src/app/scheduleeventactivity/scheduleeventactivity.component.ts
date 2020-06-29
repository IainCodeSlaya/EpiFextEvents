import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CreateeventComponent } from '../createevent/createevent.component';

@Component({
  selector: 'app-scheduleeventactivity',
  templateUrl: './scheduleeventactivity.component.html',
  styleUrls: ['./scheduleeventactivity.component.scss']
})
export class ScheduleeventactivityComponent implements OnInit {

  constructor(
    public eService: EventService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm() {
    var d = new Date();

    this.eService.activityList = [];

    this.eService.activityData = {
      EventActivityID: 0,
      ActivityTitle: '',
      ActivityStartTime: '12:00 AM',
      ActivityEndTime: '12:00 AM',
      ActivityDesc: '',
      ActivityLocation: '',
      SpeackerCount: 0
    };
  }

  convertTime12to24(time12h) {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}:00`;
  }

  saveActivity() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "70%";
    dialogConfig.data = {  };
    this.dialog.open(CreateeventComponent, dialogConfig);
  }

  createEventActivity() {
    this.eService.activityData.ActivityStartTime = this.convertTime12to24(this.eService.activityData.ActivityStartTime);
    this.eService.activityData.ActivityEndTime = this.convertTime12to24(this.eService.activityData.ActivityEndTime);
    this.eService.createEventActivity(this.eService.activityData);
  }
}
