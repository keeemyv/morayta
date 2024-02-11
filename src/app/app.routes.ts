import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsComponent } from './forms/forms.component';
import { MembersComponent } from './members/members.component';
import { RecordsComponent } from './records/records.component';
import { RegdisplayComponent } from './regdisplay/regdisplay.component';
import { VitalsheetComponent } from './vitalsheet/vitalsheet.component';
import { NotesComponent } from './notes/notes.component';
import { EMRComponent } from './emr/emr.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'records/registrations', component: RegdisplayComponent},
  {path: 'records/vitals', component: VitalsheetComponent},
  { path:'records/EMR', component: EMRComponent },
  // { path: 'notes', component: NotesComponent },
  // { path: 'about', component: AboutComponent }
  { path: 'members/team', component: MembersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'about-us', component: AboutComponent },
  { path: '**', redirectTo: '' },
];