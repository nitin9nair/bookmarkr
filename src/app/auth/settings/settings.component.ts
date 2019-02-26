import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  oldnewSame:boolean = false;
  newcnfSame:boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onChangePassword(form: NgForm) {
    const oldpassword = form.value.oldpassword;
    const newpassword = form.value.newpassword;
    const cnfpassword = form.value.cnfpassword;

    if(oldpassword !== newpassword) {
      if(newpassword === cnfpassword) {
        this.authService.changeUserPassword(oldpassword, newpassword);
      } else {
        this.newcnfSame = true;
      }
    } else {
      this.oldnewSame = true;
    }
  }

  // clear form method
  onClear(f: NgForm) {
    f.reset();
  }

}
