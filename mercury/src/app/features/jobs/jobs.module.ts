import { NgModule } from "@angular/core";
import { JobsRoutingModule } from "./jobs-routing.module";
import { JobsComponent } from "./jobs.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    JobsRoutingModule,
    TableModule,
    ButtonModule,
    ProgressSpinnerModule,
    CommonModule,
  ],
  declarations: [JobsComponent],
})
export class JobsModule { }