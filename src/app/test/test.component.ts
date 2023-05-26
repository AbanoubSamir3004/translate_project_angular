import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {


  @HostListener('document:copy', ['$event'])
  onCopy(event: ClipboardEvent) {
    if (event.clipboardData) {
      this.text = event.clipboardData.getData('text');
    }
    console.log('Copied text:', this.text);
  }

  onDivClick(text: string) {
    const textToCopy = text;

    const clipboard = navigator.clipboard;

    clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied:', textToCopy);
    });
  }






  text: string = '';
  header: string = '';
  html: string = '';
  ts: string = '';

  constructor() { }

  ngOnInit() {
  }
  translateFun(text: string, header: string) {
    var y = text.replace(/[,؟ ?.’0123465798-=>'/!@#$%^&*()|+]/g, "");
    this.ts = `'${y}'=>'${text}',`;
    this.html = `{{ __( '${header}.${y}' ) }}`;
  }
}
