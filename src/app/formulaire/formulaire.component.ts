import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import CVData from '../cv/cv';
import { Store } from '@ngrx/store';
import { updateCv, updateMyProjectGit } from '../store/cv.actions';
import { GithubApiService } from '../github-api.service';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {
  //@Output() dataform  = new EventEmitter<CVData>();
  competances: string[] = [];
  newCompetance: string = "";
  langues: string[] = [];
  newLangue: string = "";
  cis: string[] = [];
  newCI: string = "";
  aes: string[] = [];
  newAE: string = "";
  etudes: any[] = [];
  experiences: any[] = [];
  color: any;

  githubData : any = {}

 
  constructor(private store: Store<{ cvStore: CVData }>,private githubApiService:GithubApiService) { }
  addExperience() {
    this.experiences.push({
      date_debut: '',
      date_fin: '',
      title_experience: '',
      company_experience: '',
      desc_experience:'',
    });
  }
  
  getRepo(myPseudo:string){
   this.githubApiService.getMyRepo(myPseudo).then(response => {
    console.log(response.data)
    this.githubData = response.data
    this.store.dispatch(updateMyProjectGit( {myProjectGit : response.data } ));

   }).catch(error=> console.log(error));
   
  }

  removeExperience(index: number) {
    this.experiences.splice(index, 1);
  }

  addEtude() {
    this.etudes.push({
      date_debut: '',
      date_fin: '',
      title_etude: '',
      local_etude: '',

    });
  }
  removeEtude(index: number) {
    this.etudes.splice(index, 1);
  }
  addAE() {
    if (this.newAE.trim() !== '') {
      this.aes.push(this.newAE);
      this.newAE = '';
    }
  }
  removeAE(index: number) {
    this.aes.splice(index, 1);
  }
  addCI() {
    if (this.newCI.trim() !== '') {
      this.cis.push(this.newCI);
      this.newCI = '';
    }
  }
  removeCI(index: number) {
    this.cis.splice(index, 1);
  }
  addCompetance() {
    if (this.newCompetance.trim() !== '') {
      this.competances.push(this.newCompetance);
      this.newCompetance = '';
    }
  }

  removeCompetance(index: number) {
    this.competances.splice(index, 1);
  }
  addLangue() {
    if (this.newLangue.trim() !== '') {
      this.langues.push(this.newCompetance);
      this.newLangue = '';
    }
  }

  removeLangue(index: number) {
    this.langues.splice(index, 1);
  }

  afficherData(
    nom: string,
    prenom: string, 
    email: string, 
    telephone: string, 
    description: string, 
  ) {
    let cv: CVData = {
      nom,
      prenom,
      email,
      color: this.color,
      telephone,
      description,
      competances: this.competances,
      langues: this.langues,
      cis: this.cis,
      aes: this.aes,
      etudes: this.etudes.map(etude => ({
        date_debut: etude.date_debut,
        date_fin: etude.date_fin,
        title_etude: etude.title_etude,
        local_etude: etude.local_etude,
      })),
      experiences: this.experiences.map(experience => ({
        date_debut: experience.date_debut,
        date_fin: experience.date_fin,
        title_experience: experience.title_experience,
        company_experience: experience.company_experience,
        desc_experience: experience.desc_experience,
            })),      
    };

    // this.dataform.emit(cv); 
    this.store.dispatch(updateCv({ cv }));
  }
}











