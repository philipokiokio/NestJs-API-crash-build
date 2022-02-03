import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from "@nestjs/common";
import { StudentsService } from "../students/students.service";
import { UpdateStudentDto, FindStudentResponseDto, studentResponseDto } from "../students/dto/student.dto"


@Controller('teachers/:teacherId')
export class StudentTeacherController{

    constructor(private readonly studentService:StudentsService){}

    @Get("/students")

    getTeacherStudentRel(
        @Param('teacherId', new ParseUUIDPipe()) teacherId:string
    ):FindStudentResponseDto[]{
        return this.studentService.getStudentbyTeacherId(teacherId)
    }

    @Put('/students/:studentId')
    updateTeacherStudent(
        @Body() body:UpdateStudentDto,
        @Param('teacherId', new ParseUUIDPipe()) teacherId:string,
        @Param('studentId',new ParseUUIDPipe()) studentId:string
    ):studentResponseDto{
        return this.studentService.updatedStudent(teacherId, studentId, body)
    }

}