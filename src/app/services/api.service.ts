import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getallbooks() {
    return this.http.get(`${this.base_url}/books/get-all-books`)
  }

  getallusers(){
    return this.http.get(`${this.base_url}/books/get-all-users`)
  }

  borrowbook(id?:any, username?: any, bookname?: any, number?: any) {
    const body = {
      id,
      username,
      bookname,
      number
    }
    return this.http.post(`${this.base_url}/books/borrow-book`, body)
  }

  addbook(id?:any,bookname?:any,publication?:any,author?:any,image?:any){
    const body={
      id,
      bookname,
      publication,
      author,
      image
    }
    return this.http.post(`${this.base_url}/books/add-book`,body)
  }

  removeuser(id:any){
    return this.http.delete(`${this.base_url}/books/remove-user/${id}`)
  }

}
