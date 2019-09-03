import { Component, OnInit } from '@angular/core';
import poems from '../../assets/json/poems.json';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Poems: any = poems;
  bookid: number;

  constructor(private ar: ActivatedRoute, private loc: Location) { }

  ngOnInit() {
    this.bookid = +this.ar.snapshot.paramMap.get('id');
  }
  goBack() {
    this.loc.back();
  }

}
