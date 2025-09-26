import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { HeaderComponent } from '../../components/header/header.component';
import interactionPlugin from '@fullcalendar/interaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule,HeaderComponent,FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  constructor(private router: Router) {}
  selectedDate: string | null = null;
  InsertEvent: string | null = null; 
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2025-09-01', meta : this.InsertEvent },
      { title: 'event 2', date: '2025-09-01' }
    ],
   
  };

  handleDateClick(arg:any) {
    this.router.navigate(['/saveActivity', arg.dateStr]);
  }
  /*
  eventHandle(arg:any){
    //this.calendarOptions.eventAdd?(this.InsertEvent)
    
  }*/

}
