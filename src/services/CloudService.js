import { initializeApp } from 'firebase/app';

class CloudService {
  constructor() {
    this._config = {
      apiKey: process.env.API_KEY,
      authDomain: 'final-project-e13c5.firebaseapp.com',
      projectId: 'final-project-e13c5',
      storageBucket: 'final-project-e13c5.appspot.com',
      messagingSenderId: '564836774915',
      appId: '1:564836774915:web:85aa8c00b98a762051ca36',
    };
    this.app = initializeApp(this._config);
  }
}

export const cloudService = new CloudService();
