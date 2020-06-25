import { Component, OnInit } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Usuario } from '../clases/Usuario';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { ConectaService } from '../servicios/conecta.service';

@Component({
  selector: 'app-consultar-personas',
  templateUrl: './consultar-personas.component.html',
  styleUrls: ['./consultar-personas.component.css']
})

export class ConsultarPersonasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'edad','direccion','editar'];
  dataSource: any[] = [];
 
  constructor(private router:Router,private conectaService: ConectaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  //este metodo esta en el componente conecta.service.ts
  //
  getPersonas() {
    		this.conectaService.getPersonas().subscribe((personas) => {
    			debugger;
    			this.dataSource = personas;
    		});
      }

  goToConsultar(user) {		
        this.router.navigate(["/crear-persona",user]);
      }
  
  
}
