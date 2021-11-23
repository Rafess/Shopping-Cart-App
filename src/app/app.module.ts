import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartHeaderComponent } from './shopping-cart-header/shopping-cart-header.component';
import { ShoppingCartWrapperComponent } from './shopping-cart-wrapper/shopping-cart-wrapper.component';
import { ShoppingCartFooterComponent } from './shopping-cart-footer/shopping-cart-footer.component';

const appRoutes: Routes = [
  // Para cada rota, especificamos um componente
  { path: 'home', component: ShoppingCartWrapperComponent },
  // Pagina/Componente dos detalhes da tarefa.
  // { path: 'item/:id', component: TodoDetailComponent },
  // { path: 'cart', component: TodoEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartHeaderComponent,
    ShoppingCartWrapperComponent,
    ShoppingCartFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
