import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { HeaderComponent } from '../../components/header/header.component';
import interactionPlugin from '@fullcalendar/interaction';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
import { CalendarService } from './calendar.service';
@Component({
  selector: 'app-calendar',
  imports: [CommonModule,HeaderComponent,FullCalendarModule],
  providers:[CalendarService],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {


  constructor(private router: Router,private storage: StorageService,private service: CalendarService) {}
  selectedDate: string | null = null;
  InsertEvent: string | null = null; 
  activities!: any[];


  calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
  plugins: [dayGridPlugin, interactionPlugin],
  dateClick: (arg) => this.handleDateClick(arg),
  events: [
      //{ title: 'event 1', date: '2025-10-01', meta : this.InsertEvent },
      //{ title: 'event 2', date: '2025-10-01' }
  ],
   
  };

  ngOnInit(){
    this.getActivitiesFromUser();
    
    
  }
  
 

getActivitiesFromUser(): Promise<void> {
  return new Promise((resolve, reject) => {
    const id = Number(this.storage.getItem("id"));

    this.service.getActivitiesFromUser(id, 1000).subscribe({
      next: (value) => {
        this.activities = value.activities;
      this.calendarOptions.events = this.activities.map((activity: any) => {
      const toLocalDateTime = (dateStr?: string): Date | undefined => {
        if (!dateStr) return undefined; 
        const d = new Date(dateStr);
        return new Date(d.getTime() + d.getTimezoneOffset() * 60000); //60000 para ajustar a milisegundos, necesario para ajuste de hora
      };
      return {
        title: activity.name,
        start: toLocalDateTime(activity.startDate),
        end: toLocalDateTime(activity.endDate),
        meta: activity,
      };
    });

        console.log("Eventos del calendario:", this.calendarOptions.events);
        resolve();
      },
      error: (err) => {
        console.error("Data no encontrada", err);
        reject();
      },
    });
  });
}

  handleDateClick(arg:any) {
    this.router.navigate(['/saveActivity', arg.dateStr]);
  }
  /*
  eventHandle(arg:any){
    //this.calendarOptions.eventAdd?(this.InsertEvent)
    
  }*/

}
