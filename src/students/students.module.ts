import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidStudentMiddleware } from '../common/middleware/validStudent.middleware';
import { StudentController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
    controllers:[StudentController],
    providers: [StudentsService],
    exports:[StudentsService]


})
export class StudentsModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path:"students/:studentId",
            method: RequestMethod.GET

        });
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path:"students/:studentId",
            method: RequestMethod.PUT

        });
    }
}
