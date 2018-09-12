import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  constructor(private router:Router) {
    router.navigate(["/"]);
   }
  ngOnInit() {
  }

}
