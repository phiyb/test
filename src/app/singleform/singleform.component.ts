import { Component, OnInit } from '@angular/core';
import {EMPLOYEES} from '../data/employeelist';
import {Employee} from '../model/emloyee';
import {NzTreeNodeKey} from 'ng-zorro-antd/core/tree';
import {NzTSType} from 'ng-zorro-antd/core/types';


@Component({
  selector: 'app-singleform',
  templateUrl: './singleform.component.html',
  styleUrls: ['./singleform.component.css']
})
export class SingleformComponent implements OnInit {

  constructor() { }
  Employee = EMPLOYEES ;
  keyId?: number;
  selectedKey?: NzTreeNodeKey[];
  helllo?: NzTSType;
  ngOnInit(): void {
    this.selectedKey = ['11'];
    this.Employee = [];
    this.helllo = 'xin chào';
    EMPLOYEES.forEach(value => {
      if (value.departmentId === 11){
        this.Employee.push(value);
      }
    });
  }
  fillterEm(name: any): void {

    this.Employee = [];

    EMPLOYEES.forEach(value => {
      // @ts-ignore
      if ((value.name?.indexOf(name.value)) > -1){
        this.Employee.push(value);
      }
    });
  }
  fillterEmployee(key: number): void{

    this.Employee = [];

    EMPLOYEES.forEach(value => {
      if (value.departmentId === (key)){
        this.Employee.push(value);
      }
    }

    );

  }

}
