import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.scss']
})
export class CreateeventComponent implements OnInit {

  constructor( public eService: EventService) { }

  ngOnInit(): void {
    this.resetForm();
    this.eService.getEventtypeList().subscribe(res => this.eService.eventypeList = res);
  }

  resetForm() {
    var d = new Date();

    this.eService.eventypeList = [];
    this.eService.eventList = [];

    this.eService.eventtypeData = {
      EventTypeID: 0,
      EventTypeDesc: ''
    };

    this.eService.eventData = {
      EventID: 0,
      EventTitle: '',
      EventDate: d,
      EventTypeID: 0,
      EventStartTime: '12:00 AM',
      EventEndTime: '12:00 AM',
      EventLocation: '',
      IsCaterer: false,
      GuestCount: 0
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

  testtime() {
    console.log(this.convertTime12to24(this.eService.eventData.EventStartTime));
  }

  selectEventType(ctrl) {
    if (ctrl.selecyedIndex === 0) {
      // this.eService.eventData.EventTypeID = 0;
    }
  }

  createEvent() {
    // console.log(this.eService.eventData, '1');
    this.eService.eventData.EventStartTime = this.convertTime12to24(this.eService.eventData.EventStartTime);
    this.eService.eventData.EventEndTime = this.convertTime12to24(this.eService.eventData.EventEndTime);
    this.eService.createEvent(this.eService.eventData);
  }

}
