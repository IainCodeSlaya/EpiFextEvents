import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Eventtype } from './eventtype.model';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventypeList: Eventtype[];
  eventtypeData: Eventtype;
  eventList: Event[];
  eventData: Event;

  constructor( private http: HttpClient ) { }

  getEventtypeList(): Observable<Eventtype[]> {
    return this.http.get<Eventtype[]>(environment.apiURL + '/EventTypes');
  }
}
