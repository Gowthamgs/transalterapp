import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
 @Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {
      
  constructor(private router:Router) { 

  }

  ngOnInit() {

  }
  loginUser(e) {
     
     e.preventDefault();
       console.log(e);
        var username = e.target.elements[0].value;
         var password = e.target.elements[1].value;
    if(username == 'admin' && password == 'admin')
         this.router.navigate(['/dashboards/dashboard1']);
     else
    if(username == 'client' && password == 'client')
         this.router.navigate(['/dashboards/dashboard2']);
    else
    if(username == 'transalater' && password == 'transalater')
         this.router.navigate(['/dashboards/dashboard3']);

    }
  }
