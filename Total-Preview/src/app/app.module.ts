import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { appRoutes } from './routes.routes';
import { ProductManagementModule } from './components/products-management/product-management.module';
import { LoginComponent } from './components/login/login.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AccountManagementGuard } from './services/guards/account-management.guard';
import { AccountInvalidComponent } from './components/account-invalid/account-invalid.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpMessageComponent } from './components/sign-up-message/sign-up-message.component';
import { SignUpSuccessComponent } from './components/sign-up-success/sign-up-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    AddAccountComponent,
    AccountInvalidComponent,
    SignInComponent,
    SignUpMessageComponent,
    SignUpSuccessComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductManagementModule ,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AccountManagementGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
