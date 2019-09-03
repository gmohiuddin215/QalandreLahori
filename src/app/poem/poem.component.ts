import { Component, OnInit } from '@angular/core';
import poems from '../../assets/json/poems.json';
import books from '../../assets/json/books.json';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {


  constructor(private ar: ActivatedRoute, private loc: Location) { }

  Poems: any = poems;
  Books: any = books;
  poemid: number;
  ngOnInit() {
    this.poemid = +this.ar.snapshot.paramMap.get('poemid');
  }

  goBack() {
    this.loc.back();
  }

}
