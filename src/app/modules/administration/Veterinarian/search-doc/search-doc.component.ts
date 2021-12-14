import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/models/veterinarianDoctor.model';
import { DoctorService} from 'src/app/services/doctor.service';

@Component({
  selector: 'app-search-veterinary',
  templateUrl: './search-doc.component.html',
  styleUrls: ['./search-doc.component.css']
})
export class SearchDocComponent implements OnInit {

  doctorList: DoctorModel[] = [];

  constructor(private docService: DoctorService) { }

  ngOnInit(): void {
    this.GetVeterinarianDoctorList();
  }

  //method to get the list of veterinary elements
  GetVeterinarianDoctorList(){
    this.docService.GetVeterinarianDoctor().subscribe((data: DoctorModel[])=>{
      this.doctorList = data;
      console.log(data);
    })
  }

}
