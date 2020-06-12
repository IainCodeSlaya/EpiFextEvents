import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventtype } from './eventtype.model';
import { Event } from './event.model';
import { Eventactivity } from './eventactivity.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiURL: 'https://localhost:44353/api';
  json;
  eventypeList: Eventtype[];
  eventtypeData: Eventtype;
  eventList: Event[];
  eventData: Event;
  activityList: Eventactivity[];
  activityData: Eventactivity;

  constructor( private http: HttpClient ) { }

  getEventtypeList(): Observable<Eventtype[]> {
    return this.http.get<Eventtype[]>(this.apiURL + '/EventTypes');
  }

  createEvent(obj: Event) {
    return this.http.post(this.apiURL + '/Events', obj).toPromise().then((data: any) => {
      console.log(data);
    });
  }

  createEventActivity(obj: Eventactivity) {
    return this.http.post(this.apiURL + '/EventActivitys', obj).toPromise().then((data: any) => {
      console.log(data);
    });
  }
}
