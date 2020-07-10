import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.css'],
})
export class TechCardComponent implements OnInit {
  @Input() tech;
  constructor() {}

  ngOnInit(): void {}
}
