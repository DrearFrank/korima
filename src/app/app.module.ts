import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulo-inicial/home/home.component';
import { UsersComponent } from './users/users/users.component';
import { NavComponent } from './nav/nav.component';
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import { ClasesComponent } from './clases/clases/clases.component';
import { HttpClientModule } from '@angular/common/http';
import {UsuarioService} from "./users/usuario.service";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    NavComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,    CommonModule,
    TableModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
