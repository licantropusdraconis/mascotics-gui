import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  PersonList: PersonModel[] = [];

  constructor(private PersonService: PersonService) { }

  ngOnInit(): void {
    this.GetPersonList();
  }

  //method to get the list of Person elements
  GetPersonList(){
    this.PersonService.GetPerson().subscribe((data: PersonModel[])=>{
      this.PersonList = data;
      console.log(data);
    })
  }

}