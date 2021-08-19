import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { questions } from './questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(public http: HttpClient) { }

  getQuestionList():Observable<questions[]>{
    return this.http.get<questions[]>("/assets/questions.json");
  }
}


