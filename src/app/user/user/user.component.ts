import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

}
