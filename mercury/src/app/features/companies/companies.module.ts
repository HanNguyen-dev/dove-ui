import { NgModule } from "@angular/core";
import { CompaniesRoutingModule } from "./companies-routing.module";
import { CompaniesComponent } from "./companies.component";
import { TableModule } from "primeng/table";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    TableModule,
    ProgressSpinnerModule,
  ],
  declarations: [CompaniesComponent],
})
export class CompaniesModule { }