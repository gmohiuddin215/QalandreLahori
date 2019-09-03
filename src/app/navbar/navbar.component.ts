import { Component, OnInit } from '@angular/core';
import books from '../../assets/json/books.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Books: any = books;
  constructor() { }

  ngOnInit() {
  }

}
