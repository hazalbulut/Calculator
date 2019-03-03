import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'myapp';
  public number1:number;
  public number2:number;
  public result:number;
  public text:string;
  

  sum(){
  
  this.result = this.number1 + this.number2;
    this.text="The sum of "+this.number1+" and "+this.number2+" is "+this.result;
    
  }
  subtract(){   
    this.result = this.number1 - this.number2;
    this.text="Subtract "+this.number2+" from "+this.number1+" is "+this.result;
  }
  multi(){    
    this.result = this.number1 * this.number2;
    this.text="Multiply "+this.number1+" and "+this.number2+" is "+this.result;
  }
  division(){
    this.result = (this.number1)/(this.number2);
    this.text="Divide "+this.number1+" by "+this.number2+" is "+this.result;
  }
}
