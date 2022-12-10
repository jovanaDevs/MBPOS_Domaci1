import { Injectable } from '@angular/core';
import {collection, Firestore, collectionData, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Auth } from '@firebase/auth';
export interface Recepie {
  id?: number;
  title: string;
  description: string;
  difficulty: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getRecepies(){
    const recepies = collection(this.firestore, 'recepies');
    return collectionData(recepies, { idField: 'myId' });
    
  }
}
