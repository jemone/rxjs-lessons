import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
