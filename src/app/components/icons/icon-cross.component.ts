import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-icon-cross',
  template: `
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 18 18" style="cursor: pointer">
      <path
        [attr.fill]="color"
        fill-rule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCrossComponent {
  @Input() size: string | number = 20;
  @Input() color: string = '#494C68';
}
