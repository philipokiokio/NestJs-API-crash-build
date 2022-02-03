import { Injectable } from '@nestjs/common';
import { students } from "../db";
import { CreateStudentDto, FindStudentResponseDto, studentResponseDto, UpdateStudentDto } from './dto/student.dto';
import {v4 as uuid}  from "uuid"
import {findTeacherResponseDto} from "../teachers/dto/teachers.dto"


@Injectable()
export class StudentsService {
    private students = students;

    getStudents():FindStudentResponseDto[]{

        return this.students
    }


    getStudentById(studentId:string):FindStudentResponseDto{
        return this.students.find(student =>{
            return student.id === studentId
        })
    }

    createStudent(payload:CreateStudentDto):studentResponseDto{
        
        let newStudent ={
            id: uuid(),
            ...payload
        }

        students.push(newStudent);
        return newStudent
    }
    updateStudent(studentId:string,payload:UpdateStudentDto){


        let updateStudent:studentResponseDto = {
            id: studentId,
            ...payload
        }
        const updatedStudentList = this.students.map((student)=>{
            if(student.id === studentId){
                updateStudent
                return updateStudent
            }else return student
        });
        this.students = updatedStudentList
        return updateStudent;

        }


    getStudentbyTeacherId(teacherId:string):FindStudentResponseDto[]{
        return this.students.filter(student =>{
            return student.teacher === teacherId
        })
    }


    updatedStudent(teacherId:string, studentId: string, payload:UpdateStudentDto){
        let updatedStudent:studentResponseDto;

        const updatedStudentList = this.students.map((student)=>{
            if(student.id ===studentId){
                updatedStudent= {
                    ...student,
                    teacher:teacherId
                }
                return updatedStudent
            }else return student;
        });
        this.students = updatedStudentList;
        return updatedStudent
    }
}


