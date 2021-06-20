import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'mc-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  myForm: FormGroup;
  myFiled: FormControl;

  search$ = new Observable((observer) => {
    console.log('Start in observable');
    this.myFiled.valueChanges.subscribe((val) => {
      console.log('Value has changed');
      observer.next(val);
    });
  });
  //myFiled?.addEventListener('input', (event) => {
  //     //   observer.next(event);
  //     });
  //     console.log('End in observable');
  //   });

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      controlSearch: '',
    });
    this.myFiled = this.myForm.controls['controlSearch'] as FormControl;
  }

  ngOnInit(): void {
    console.log('Start subscribe');

    this.search$.subscribe((value) => {
      console.log(value);
    });

    console.log('End subscribe');
  }

  onSubmit(): void {
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
    console.log(this.myForm.controls['controlSearch'].value);

    const myFiled = this.myForm.controls['controlSearch'];
    console.log(myFiled.value);
  }
}
