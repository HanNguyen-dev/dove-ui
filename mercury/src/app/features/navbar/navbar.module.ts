import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    ToolbarModule,
    ButtonModule,
    RouterModule,
    CommonModule,
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule { }