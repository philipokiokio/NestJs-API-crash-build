import { Controller, Get, Post, Put, Body, Param, ParseUUIDPipe } from "@nestjs/common";
import { findTeacherResponseDto } from "./dto/teachers.dto";
import {TeachersService} from "./teachers.service";

@Controller('teachers')
export class TeacherController{
    constructor (private readonly teachersService:TeachersService ){

    }

    @Get()
    getTeachers():findTeacherResponseDto[]{
        return this.teachersService.getTeachers()
    }

    @Get('/:teacherId')
    getTeacherById(@Param('teacherId', new ParseUUIDPipe()) teacherId:string):findTeacherResponseDto{
        return this.teachersService.getTeacherById(teacherId)
    }


}
