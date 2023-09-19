import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent {

  //formGroup
  registerForm = this.fb.group({
    //form array
    id: ['', (Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z0-9]*'))],
    username: ['', (Validators.required, Validators.pattern('[a-zA-Z ]*'))],
    bookname: ['', (Validators.required, Validators.pattern("[a-zA-Z0-9' ]*"))],
    number: ['', (Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*'))]
  })

  constructor(private fb: FormBuilder, private api: ApiService) {

  }

  borrowbook() {

    if(this.registerForm.valid){
      let id=this.registerForm.value.id
      let username=this.registerForm.value.username
      let bookname=this.registerForm.value.bookname
      let number=this.registerForm.value.number

      this.api.borrowbook(id,username,bookname,number).subscribe({
        next:(response:any)=>{
          console.log(response);
          alert(`Book has successfully taken by ${username}`)      
        },
        error:(err:any)=>{
          console.log(err);
          alert('Sorry !!!!! Book has already taken.')   
        }
      })
    }
    else{
      alert('Invalid form')
    }
  }
}

