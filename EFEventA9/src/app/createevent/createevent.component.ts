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
      EventStartTime: d.getTime().toString(),
      EventEndTime: d.getTime.toString(),
      EventLocation: '',
      IsCaterer: false,
      GuestCount: 0
    };
  }

  createEvent() {
    console.log(this.eService.eventData);
  }

}
