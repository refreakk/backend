import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Observable } from "rxjs";
import { Form } from "../models/form.intarface";
import { FormService } from "../service/form.service";

@Controller('forms')
export class FormController {

    constructor(private formService: FormService) {}

    @Post()
    create(@Body()form: Form): Observable<Form> {
        return this.formService.create(form);
    }

    @Get(':id')
    findOne(@Param() params): Observable<Form> {
        return this.formService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<Form[]> {
        return this.formService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id')id: string): Observable<Form> {
        return this.formService.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id')id: string, @Body() form: Form): Observable<any> {
        return this.formService.updateOne(Number(id),form);
    }

}