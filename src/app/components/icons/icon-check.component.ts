import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-icon-check',
  template: `
    <svg [attr.width]="width" [attr.height]="height" viewBox="0 0 11 9">
      <path fill="none" [attr.stroke]="color" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
    </svg>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCheckComponent implements OnInit {
  @Input() width: string | number = 7.5;
  @Input() height: string | number = 5;
  @Input() color: string = 'white';

  constructor() {}

  ngOnInit(): void {}
}
