import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent {
  allbooks:any=[]
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
