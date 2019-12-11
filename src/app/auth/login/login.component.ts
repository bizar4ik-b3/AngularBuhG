import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Message } from 'src/app/shared/models/message';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'wfm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  form: FormGroup;
  message: Message;
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      // tslint:disable-next-line: no-string-literal
      if (params["nowCanLogin"]) {
        this.showMessage(
          {
            text: "Now you can enter to the system",
            type:  "succes"
          });
        }
     });
    this.message = new Message("danger","");
    this.form = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(6)]),
    });
  }
  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email).
      subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.message.text = "";
            window.localStorage.setItem("user", JSON.stringify(user));
            this.authService.login();
           // this.router.navigate(['']);
            this.user = user;
          } else {
            this.showMessage({
              text: "Wrong Password",
              type: "danger"
            });
          }
        } else {
          this.showMessage({
            text: "No such user",
            type: "danger"
          });
        }

      });
    console.log(this.user);
  }

  private showMessage(message:Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = "";
    }, 5000);
  }
}

