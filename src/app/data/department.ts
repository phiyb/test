import {Department} from '../model/department';
import {NzTreeNodeOptions} from 'ng-zorro-antd/tree';

export const DEPARTMENTS: Department[] = [
  { departmentId: 11, name: 'Telsoft', parentId: 0, status: '1', children: []},
  { departmentId: 12, name: 'Hai phong', parentId: 11, status: '1', children: []},
  { departmentId: 13, name: 'Thang long', parentId: 11, status: '1', children: []},
  { departmentId: 14, name: 'Song hong', parentId: 11, status: '1', children: []},
  { departmentId: 15, name: 'Truong Son', parentId: 11, status: '1', children: []},
  { departmentId: 16, name: 'Dai la', parentId: 11, status: '1', children: []},
  { departmentId: 17, name: 'Child-HP1', parentId: 12, status: '1', children: []},
  { departmentId: 18, name: 'Child-HP2', parentId: 17, status: '1', children: []},
  { departmentId: 19, name: 'Child-HP3', parentId: 18, status: '1', children: []},
  { departmentId: 20, name: 'Child-TL1a', parentId: 13, status: '1', children: []},
  { departmentId: 21, name: 'Child-TL1b', parentId: 13, status: '1', children: []},
  { departmentId: 22, name: 'Child-TL3', parentId: 20, status: '1', children: []},
  { departmentId: 23, name: 'Child-SH1', parentId: 14, status: '1', children: []},
  { departmentId: 24, name: 'Child-SH2', parentId: 23, status: '1', children: []},
];
