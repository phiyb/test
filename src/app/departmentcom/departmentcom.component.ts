import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NzFormatEmitEvent, NzTreeNodeOptions} from 'ng-zorro-antd/tree';
import {DEPARTMENTS} from '../data/department';
import {Department} from '../model/department';

@Component({
  selector: 'app-departmentcom',
  templateUrl: './departmentcom.component.html',
  styleUrls: ['./departmentcom.component.css']
})
export class DepartmentcomComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSub = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubnew?: number;
  departments = DEPARTMENTS;
  nodes: NzTreeNodeOptions[] = [];
  @Input()  selectedKey: any;
  // departments = nodes;
  constructor() { }
  ngOnInit(): void {
    this.nodes = this.dig();
  }

  nzClick(event: NzFormatEmitEvent): string {
    console.log(event.node?.key);
    this.onSub.emit(Number(event.node?.key));
    return 'hello';
  }

  nzCheck(event: NzFormatEmitEvent): string {
    console.log(event.node?.title);
    // doing
    return 'anhphi';
    }



   dig(id: number = 0): any[]{
    let list: any[];
    list = [];
    this.departments.forEach(item => {

      const treeNode: NzTreeNodeOptions = {
        title: `${item.name}`,

        key: `${item.departmentId}`,
        children: [],
        isLeaf: false,
      };

      if (item.parentId === id) {
        treeNode.children = this.dig(item.departmentId);
        list.push(treeNode);
      }
    });

    return list;
  }
      // convert Obj to Tree
      buildTree(): void {
        const dig = (id: number = 0) => {
          let list: any[];
          list = [];
          this.departments.forEach(item => {

            const treeNode: NzTreeNodeOptions = {
              title: `${item.name}`,

              key: `${item.departmentId}`,
              children: [],
              isLeaf: false,
            };

            if (item.parentId === id) {
              treeNode.children = dig(item.departmentId);
              list.push(treeNode);
            }
          });

          return list;
        };

        this.nodes = dig();
      }




    }
