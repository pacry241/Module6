import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DiamondComponent} from './component/category-pawn/diamond/diamond.component';
import {BagComponent} from './component/category-pawn/bag/bag.component';
import {WatchComponent} from './component/category-pawn/watch/watch.component';
import {CameraComponent} from './component/category-pawn/camera/camera.component';
import {BikeComponent} from './component/category-pawn/bike/bike.component';
import {CarComponent} from './component/category-pawn/car/car.component';
import {EstateComponent} from './component/category-pawn/estate/estate.component';
import {LaptopComponent} from './component/category-pawn/laptop/laptop.component';
import {PhoneComponent} from './component/category-pawn/phone/phone.component';
import {BodyPageComponent} from './component/body-page/body-page.component';
import {GoldComponent} from "./component/category-pawn/gold/gold.component";
import {ApplianceComponent} from "./component/category-pawn/appliance/appliance.component";
import {ArtComponent} from "./component/category-pawn/art/art.component";


const routes: Routes = [
  {path: 'diamond', component: DiamondComponent},
  {path: 'bag', component: BagComponent},
  {path: 'watch', component: WatchComponent},
  {path: 'camera', component: CameraComponent},
  {path: 'bike', component: BikeComponent},
  {path: 'car', component: CarComponent},
  {path: 'estate', component: EstateComponent},
  {path: 'laptop-computer', component: LaptopComponent},
  {path: 'phone', component: PhoneComponent},
  {path: 'gold', component: GoldComponent},
  {path: 'appliance', component: ApplianceComponent},
  {path: 'art', component: ArtComponent},
  {path: '', component: BodyPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
