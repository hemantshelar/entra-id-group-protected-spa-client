import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {path: 'test-cpnt', component: TestComponent},
    {path: '**', redirectTo: 'test-cpnt'}
];
