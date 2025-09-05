import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SubMenu } from './sub-menu/sub-menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SubMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  showMenu = false;
}
