import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(private _CargarScripts:CargarScriptsService){
    _CargarScripts.Carga(["login"]);
  }
  ngOnInit(): void {
    
  }

 
}
