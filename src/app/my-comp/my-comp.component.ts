import { Component} from '@angular/core';


@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {

  userInput = '';

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.userInput = target.value
  }

  onSubmit() {
    if (this.userInput.length % 2 === 0) {    //even length
      this.onAddEvenWord(this.userInput);
    } else {     // odd length
      this.onAddOddWord(this.userInput)
    }
  }

  onAddEvenWord(word: string) {
    const compDiv = document.getElementById('comp2Div');
    if (compDiv) {
      compDiv.innerHTML += '<span class="row">'+ word +'</span>';
    }
  }

  onAddOddWord(word: string) {
    const compDiv = document.getElementById('comp1Div');
    if (compDiv) {
      compDiv.innerHTML += '<span class="row">'+ word +'</span>';
    }
  }

 
}
