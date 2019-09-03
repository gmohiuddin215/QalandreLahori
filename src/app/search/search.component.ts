import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import poems from '../../assets/json/poems.json';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightSearch implements PipeTransform {
constructor(private sanitizer: DomSanitizer) {}

transform(value: any, args: any): any {
  if (!args) {
    return value;
  }
  // Match in a case insensitive maneer
  const re = new RegExp(args, 'gi');
  const match = value.match(re);

  // If there's no match, just return the original value.
  if (!match) {
    return value;
  }

  const replacedValue = value.replace(re, "<span>" + match[0] + "</span>")
  return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
}
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: any;
  Poems: any[] = poems;

  poemid: number;

  poemhide: boolean;
  constructor() { }

  ngOnInit() {
    this.poemhide = false;
  }

  updatesearchText(e) {
    this.searchText = e.target.value;
  }

  readPoem(id: number) {
    this.poemid = id;
    this.poemhide = true;
    this.scrollTop();
  }

  goBack() {
    this.poemhide = false;
    this.scrollTop();
  }

  scrollTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 100);
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
  }
}
