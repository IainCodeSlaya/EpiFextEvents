import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-rsvptoevent',
  templateUrl: './rsvptoevent.component.html',
  styleUrls: ['./rsvptoevent.component.scss']
})
export class RsvptoeventComponent implements OnInit {

  constructor(public eService: EventService) { }

  ngOnInit(): void {
  }

}
