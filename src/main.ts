import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["error", "warn"],
  });
  app.setGlobalPrefix("api")
  await app.listen(3002, ()=>{
    console.log(`Backend-2 3002 portda ishga tushdi`)
  });
}
bootstrap();
