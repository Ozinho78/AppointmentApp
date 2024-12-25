import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent {

  // appointment: Appointment = {
  //   id: 1,
  //   title: "Take a walk",
  //   date: new Date('2023-07-30')
  // }

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  addAppointment(){
    // alert(this.newAppointmentTitle + " " + this.newAppointmentDate);
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),        // milliseconds since 01.01.1970
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
    
    this.appointments.push(newAppointment);

    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();

    alert(this.appointments.length);
    }
  }


}
