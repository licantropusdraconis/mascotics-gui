import { Component, OnInit } from '@angular/core';
import { PetModel } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-search-pet',
  templateUrl: './search-pet.component.html',
  styleUrls: ['./search-pet.component.css']
})
export class SearchPetComponent implements OnInit {

  PetList: PetModel[] = [];

  constructor(private PetService: PetService) { }

  ngOnInit(): void {
    this.GetPetList();
  }

  //method to get the list of Pet elements
  GetPetList(){
    this.PetService.GetPet().subscribe((data: PetModel[])=>{
      this.PetList = data;
      console.log(data);
    })
  }

}
