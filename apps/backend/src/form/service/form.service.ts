import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { FormEntity } from "../models/form.entity";
import { Form } from "../models/form.intarface";

@Injectable()
export class FormService {
    [x: string]: any;

    constructor(
        @InjectRepository(FormEntity) private readonly formRepository: Repository<FormEntity>
    ) {}

    create(form: Form): Observable<Form> {
        return from(this.formRepository.save(form));
    }

    findOne(id: number): Observable<Form> {
        return from(this.formRepository.findOne({id}));
    }

    findAll(): Observable<Form[]> {
        return from(this.formRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.formRepository.delete(id));
    }

    updateOne(id: number, form: Form): Observable<any> {
        return from(this.formRepository.update(id, form));
    }

}
