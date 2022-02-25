import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appService : AppService){
  }
  title = 'advice-generator';
  advice = ''
  adviceId = 0;
  isLoadingData = false;

  generateAdvice(){
    this.isLoadingData = true;
    this.appService.getNextAdvice().subscribe(res=>{
      if(res){
        this.advice = res.advice;
        this.adviceId = res.id;
        this.isLoadingData = false;
      }
    })
  }
  ngOnInit(): void {
    this.generateAdvice();
  }
}
