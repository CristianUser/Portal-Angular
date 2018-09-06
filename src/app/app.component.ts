import { Component } from '@angular/core';
import {DataService} from './data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal-app';

    constructor(private dataservice:DataService, private router:Router){
    }
    
  setM(inputMatricula){
    console.log(inputMatricula);
    var n=0;n=inputMatricula;
    this.dataservice.setMatricula(n);
    this.router.navigate(["/horario"]);
    this.router.navigate(["/"]);
    
  }
  

  
}
