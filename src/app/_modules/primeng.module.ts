import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

const primeModules = [
  ButtonModule,
  InputTextModule,
  TableModule,
  DialogModule,
  MessagesModule,
  MessageModule
];

@NgModule({
  imports:[...primeModules],
  exports:[...primeModules]
})
export class PrimeNgModule{

}
