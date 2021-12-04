import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import * as admin from 'firebase-admin';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService)

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
      privateKey: configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
      clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
    }),
    databaseURL: 'https://anijouhou.firebaseio.com'
  })

  app.enableCors()
  
  await app.listen(3000);
}
bootstrap();
