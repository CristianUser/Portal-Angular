import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-persona-data',
  templateUrl: './persona-data.component.html',
  styleUrls: ['./persona-data.component.css']
})
export class PersonaDataComponent implements OnInit {
  estudiante;
  balance;
  constructor(private dataService:DataService) {
    this.getEstudiante();
    this.getBalance();
  }
  getEstudiante(){
    this.dataService.getEstudiante().subscribe(res=> {
      console.log(res);
      this.estudiante=res;
      this.setPeriodo();
    })
   }
   getBalance(){
    this.dataService.getBalance().subscribe(res=> {
      console.log(res);
      this.balance=res;
    })
   }
   setPeriodo(){
     this.dataService.setPeriodoEst(this.estudiante[0].PERIODO_ACAD);
   }

  ngOnInit() {
  }

}
