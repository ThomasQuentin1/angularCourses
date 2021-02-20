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
    {text: 'Welcome everybody in our blog, you will enjoy with us the passion for ..... We are a team of 4 students from Epitech and we have a tons of ... to present to you', cols: 4, rows: 1, color: ' #cf024f ', src: '', name: ''},
    {text: '', cols: 1, rows: 1, color: 'lightgreen', src: 'assets/quentin1.thomas.jpg', name: 'a'},
    {text: '', cols: 1, rows: 1, color: 'lightpink', src:'assets/raphael.giannone.jpg', name: 'b'},
    {text: '', cols: 1, rows: 1, color: '#DDBDF1', src: 'assets/arthur.de-rosny.jpg', name: 'b'},
    {text: '', cols: 1, rows: 1, color: '#f3ff77 ', src: 'assets/tom.florentin.jpg', name: 'c'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
