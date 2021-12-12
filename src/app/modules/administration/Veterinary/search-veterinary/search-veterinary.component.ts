import { Component, OnInit } from '@angular/core';
import { VeterinaryModel } from 'src/app/models/veterinary.model';
import { VeterinaryService } from 'src/app/services/veterinary.service';

@Component({
  selector: 'app-search-veterinary',
  templateUrl: './search-veterinary.component.html',
  styleUrls: ['./search-veterinary.component.css']
})
export class SearchVeterinaryComponent implements OnInit {

  veterinaryList: VeterinaryModel[] = [];

  constructor(private veterinaryService: VeterinaryService) { }

  ngOnInit(): void {
    this.GetVeterinaryList();
  }

  //method to get the list of veterinary elements
  GetVeterinaryList(){
    this.veterinaryService.GetVeterinary().subscribe((data: VeterinaryModel[])=>{
      this.veterinaryList = data;
      console.log(data);
    })
  }

}
