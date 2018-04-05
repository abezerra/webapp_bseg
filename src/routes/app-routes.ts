import {Routes, Router} from "@angular/router";
import {BrokerComponent} from "../app/bseg/broker/broker.component";
import {ClientsComponent} from "../app/bseg/clients/clients.component";
import {InsurancesComponent} from "../app/bseg/insurances/insurances.component";
import {NotificationsComponent} from "../app/bseg/notifications/notifications.component";
import {PoliciesComponent} from "../app/bseg/policies/policies.component";
import {ChatComponent} from "../app/bseg/chat/chat.component";
import {AlertsComponent} from "../app/bseg/alerts/alerts.component";
import {DashboardComponent} from "../app/bseg/dashboard/dashboard.component";
import {LifeComponent} from "../app/bseg/insurances/life/life.component";
import {ResidentialComponent} from "../app/bseg/insurances/residential/residential.component";
import {LeaseComponent} from "../app/bseg/insurances/lease/lease.component";
import {EoComponent} from "../app/bseg/insurances/eo/eo.component";
import {AutoComponent} from "../app/bseg/insurances/auto/auto.component";
import {InsurersComponent} from "../app/bseg/insurers/insurers.component";
import {AuthComponent} from "../app/bseg/auth/auth.component";
import {AuthGuard} from "../app/security/auth.guard";
import {MediasComponent} from "../app/bseg/medias/medias.component";
import {BrokerEditComponent} from "../app/bseg/broker/broker-edit/broker-edit.component";
import {BrokerEditMainComponent} from "../app/bseg/broker/broker-edit-main/broker-edit-main.component";
import {ClientsShowComponent} from "../app/bseg/clients/clients-show/clients-show.component";
import {ClientEditComponent} from "../app/bseg/clients/client-edit/client-edit.component";
import {AutoShowComponent} from "../app/bseg/insurances/auto/auto-show/auto-show.component";
import {AutoEditComponent} from "../app/bseg/insurances/auto/auto-edit/auto-edit.component";
import {EoShowComponent} from "../app/bseg/insurances/eo/eo-show/eo-show.component";
import {EoEditComponent} from "../app/bseg/insurances/eo/eo-edit/eo-edit.component";
import {LeaseEditComponent} from "../app/bseg/insurances/lease/lease-edit/lease-edit.component";
import {LeaseShowComponent} from "../app/bseg/insurances/lease/lease-show/lease-show.component";
import {LifeShowComponent} from "../app/bseg/insurances/life/life-show/life-show.component";
import {LifeEditComponent} from "../app/bseg/insurances/life/life-edit/life-edit.component";
import {ResidentialShowComponent} from "../app/bseg/insurances/residential/residential-show/residential-show.component";
import {ResidentialEditComponent} from "../app/bseg/insurances/residential/residential-edit/residential-edit.component";
import {ProfileComponent} from "../app/bseg/profile/profile.component";
import {ProfileEditComponent} from "../app/bseg/profile/profile-edit/profile-edit.component";

export const r: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'broker', component: BrokerComponent, canActivate: [AuthGuard]},
  {path: 'broker-edit/:id', component: BrokerEditComponent, canActivate: [AuthGuard]},
  {path: 'broker-main-edit/:id', component: BrokerEditMainComponent, canActivate: [AuthGuard]},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]},
  {path: 'clients-show/:id', component: ClientsShowComponent, canActivate: [AuthGuard]},
  {path: 'clients-edit/:id', component: ClientEditComponent, canActivate: [AuthGuard]},
  {path: 'insurances', component: InsurancesComponent, canActivate: [AuthGuard]},
  {path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard]},
  {path: 'alerts', component: AlertsComponent, canActivate: [AuthGuard]},
  {path: 'policies', component: PoliciesComponent, canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
  {path: 'auto', component: AutoComponent, canActivate: [AuthGuard]},
  {path: 'auto-show/:id', component: AutoShowComponent, canActivate: [AuthGuard]},
  {path: 'auto-edit/:id', component: AutoEditComponent, canActivate: [AuthGuard]},
  {path: 'life', component: LifeComponent, canActivate: [AuthGuard]},
  {path: 'life-show/:id', component: LifeShowComponent, canActivate: [AuthGuard]},
  {path: 'life-edit/:id', component: LifeEditComponent, canActivate: [AuthGuard]},
  {path: 'residential', component: ResidentialComponent, canActivate: [AuthGuard]},
  {path: 'residential-show/:id', component: ResidentialShowComponent, canActivate: [AuthGuard]},
  {path: 'residential-edit/:id', component: ResidentialEditComponent, canActivate: [AuthGuard]},
  {path: 'eo', component: EoComponent, canActivate: [AuthGuard]},
  {path: 'eo-show/:id', component: EoShowComponent, canActivate: [AuthGuard]},
  {path: 'eo-edit/:id', component: EoEditComponent, canActivate: [AuthGuard]},
  {path: 'lease', component: LeaseComponent, canActivate: [AuthGuard]},
  {path: 'lease-show/:id', component: LeaseShowComponent, canActivate: [AuthGuard]},
  {path: 'lease-edit/:id', component: LeaseEditComponent, canActivate: [AuthGuard]},
  {path: 'insurers', component: InsurersComponent, canActivate: [AuthGuard]},
  {path: 'medias', component: MediasComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile-edid/:id', component: ProfileEditComponent, canActivate: [AuthGuard]},
];
