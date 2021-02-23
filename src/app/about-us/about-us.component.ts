import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  src: string;
  name: string;
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'We are a team of 4 people managing Bloggy ! Enjoy our passion as much as we enjoy it !', cols: 4, rows: 0.5, color: ' #2a9d8f ', src: '', name: ''},
    {text: '', cols: 1, rows: 1, color: '#f4a261', src: 'assets/quentin1.thomas.jpg', name: ''},
    {text: '', cols: 1, rows: 1, color: '#264653', src:'assets/raphael.giannone.jpg', name: ''},
    {text: '', cols: 1, rows: 1, color: '#e9c46a', src: 'assets/arthur.de-rosny.jpg', name: ''},
    {text: '', cols: 1, rows: 1, color: '#e76f51 ', src: 'assets/tom.florentin.jpg', name: ''},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
