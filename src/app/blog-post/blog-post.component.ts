import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{
  id: string = '';
  activatedEntry: any;

  constructor(private contentful: ContentfulService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id']
      }
    )
    this.contentful.getEntries().then(
      entries => {
        entries.forEach(entry => {
          if(this.id === entry.sys.id) {
            this.activatedEntry = entry
            console.log(this.activatedEntry);
          }
        })
      }
    )
  }

  onReturn() {
    this.router.navigate([''])
  }
}
