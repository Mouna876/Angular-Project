import { createAction ,props } from '@ngrx/store';
import CVData from '../cv/cv';
export const updateCv = createAction('[Cv Component] Update' , props < {cv : CVData}>());
export const updateMyProjectGit = createAction('[Cv Component] updateMyProjectGit' , props < {myProjectGit : []}>());
