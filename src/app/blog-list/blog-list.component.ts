import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  entries: any[] = [];

  constructor(private contentful: ContentfulService,
              private router: Router) {}

  ngOnInit() {
    this.contentful.getEntries().then(
      entries => {
        this.entries = entries;
      }
    )
  }

  onSelect(index: number) {
    this.router.navigate([index]);
  }
}
