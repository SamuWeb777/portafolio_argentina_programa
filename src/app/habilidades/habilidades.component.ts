import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
 constructor(private _CargarScripts:CargarScriptsService){
   _CargarScripts.Carga(["habilidades"]);
 
}  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
