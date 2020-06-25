import { Component, OnInit,Input,Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { Usuario } from '../clases/Usuario';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  
    constructor(private fb: FormBuilder,private route: ActivatedRoute){}
    //@Input() modificado: Usuario;
  
    usuarioA: Usuario;
    
     altaForm: FormGroup;
     parametro:any;
    persona: Usuario;
     //persona: any;
  
    
    ngOnInit(): void {
     this.parametro= this.route.snapshot.params;
  
    if (Object.keys(this.parametro).length) {
      this.persona = this.parametro;
    }
    
  
    this.initForm(this.persona);
  }
  initForm (modificado : Usuario){

      this.altaForm = this.fb.group({
      nombre : [modificado.nombre,Validators.required],
      apellido : [modificado.apellido, Validators.required],
      edad : [modificado.edad],
      direccion : [modificado.direccion],
      }); 
  };
  
    submit(){
      
    }
  
  // agregar(){
      
      

    // this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.descripcion, this.articuloselect.precio));
    // this.tabla1.renderRows();
    // this.articuloselect = new Articulo(0, "", 0);
  }
   
  
  