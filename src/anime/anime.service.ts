import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/firestore/firestore.service';

@Injectable()
export class AnimeService {
  constructor(private readonly firestoreService: FirestoreService) {}
  
  findAll() {
    return this.firestoreService.findAll()
  }

}
