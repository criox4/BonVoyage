import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AllPackagesComponent } from './pages/all-packages/all-packages.component';
import { IndividualPackageComponent } from './pages/individual-package/individual-package.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CheckoutConfirmationComponent } from './pages/checkout-confirmation/checkout-confirmation.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { MyWishlistComponent } from './pages/my-wishlist/my-wishlist.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageHeroComponent } from './components/homepage-hero/homepage-hero.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AllPackagesComponent,
    IndividualPackageComponent,
    SignUpComponent,
    SignInComponent,
    CheckoutConfirmationComponent,
    MyBookingsComponent,
    MyWishlistComponent,
    AdminDashboardComponent,
    FaqComponent,
    FooterComponent,
    HomepageHeroComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
