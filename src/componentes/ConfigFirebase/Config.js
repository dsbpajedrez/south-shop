import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyArBznHbnf-HGqA07oyUH7-MC5gbYq1VKY",
    authDomain: "e-comerse-b6bb2.firebaseapp.com",
    projectId: "e-comerse-b6bb2",
    storageBucket: "e-comerse-b6bb2.appspot.com",
    messagingSenderId: "962316751217",
    appId: "1:962316751217:web:cfc0494bcf87ace6aca6d0"
  };
export const credential = initializeApp(firebaseConfig);