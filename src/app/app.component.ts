import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  resulteddata = [
    {
      Name: 'John Doe',
      FirstName: 'John',
      LastName: 'Doe',
      Email: 'john.doe@maistering.com',
      Phone: '9999999999',
      Country: 'India',
      Company: 'Maistering',
      Designation: 'Engineer',
    },
  ];

  mappedData = [
    {
      label: 'First Name',
      field: 'FirstName',
    },
    {
      label: 'Last Name',
      field: 'LastName',
    },
    {
      label: 'Email Address',
      field: 'Email',
    },
  ];

  getFinalResults() {
    this.mappedData.forEach((a) => { 
      this.resulteddata.forEach((obj) => {
        for (const k in obj) {
          if (k === a.field) {
            obj[a.label] = obj[k];
            delete obj[k];
          }
        }
      });
    });
    console.log('updated-', this.resulteddata[0]);
  }
 
}
