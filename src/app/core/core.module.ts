import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { FeaturesComponent } from "./features/features.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    FeaturesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [CommonModule, CoreRoutingModule]
})
export class CoreModule {}
