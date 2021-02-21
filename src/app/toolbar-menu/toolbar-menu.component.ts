import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css']
})
export class ToolbarMenuComponent implements OnInit {
  showFiller = false;
  isLogged = false;
  constructor() { }

  ngOnInit(): void {
  }

}
