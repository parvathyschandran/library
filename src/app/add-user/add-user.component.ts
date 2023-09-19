import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
  allusers:any=[]
  constructor(private api:ApiService){}

  ngOnInit():void{
    this.api.getallusers().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allusers=res
      },
      error:(err:any)=>{
        console.log(err);    
      }
    })
  }

  removeuser(id:any){
    this.api.removeuser(id).subscribe({
      next:(result:any)=>{
        this.allusers=result
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
