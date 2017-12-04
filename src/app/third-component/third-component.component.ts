import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.scss']
})
export class ThirdComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute , private router : Router) { }

  ngOnInit() {
  }

}
