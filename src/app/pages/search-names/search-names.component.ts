import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableDetailsComponent } from '../table-details/table-details.component';
import { SharedDataService } from 'src/app/shared/server/sharedService';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-search-names',
  templateUrl: './search-names.component.html',
  styleUrls: ['./search-names.component.css']
})
export class SearchNamesComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private sharedDataService: SharedDataService){}

  name = new FormControl('');

  updateName() {
    this.name.setValue('');
  }

  sharedData(){
     if(this.name.value != null && this.name.value.length >= 3)
        this.sharedDataService.sharedName(String(this.name.value))  
  }

}
