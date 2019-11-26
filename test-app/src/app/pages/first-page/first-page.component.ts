import {Component, OnDestroy, OnInit} from '@angular/core';
import {TsumService} from "../../services/tsum.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidateFIO} from "../../validators";
import {Router} from "@angular/router";
import {untilDestroyed} from "ngx-take-until-destroy";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit, OnDestroy {

  form: FormGroup;

  tryCount = 3;

  genderError = false;

  viewError = false;

  constructor(
    public tsumService: TsumService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.form.get('gender').valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(() => this.genderError = false)
    this.form.get('birthday').valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(data => {
      if (this.tsumService.isChild(data)) {
        this.form.controls['status'].clearValidators()
      } else {
        this.form.controls['status'].setValidators(Validators.required);
      }
    })
  }

  ngOnDestroy(): void {
  }

  createForm() {
    this.form = this.fb.group({
      fio: new FormControl('', [
        Validators.required,
        ValidateFIO
      ]),
      birthday: new FormControl(null, [
        Validators.required
      ]),
      gender: new FormControl(null, []),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      comment: new FormControl('', []),
      status: new FormControl(null, []),
      childrenCount: new FormControl(0, []),
    });
  }

  goNext() {
    if (this.form.invalid) {
      this.tryCount--;
      if (!this.form.get('gender').value) {
        this.genderError = true;
        this.viewError = true;
      }
      if (this.tryCount === 0) {
        this.createForm();
        this.tryCount = 3;
      }
    } else {
      this.tsumService.setData(this.form.value);
      this.router.navigate(['secondPage']);
    }
  }
}
