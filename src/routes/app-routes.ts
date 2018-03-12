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

export const r:  Routes = [
    { path: 'auth', component: AuthComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'broker', component: BrokerComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'insurances', component: InsurancesComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'policies', component: PoliciesComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'auto', component: AutoComponent },
    { path: 'life', component: LifeComponent },
    { path: 'residential', component: ResidentialComponent },
    { path: 'eo', component: EoComponent },
    { path: 'lease', component: LeaseComponent },
    { path: 'insurers', component: InsurersComponent },
]