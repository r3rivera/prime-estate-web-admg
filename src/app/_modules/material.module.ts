import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';

const materialModules = [
  MatSliderModule

];

@NgModule({
  imports:[...materialModules],
  exports:[...materialModules]
})
export class AppMaterialModule{

}
