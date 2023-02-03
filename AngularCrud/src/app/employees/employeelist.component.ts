import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: Employee[] = [

    {
      id: 1,
      name: "Mark",
      gender: "Male",
      email: "mark@gmail.com",
      dateOfBirth: new Date('10,15,1995'),
      department: "IT",
      isActive: true,
      photoPath: 'assets/images/mark.png',
    },
    {
      id: 2,
      name: "Marry",
      gender: "Female",
      contactPreference: "phone",
      pohoneNumber:86056845354,
      dateOfBirth: new Date('02,08,1993'),
      department: "HR",
      isActive: true,
      photoPath: 'assets/images/marry.png',
    },
    {
      id: 3,
      name: "John",
      gender: "Male",
      contactPreference: "phone",
      pohoneNumber:7566784546,
      dateOfBirth: new Date('12,08,1985'),
      department: "IT",
      isActive: true,
      photoPath: 'assets/images/john.png',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
