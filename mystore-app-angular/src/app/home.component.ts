import {Component} from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <div class="jumbotron">
      <h1>Welcome to Bookstore</h1>
      <p>This is a ultimate platform for selling digital and printed content.</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
    </div>
  `,
})
export class HomeComponent {
}
