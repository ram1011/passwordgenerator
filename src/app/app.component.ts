import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeletters = false;
  includenumbers = false;
  includesymbols = false;
  passwordlength = 0;
  onButtonClick() {
    let generatedpwd = '';
    let validchars = '';
    const numbers = '1234567890';
    const letters = 'abcdefghijklmn';
    const symbols = '!@#$%^&*()';
    if (this.includeletters) {
      validchars += letters;
    }
    if (this.includenumbers) {
      validchars += numbers;
    }
    if (this.includesymbols) {
      validchars += symbols;
    }
    for (let i = 0; i < this.passwordlength; i++) {
      const index = Math.floor(Math.random() * validchars.length);
      generatedpwd += validchars[index];
    }
    this.password = generatedpwd;
  }
  useletters() {
    this.includeletters = !this.includeletters;
  }
  usenumbers() {
    this.includenumbers = !this.includenumbers;
  }
  usesymbols() {
    this.includesymbols = !this.includesymbols;
  }
  onchangelength(value : string) {
    const parsedval =  parseInt(value);
    if(!isNaN(parsedval)){
      this.passwordlength = parsedval;
    }
    else{
      alert('please enter number only')
    }
  }
}
