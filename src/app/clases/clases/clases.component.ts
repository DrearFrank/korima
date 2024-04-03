import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent {
  clases: any;
  formularioUsers: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioUsers = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      duracion: ['', Validators.required],
      instructor: ['', Validators.required],
      nivel: ['', Validators.required]
    })
  }

  saveDataUser() {
    if (this.formularioUsers.valid) {
      //  this.userServices.save(this.formularioUsers);
      alert('guardado')
    } else {

    }
  }

}
