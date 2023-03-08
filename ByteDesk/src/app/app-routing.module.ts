import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolvedticketlistComponent } from './resolvedticketlist/resolevdticketlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { UserticketlistComponent } from './userticketlist/userticketlist.component';
import { ReassignedlistComponent } from './reassignedlist/reassignedlist.component';
import { UpdateComponent } from './update/update.component';
import { AuthguardService } from './auth/authguard.service';
import { CancelComponent } from './cancel/cancel.component';
import { CloseComponent } from './close/close.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthguardService],

  }, {
    path: 'raiseticket',
    component: RaiseticketComponent
  },
  {
    path: 'userticketlist',
    component: UserticketlistComponent

  }, {
    path: 'resolvedticketlist',
    component: ResolvedticketlistComponent

  }, {
    path: 'reassignlist',
    component: ReassignedlistComponent


  },
  {
    path: 'update/:ticketId/:department/:resolution',
    component: UpdateComponent


  },
  {
    path: 'cancel/:ticketId/:department',
    component: CancelComponent
  }
  ,
  {
    path: 'close/:ticketId/:department',
    component: CloseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
