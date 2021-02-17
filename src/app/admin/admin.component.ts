import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

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
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  dataSource: any[];
  displayedColumns: string[] = [
    "name",
    "categories",
    "creationDate",
    "lastEditDate",
    "update",
    "delete",
  ];

  constructor(private router: Router, private adminService: AdminService,  private notifierService: NotifierService) {}
  ngOnInit(): void {
    this.adminService.getArticles().subscribe((data) => {
      this.dataSource = Object.keys(data).reduce((acc, curr) => {
        acc.push({
          id: curr,
          ...data[curr],
          categories: data[curr].categories.join(", "),
          lastEditDate: displayDateTime(data[curr].lastEditDate),
          creationDate: displayDateTime(data[curr].creationDate),
        });
        return acc;
      }, []);
    });
  }

  deleteArticle(event: any): void {
    this.notifierService.notify("success", "the article has been deleted");

    this.adminService.deleteArticle(event.id);
    this.dataSource = this.dataSource.filter((e) => e.id != event.id);
  }

  updateArticle(event: any): void {
    // push router with event.id
    this.router.navigate(["./editor", { id: event.id }]);
  }
}
