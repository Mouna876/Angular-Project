import { createReducer, on } from '@ngrx/store';
import { updateCv, updateMyProjectGit } from './cv.actions';
import CVData from '../cv/cv';

export const initialState: CVData={
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    color: '#4472C4',
  }
  
  export const cvReducer = createReducer(
    initialState,
    on(updateCv, (state, payload) => {
      console.log(payload);
      return { ...state, ...payload.cv }; 
    }),
    on(updateMyProjectGit, (state, payload) => {
      console.log(payload);
      console.log({ ...state, ...payload });
      return { ...state, ...payload }; 
    })
  );