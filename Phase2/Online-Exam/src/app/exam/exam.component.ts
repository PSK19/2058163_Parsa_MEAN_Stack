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
  questionArray: Array<questions> = [];
  flag: number = 0;
  questionRef: FormGroup;
  show: boolean = false;
  showExam: boolean = true;
  finalMessage: string = "";
  showFinal: boolean = false;
  passedExam: boolean = true;
  percent: number = 0;
  qNumbers:Array<boolean>=[true, true, true, true, true, true, true, true, true, true];
  lastUsed:number=0;
  constructor(public questionsSer: QuestionsService, fb: FormBuilder) {
    this.questionRef = fb.group({ ans: "" });
  }

  ngOnInit(): void {
    this.questionsSer.getQuestionList().subscribe(result => {
      for (let item of result) {
        this.questionArray.push(item);
      }
    });
  }
  checkAnswer(correctAns: string, qNum:string): void {
    let ansValue = this.questionRef.value.ans;
    this.lastUsed=parseInt(qNum)-1;
    if (ansValue == correctAns) {
      this.flag++;
    }
    else{
      this.qNumbers[parseInt(qNum)-1] = false;
    }
  }
  finalScore() {
    if (confirm("Are you sure you want to submit the exam. All answers will be finalized!")) {
      this.percent = (this.flag / 10) * 100;
      this.show = true;
    }
  }
  viewResults() {
    if (this.percent >= 70) {
      this.finalMessage = this.percent + "% \n PASS";
      this.passedExam = true;
    }
    else {
      this.finalMessage = this.percent + "% \n FAIL";
      this.passedExam = false;
    }
    this.showExam = false;
    this.showFinal = true;
  }
  showCorrect(qNum:string):boolean{
    return this.qNumbers[parseInt(qNum)-1];
  }
}

