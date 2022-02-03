import { Module } from '@nestjs/common';
import { StudentsModule } from 'src/students/students.module';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
    imports: [StudentsModule],
    controllers: [TeacherController,StudentTeacherController],
    providers: [TeachersService]
})
export class TeachersModule {}
