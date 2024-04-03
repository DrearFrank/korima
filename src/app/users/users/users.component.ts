import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../usuario.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Users} from "../usuarios-model";

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  products!: Product[];
  users!: Users[];
  formularioUsers: FormGroup;
  atributos!: Users[]; // atributos proviene de los servicios
  constructor(private userServices: UsuarioService, private formBuilder: FormBuilder) {
    this.formularioUsers = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: [''],
      email: ['', [Validators.required, Validators.email]],

    })
  }

  ngOnInit() {
    this.getDatos();
  }

  saveDataUser() {
    if (this.formularioUsers.valid) {
      this.userServices.save(this.formularioUsers);
      alert('guardado')
    } else {

    }
  }


  getDatos(): void {
    this.userServices.getAllUser().subscribe(atributos => {

        this.users = atributos
      }
    )
  }
}
