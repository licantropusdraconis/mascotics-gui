import { Component, OnInit } from '@angular/core';
import { PetOwnerModel } from 'src/app/models/petOwner.model';
import { PetOwnerService } from 'src/app/services/pet-owner.service';

@Component({
  selector: 'app-search-owner',
  templateUrl: './search-owner.component.html',
  styleUrls: ['./search-owner.component.css']
})
export class SearchOwnerComponent implements OnInit {

  PetOwnerList: PetOwnerModel[] = [];

  constructor(private OwnerService: PetOwnerService) { }

  ngOnInit(): void {
    this.GetOwnerList();
  }

  //method to get the list of Owner elements
  GetOwnerList(){
    this.OwnerService.GetPetOwner().subscribe((data: PetOwnerModel[])=>{
      this.PetOwnerList = data;
      console.log(data);
    })
  }

}
