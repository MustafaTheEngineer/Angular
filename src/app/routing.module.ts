import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { ProductComponent } from "./products/product/product.component";
import { ProductsComponent } from "./products/products.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // localhost: 4200
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent, children: [
      { path: ':/page:/order', component: ProductsComponent },
      { path: ':id', component: ProductComponent },
      { path: ':id/edit', component: EditProductComponent },
      ] 
    },
    { path: 'users', component: UsersComponent, children: [
        { path: 'users/:name', component: UserComponent },
      ] 
    },
    
    { path: '**', component: NotFoundComponent } 
  ];

@NgModule({
    imports: [
    RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { 
    
}