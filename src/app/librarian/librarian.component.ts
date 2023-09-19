import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent {

  allbooks:any=[]
  allusers:any=[]
  constructor(private api:ApiService){}

  ngOnInit():void{
    this.api.getallbooks().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allbooks=res
      },
      error:(err:any)=>{
        console.log(err);    
      }
    })
  }

}


