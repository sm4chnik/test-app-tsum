import {CanActivate, Router} from "@angular/router";
import {TsumService} from "./services/tsum.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class MyGuard implements CanActivate{

  constructor(public tsumService: TsumService, public router: Router) {}

  canActivate() : Observable<boolean> | boolean {
    if (this.tsumService.get('fio') &&
      this.tsumService.get('gender') &&
      this.tsumService.get('birthday') &&
      this.tsumService.get('email')
    ) {
      return true;
    }
    this.router.navigate(['']);
  }

}
