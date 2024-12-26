import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent implements OnInit {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // throw new Error('Method not implemented.');
    console.log("got loaded");
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  // appointment: Appointment = {
  //   id: 1,
  //   title: "Take a walk",
  //   date: new Date('2023-07-30')
  // }

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  // appointments: Appointment[] =[
  //   {
  //     "id": 1,
  //     "title": "Team Meeting",
  //     "date": new Date('2025-01-10')
  //   },
  //   {
  //     "id": 2,
  //     "title": "Dentist Appointment",
  //     "date": new Date('2025-01-11')
  //   },
  //   {
  //     "id": 3,
  //     "title": "Project Deadline",
  //     "date": new Date('2025-01-15')
  //   },
  //   {
  //     "id": 4,
  //     "title": "Lunch with Sarah",
  //     "date": new Date('2025-01-12')
  //   },
  //   {
  //     "id": 5,
  //     "title": "Conference Call",
  //     "date": new Date('2025-01-14')
  //   },
  //   {
  //     "id": 6,
  //     "title": "Doctor's Appointment",
  //     "date": new Date('2025-01-18')
  //   },
  //   {
  //     "id": 7,
  //     "title": "Weekly Review",
  //     "date": new Date('2025-01-17')
  //   },
  //   {
  //     "id": 8,
  //     "title": "Gym Session",
  //     "date": new Date('2025-01-13')
  //   },
  //   {
  //     "id": 9,
  //     "title": "Flight to New York",
  //     "date": new Date('2025-01-20')
  //   },
  //   {
  //     "id": 10,
  //     "title": "Dinner with Clients",
  //     "date": new Date('2025-01-21')
  //   }
  // ];

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

    // alert(this.appointments.length);

    localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }


  deleteAppointment(index: number){
    this.appointments.splice(index, 1);   // removes 1 element from position index
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }


}
