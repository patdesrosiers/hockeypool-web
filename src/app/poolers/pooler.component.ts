import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pooler } from './pooler';
import { Serie } from '../serie';
import { Playoff } from '../playoff';

@Component({
  selector: 'app-pooler',
  templateUrl: './pooler.component.html',
  styleUrls: ['./pooler.component.css']
})
export class PoolerComponent {
  @Input() pooler: Pooler;
  @Input() playoff: Playoff;
}
