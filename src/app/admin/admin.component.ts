import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

export const displayDateTime = (inputDate: string | Date) =>
  (inputDate instanceof Date
    ? inputDate
    : new Date(inputDate)
  ).toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

export interface ArticleDataRow {
  name: string;
  categories: string[];
  creationDate: Date;
  lastEditDate: Date;
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const ELEMENT_DATA: ArticleDataRow[] = [
  {
    name: "Angular élue technologie la plus complexe du monde",
    categories: ["web", "angular", "typescript"],
    creationDate: randomDate(new Date(2018, 0, 1), new Date()),
    lastEditDate: randomDate(new Date(2018, 0, 1), new Date())
  },
  {
    name: "Deux développeurs react tentent le angular (sans grand succès)",
    categories: ["web", "react", "javascript"],
    creationDate: randomDate(new Date(2018, 0, 1), new Date()),
    lastEditDate: randomDate(new Date(2018, 0, 1), new Date())
  },
  {
    name: "Un jeune flashé a 363km/h a bord de sa CBR1000RR dans Plainfaing",
    categories: ["moto", "jeune", "radar"],
    creationDate: randomDate(new Date(2018, 0, 1), new Date()),
    lastEditDate: randomDate(new Date(2018, 0, 1), new Date())
  }
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.adminService.getArticles().subscribe(data => {
      this.dataSource = Object.values(data).map(e => ({...e, categories: e.categories.join(", "), lastEditDate: displayDateTime(e.lastEditDate), creationDate: displayDateTime(e.creationDate)}))
  })}

  displayedColumns: string[] = ['name', 'categories', 'creationDate', 'lastEditDate'];
  dataSource = []

}
