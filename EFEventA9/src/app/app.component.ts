import { Component } from '@angular/core';
// import { SlideInOutAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [SlideInOutAnimation]
})
export class AppComponent {
  title = 'EFEventA9';
  // animationState = 'in';

  // toggleShowDiv(divName: string) {
  //   if (divName === 'divA') {
  //     console.log(this.animationState);
  //     this.animationState = this.animationState === 'out' ? 'in' : 'out';
  //     console.log(this.animationState);
  //   }
  // }
}
