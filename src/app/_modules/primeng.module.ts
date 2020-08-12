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
import { DropdownModule } from 'primeng/dropdown'
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';


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
  InputNumberModule,
  DropdownModule,
  RadioButtonModule,
  BreadcrumbModule,
  MenubarModule
];

@NgModule({
  imports:[...primeModules],
  exports:[...primeModules]
})
export class PrimeNgModule{

}
