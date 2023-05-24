import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyPageComponent } from './component/body-page/body-page.component';
import { PawnFormCustomerComponent } from './component/pawn-form-customer/pawn-form-customer.component';
import { ArticleComponent } from './component/article/article.component';
import { BikeComponent } from './component/category-pawn/bike/bike.component';
import { CarComponent } from './component/category-pawn/car/car.component';
import { CameraComponent } from './component/category-pawn/camera/camera.component';
import { PhoneComponent } from './component/category-pawn/phone/phone.component';
import { BagComponent } from './component/category-pawn/bag/bag.component';
import { EstateComponent } from './component/category-pawn/estate/estate.component';
import { DiamondComponent } from './component/category-pawn/diamond/diamond.component';
import { LaptopComponent } from './component/category-pawn/laptop/laptop.component';
import { WatchComponent } from './component/category-pawn/watch/watch.component';
import { GoldComponent } from './component/category-pawn/gold/gold.component';
import { ApplianceComponent } from './component/category-pawn/appliance/appliance.component';
import { ArtComponent } from './component/category-pawn/art/art.component';
import { ScrollToTopComponent } from './component/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyPageComponent,
    PawnFormCustomerComponent,
    ArticleComponent,
    BikeComponent,
    CarComponent,
    CameraComponent,
    PhoneComponent,
    BagComponent,
    EstateComponent,
    DiamondComponent,
    LaptopComponent,
    WatchComponent,
    GoldComponent,
    ApplianceComponent,
    ArtComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
