import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent {

  appointment: Appointment = {
    id: 1,
    title: "Take a walk",
    date: new Date('2023-07-30')
  }

}
