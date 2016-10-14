import { Component } from '@angular/core';

@Component({
  selector: 'main-stage',
  template:`

  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Adhoc Monitoring</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a routerLink="/dashboard">Dashboard</a></li>
          <li><a routerLink="/tick-jobs">Tick Jobs</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
    title = 'Monitoring' // this shall contain the default view
}
