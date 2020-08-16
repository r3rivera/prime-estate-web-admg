import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { OverlayModule } from '@angular/cdk/overlay';

const materialModules = [
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatSliderModule,
  MatButtonModule,
  MatButtonToggleModule,
  OverlayModule

];

@NgModule({
  imports:[...materialModules],
  exports:[...materialModules]
})
export class AppMaterialModule{

}
