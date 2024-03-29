import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartHeaderComponent } from './shopping-cart-header/shopping-cart-header.component';
import { ShoppingCartWrapperComponent } from './shopping-cart-wrapper/shopping-cart-wrapper.component';
import { ShoppingCartFooterComponent } from './shopping-cart-footer/shopping-cart-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemResumeComponent } from './shopping-cart-wrapper/item-resume/item-resume.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  // Para cada rota, especificamos um componente
  { path: 'home', component: HomeComponent },
  // Pagina/Componente dos detalhes da tarefa.
  { path: 'cart', component: ShoppingCartWrapperComponent },
  // { path: 'cart', component: TodoEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartHeaderComponent,
    ShoppingCartWrapperComponent,
    ShoppingCartFooterComponent,
    ItemResumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
