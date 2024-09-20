import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor() { }

  getSearch(){
   return axios.get("https://api.github.com/search/repositories?q=angular",{headers: {
      Accept: 'application/vnd.github.v3+json',
    }})
  }

  getMyRepo(myPseudo:string){
    return axios.get(`https://api.github.com/users/${myPseudo}/repos`,{headers: {
       Accept: 'application/vnd.github.v3+json',
     }})
   }
  
}
