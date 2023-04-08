import { Component, Output} from '@angular/core';


@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {

  userInput:string = '';
  oddInputs:string[] = [];
  evenInputs:string[] = [];

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.userInput = target.value
  }

  onSubmit() {
    if (this.userInput.length % 2 === 0) {    //even length
      // this.onAddEvenWord(this.userInput);
      this.evenInputs.push(this.userInput) 
    } else {     // odd length
      // this.onAddOddWord(this.userInput)
      this.oddInputs.push(this.userInput)
    }
  }

  // onAddEvenWord(word: string) {
  //   const compDiv = document.getElementById('comp2Div');
  //   if (compDiv) {
  //     compDiv.innerHTML += '<span class="row">'+ word +'</span>';
  //   }
  // }

  // onAddOddWord(word: string) {
  //   const compDiv = document.getElementById('comp1Div');
  //   if (compDiv) {
  //     compDiv.innerHTML += '<span class="row">'+ word +'</span>';
  //   }
  // }

 
}
