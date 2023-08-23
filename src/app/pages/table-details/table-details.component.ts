import { Component, OnInit, inject } from '@angular/core';
import { ResponsePageable } from 'src/app/shared/model/responsePageable.model';
import { ListServicesNamesService } from 'src/app/shared/server/list.services.names.service';
import { SharedDataService } from 'src/app/shared/server/sharedService';
/*import { Repositorie } from 'src/app/shared/server/repositorie.server';*/
@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})

export class TableDetailsComponent implements OnInit {

  listName?: ResponsePageable[];
  total: number = 0;
  name?: string;
  ngOnInit() {

    this.sharedDataService.getName().subscribe(data=>{
     this.getElements(data);
     this.name = data;
    })
    
  }

  constructor(private ListService: ListServicesNamesService, private sharedDataService: SharedDataService) {

  }

  getElements(name: string): void {

    this.ListService.getAll(name).subscribe({
      next: (element) => {
        this.listName = element;
        this.calculator(element[0])
      },
      error: (error) => { console.log(error) }
    }
    )
  }

  calculator(lista: ResponsePageable) {

    lista.res.map((element) => this.total += element.frequencia);

  }

}