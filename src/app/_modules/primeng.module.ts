import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

const primeModules = [
  ButtonModule,
  InputTextModule,
  TableModule,
  DialogModule
];

@NgModule({
  imports:[...primeModules],
  exports:[...primeModules]
})
export class PrimeNgModule{

}
