import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { FeaturesComponent } from "./features/features.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoreRoutingModule } from "./core-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    FeaturesComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule, CoreRoutingModule]
})
export class CoreModule {}
