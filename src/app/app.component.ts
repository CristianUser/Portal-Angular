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
  active=0;

  setActive(){
    if(this.router.url=='/'){
      this.active=0;
    }else if(this.router.url=='/seleccion'){
      this.active=1;
    }else if(this.router.url=='/horario-prematricula'){
      this.active=2;
    }else if(this.router.url=='/horario'){
      this.active=3;
    }else if(this.router.url=='/calificaciones'){
      this.active=4;
    }
    
  }

  constructor(private dataservice:DataService, private router:Router){
  }
  setM(inputMatricula){
    console.log();
    console.log(inputMatricula);
    var n=0;n=inputMatricula;
    this.dataservice.setMatricula(n);
    if(this.router.url=='/'){
      this.router.navigate(["/seccion"]);
      //setTimeout(100);
      //this.router.navigate(["/"]);
    }else{
      this.router.navigate(["/"]);
    }
  return false;
  }
  

  
}
