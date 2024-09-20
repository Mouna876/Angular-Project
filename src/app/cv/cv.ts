interface CVData {
    nom: string;
    prenom: string;
    titre?: string;
    email: string;
    color?: string;
    telephone: string;
    //a propos
    description?: string;
    //experience   
    experience_debut1?: string;experience_fin1?: string;experience_debut2?: string;experience_fin2?: string;titlejob1?: string;titlejob2?: string;descjob1?: string;descjob2?: string;societeEx1?: string,societeEx2?: string
    //left-column
    competances?: string[];
    langues?: string[];
    cis?: string[];
    aes?: string[];
    myProjectGit?: [];
    //etude
    etudes?: {
      date_debut: string;
      date_fin: string;
      title_etude: string;
      local_etude: string;
    }[];
    experiences?: {
      date_debut: string;
      date_fin: string;
      title_experience: string;
      company_experience: string;
      desc_experience: string;
    }[];  }  
export default CVData;
