import { Component, OnInit } from '@angular/core';
import { questions } from '../questions.model';
import { QuestionsService } from '../questions.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  questionArray:Array<questions>=[];
  flag:number=0;
  questionRef:FormGroup;
  show:boolean=false;
  constructor(public questionsSer:QuestionsService,fb:FormBuilder) { 
    this.questionRef=fb.group({ans:""});
  }
  
  ngOnInit(): void {
    this.questionsSer.getQuestionList().subscribe(result=>{
      for(let item of result){
        this.questionArray.push(item);
      }
    });
  }
  checkAnswer(correctAns:string):void{
    let ansValue = this.questionRef.value.ans;
    if(ansValue==correctAns){
      this.flag++;
    }
  }
  finalScore(){
    let percent=(this.flag/10)*100;
    if(percent>70){
      alert(percent+"% \n PASS");
    }
    else{
      alert(percent+"% \n FAIL");
    }
    this.show=true;
  }
}
