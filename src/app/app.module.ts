import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyPageComponent } from './component/body-page/body-page.component';
import { PawnFormCustomerComponent } from './component/pawn-form-customer/pawn-form-customer.component';
import { ArticleComponent } from './component/article/article.component';
import { NewPawnComponent } from './component/new-pawn/new-pawn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyPageComponent,
    PawnFormCustomerComponent,
    ArticleComponent,
    NewPawnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
