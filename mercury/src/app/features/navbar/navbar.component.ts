import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  title$!: Observable<string>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title$ = this.router.events
      .pipe(
        filter(val => val instanceof NavigationEnd),
        map(navigationEnd => {
          const value = navigationEnd as NavigationEnd;
          const title = value.url.split('/')[1]
                                 .replaceAll('-', ' ');

          return title.length < 1 ? 'Job applications' : title[0].toUpperCase() + title.slice(1, title.length);
        })
      );
  }

}
