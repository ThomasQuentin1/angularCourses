import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export const ADMIN_USER = "admin"
export const ADMIN_PASS = "pass"

@Injectable({
  providedIn: 'root'
})
export class IsAdminLoggedGuard implements CanActivate {
  constructor(private cookiesService : CookieService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.cookiesService.get("session") === "admin"
  }
  
}
