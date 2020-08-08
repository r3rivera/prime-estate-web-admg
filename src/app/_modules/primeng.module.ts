import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber'

const primeModules = [
  ButtonModule,
  InputTextModule,
  TableModule,
  DialogModule,
  MessagesModule,
  MessageModule,
  SidebarModule,
  ToolbarModule,
  MenuModule,
  FileUploadModule,
  InputNumberModule
];

@NgModule({
  imports:[...primeModules],
  exports:[...primeModules]
})
export class PrimeNgModule{

}
