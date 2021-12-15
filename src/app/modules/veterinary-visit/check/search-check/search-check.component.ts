import { Component, OnInit } from '@angular/core';
import { MedicalCheckModel } from 'src/app/models/medicalCheck.model';
import { MedicalCheckService } from 'src/app/services/medical-check.service';

@Component({
  selector: 'app-search-check',
  templateUrl: './search-check.component.html',
  styleUrls: ['./search-check.component.css']
})
export class SearchCheckComponent implements OnInit {

  CheckList: MedicalCheckModel[] = [];

  constructor(private CheckService: MedicalCheckService) { }

  ngOnInit(): void {
    this.GetCheckList();
  }

  //method to get the list of Check elements
  GetCheckList(){
    this.CheckService.GetMedicalCheck().subscribe((data: MedicalCheckModel[])=>{
      this.CheckList = data;
      console.log(data);
    })
  }

}