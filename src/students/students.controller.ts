import { Controller, Get,Post, Put, Req, Param, Body, ParseUUIDPipe } from "@nestjs/common";
import { CreateStudentDto, FindStudentResponseDto, studentResponseDto, UpdateStudentDto} from "./dto/student.dto"
import { StudentsService } from "./students.service"; import "./students.service"

@Controller('students')
export class StudentController {

    constructor(private readonly studentService:StudentsService){}
    
    @Get()
    getStudents():FindStudentResponseDto[]{
        return  this.studentService.getStudents()
    }
    @Get("/:studentId")
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string
        
        ):FindStudentResponseDto {
            console.log(studentId)
        return this.studentService.getStudentById(studentId)

    }
    @Post()
    createStudent (
        @Body() body:CreateStudentDto
    ):studentResponseDto {
        console.log(body)
        return this.studentService.createStudent(body)
    }

    @Put('/:studentId')
    updateStudent(
        @Body() body: UpdateStudentDto, @Param('studentId',new ParseUUIDPipe()) studentId: string
    ):studentResponseDto{
        return this.studentService.updateStudent(studentId,body)
    }


}

