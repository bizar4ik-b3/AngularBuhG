import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  user: User;
  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'password': new FormControl(null,[Validators.required,Validators.minLength(6)]),
        'name': new FormControl(null,[Validators.required]),
        'agree': new FormControl(false,[Validators.required,Validators.requiredTrue]),

      }
    );
  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email,password,name);
    this.usersService.createNewUser(user)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLoggin: true
          }
        });
      });
    //console.log(user);
   }
}
