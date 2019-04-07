import { UserService } from './../../../../services/user.service';
import { User } from './../../../../model/user';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user$: User[];

  constructor(private _user: UserService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    
  }

  loginUser(event) {
    
    event.preventDefault();
    const target = event.target;
    const userName = target.querySelector('#inputUser').value;
    const password = target.querySelector('#inputPassword').value;

    this._user.getUser(userName).subscribe(data => {
      this.user$ = data;
      if (this.user$.length !== 0) {
        this.router.navigate(['/dashboard']);
        //console.log('Usuario encontrado');
        
      } else {
        console.log('Usuario no encontrado');
      }
    });


  }
}
