import { Injectable } from '@nestjs/common';
import{ teachers } from "../db"
import { findTeacherResponseDto, teacherResponseDto, updateStudentTeacherDto } from './dto/teachers.dto';

@Injectable()
export class TeachersService {


    private teachers= teachers;

    getTeachers():findTeacherResponseDto[]{
        return this.teachers
    }

    getTeacherById(teacherId:string):findTeacherResponseDto{
    return this.teachers.find((teacher)=>{
        if (teacher.id == teacherId){
            return teacher;
        }
    })
    }


}
