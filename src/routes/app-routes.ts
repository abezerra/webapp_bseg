import { Routes, Router } from "@angular/router";
import { BrokerComponent } from "../app/bseg/broker/broker.component";
import { ClientsComponent } from "../app/bseg/clients/clients.component";
import { InsurancesComponent } from "../app/bseg/insurances/insurances.component";
import { NotificationsComponent } from "../app/bseg/notifications/notifications.component";
import { PoliciesComponent } from "../app/bseg/policies/policies.component";
import { ChatComponent } from "../app/bseg/chat/chat.component";
import { AlertsComponent } from "../app/bseg/alerts/alerts.component";
import { DashboardComponent } from "../app/bseg/dashboard/dashboard.component";
import { LifeComponent } from "../app/bseg/insurances/life/life.component";
import { ResidentialComponent } from "../app/bseg/insurances/residential/residential.component";
import { LeaseComponent } from "../app/bseg/insurances/lease/lease.component";
import { EoComponent } from "../app/bseg/insurances/eo/eo.component";
import { AutoComponent } from "../app/bseg/insurances/auto/auto.component";
import { InsurersComponent } from "../app/bseg/insurers/insurers.component";
import { AuthComponent } from "../app/bseg/auth/auth.component";
import {AuthGuard} from "../app/security/auth.guard";

export const r:  Routes = [
    { path: 'auth', component: AuthComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'broker', component: BrokerComponent, canActivate: [AuthGuard]},
    { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]},
    { path: 'insurances', component: InsurancesComponent, canActivate: [AuthGuard]},
    { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard]},
    { path: 'alerts', component: AlertsComponent, canActivate: [AuthGuard]},
    { path: 'policies', component: PoliciesComponent, canActivate: [AuthGuard]},
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
    { path: 'auto', component: AutoComponent, canActivate: [AuthGuard]},
    { path: 'life', component: LifeComponent, canActivate: [AuthGuard]},
    { path: 'residential', component: ResidentialComponent, canActivate: [AuthGuard]},
    { path: 'eo', component: EoComponent, canActivate: [AuthGuard]},
    { path: 'lease', component: LeaseComponent, canActivate: [AuthGuard]},
    { path: 'insurers', component: InsurersComponent, canActivate: [AuthGuard]},
];
