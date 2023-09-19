import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

   //formGroup
   registerForm = this.fb.group({
    //form array
    id: ['', (Validators.required, Validators.minLength(5),Validators.maxLength(5), Validators.pattern('[a-zA-Z0-9]*'))],
    bookname: ['', (Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'))],
    publication: ['', (Validators.required)],
    author: ['', (Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'))],
    image: ['', (Validators.required)]
  })

  constructor(private fb: FormBuilder,private api:ApiService) {
  }

  addbook(){
    if(this.registerForm.valid){
      let id=this.registerForm.value.id
      let bookname=this.registerForm.value.bookname
      let publication=this.registerForm.value.publication
      let author=this.registerForm.value.author
      let image=this.registerForm.value.image

      this.api.addbook(id,bookname,publication,author,image).subscribe({
        next:(res:any)=>{
          console.log(res);  
          alert('New book added successfully !!!!')   
        },
        error:(err:any)=>{
          console.log(err); 
        }
      })
    }
    else{
      alert('invalid')
    }
  }
}
