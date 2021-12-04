import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin'

@Injectable()
export class FirestoreService {
  
  async findAll() {
    const firestore = new admin.firestore.Firestore()
    const animeList = await firestore.collection('anime').get()

    return animeList.docs
  }

}
