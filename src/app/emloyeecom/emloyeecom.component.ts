import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EMPLOYEES} from '../data/employeelist';


@Component({
  selector: 'app-emloyeecom',
  templateUrl: './emloyeecom.component.html',
  styleUrls: ['./emloyeecom.component.css']
})
export class EmloyeecomComponent implements OnInit {

  constructor(private  router: Router) { }
  @Input()  employees: any;
  ngOnInit(): void {

  }



}
