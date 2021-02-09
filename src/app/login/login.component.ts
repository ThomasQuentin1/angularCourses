import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ADMIN_USER, ADMIN_PASS } from '../is-admin-logged.guard';



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private cookieService : CookieService) {}
  ngOnInit(): void {
    if (this.cookieService.get("session") === ADMIN_USER)
    this.router.navigate(["/admin"]);
  }

  title = "Login";
  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });
  submit() {
    if (this.form.valid) {
      if  (this.form.value.username === ADMIN_USER && this.form.value.password === ADMIN_PASS)
       {
         this.cookieService.set("session", this.form.value.username);
         this.router.navigate(["/admin"]);
       }
    }
  }
  @Input() error: string | null;
}
