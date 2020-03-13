import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  data: any = {};
  user = new FormControl('');
  password = new FormControl('');
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

}
