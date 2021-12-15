import { Component, OnInit } from '@angular/core';
import { AppointmentModel } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-search-appointment',
  templateUrl: './search-appointment.component.html',
  styleUrls: ['./search-appointment.component.css']
})
export class SearchAppointmentComponent implements OnInit {

  AppointmentList: AppointmentModel[] = [];

  constructor(private AppointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.GetAppointmentList();
  }

  //method to get the list of Appointment elements
  GetAppointmentList(){
    this.AppointmentService.GetAppointment().subscribe((data: AppointmentModel[])=>{
      this.AppointmentList = data;
      console.log(data);
    })
  }

}
