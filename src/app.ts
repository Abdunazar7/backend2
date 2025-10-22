import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          "amqps://qgqgkacu:g6YBcofwzk096-x8MqFqzo7Ti_uqcxRa@cow.rmq2.cloudamqp.com/qgqgkacu",
        ],
        queue: "product_queue",
        queueOptions: {
          durable: false,
        },
      },
    }
  );

  app.listen()
  console.log("listen started")
}
bootstrap();
