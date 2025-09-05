import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  imports: [RouterLink],
  templateUrl: './sub-menu.html',
  styleUrl: './sub-menu.scss'
})
export class SubMenu {
  @Input({required: true}) showMenu = false;
}
