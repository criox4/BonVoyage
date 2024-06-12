import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'all-packages', component: AllPackagesComponent },
  { path: 'package/:id', component: IndividualPackageComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'checkout-confirmation', component: CheckoutConfirmationComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'my-wishlist', component: MyWishlistComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', redirectTo: '' }  // redirect to homepage for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
