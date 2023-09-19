import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { ReadersComponent } from './readers/readers.component';
import { FaqComponent } from './faq/faq.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"",redirectTo:'home',pathMatch:'full'
  },
  {
    path:"library/librarian",component:LibrarianComponent
  },
  {
    path:"library/readers",component:ReadersComponent
  }, 
  {
    path:"library/faq",component:FaqComponent
  },
  {
    path:"library/add-book",component:AddBookComponent
  },
  {
    path:"library/borrow-book",component:BorrowBookComponent
  },
  {
    path:"library/add-user",component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
