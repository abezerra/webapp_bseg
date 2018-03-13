import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { FooterComponent } from './template/footer/footer.component';
import { LeftSideComponent } from './template/left-side/left-side.component';
import { RouterModule } from '@angular/router';

import { r } from '../routes/app-routes';
import { UserSidebarComponent } from './template/user-sidebar/user-sidebar.component';
import { NavComponent } from './template/nav/nav.component';
import { BrokerComponent } from './bseg/broker/broker.component';
import { BrokerListComponent } from './bseg/broker/broker-list/broker-list.component';
import { BrokerCreateComponent } from './bseg/broker/broker-create/broker-create.component';
import { BrokerFormComponent } from './bseg/broker/broker-form/broker-form.component';
import { BrokerShowComponent } from './bseg/broker/broker-show/broker-show.component';
import { DashboardComponent } from './bseg/dashboard/dashboard.component';
import { InsurancesComponent } from './bseg/insurances/insurances.component';
import { ClientsComponent } from './bseg/clients/clients.component';
import { PoliciesComponent } from './bseg/policies/policies.component';
import { AlertsComponent } from './bseg/alerts/alerts.component';
import { ChatComponent } from './bseg/chat/chat.component';
import { NotificationsComponent } from './bseg/notifications/notifications.component';
import { BrokerBreadcumbComponent } from './bseg/broker/broker-breadcumb/broker-breadcumb.component';
import { ClientsBreadcumbsComponent } from './bseg/clients/clients-breadcumbs/clients-breadcumbs.component';
import { ClientsListComponent } from './bseg/clients/clients-list/clients-list.component';
import { ClientsFormComponent } from './bseg/clients/clients-form/clients-form.component';
import { ClientsShowComponent } from './bseg/clients/clients-show/clients-show.component'
import { ClientsService } from './services/clients.service';
import { BoxesComponent } from './bseg/dashboard/boxes/boxes.component';
import { DashboardListComponent } from './bseg/dashboard/dashboard-list-/dashboard-list-.component';
import { DashboardColumnsComponent } from './bseg/dashboard/dashboard-columns/dashboard-columns.component';
import { AlertsListComponent } from './bseg/alerts/alerts-list/alerts-list.component';
import { AlertsFormComponent } from './bseg/alerts/alerts-form/alerts-form.component';
import { AlertsShowComponent } from './bseg/alerts/alerts-show/alerts-show.component';
import { AlertsBreadcumbsComponent } from './bseg/alerts/alerts-breadcumbs/alerts-breadcumbs.component';
import { AlertsService } from './services/alerts.service';
import { AutoListComponent } from './bseg/insurances/auto/auto-list/auto-list.component';
import { AutoShowComponent } from './bseg/insurances/auto/auto-show/auto-show.component';
import { AutoFormComponent } from './bseg/insurances/auto/auto-form/auto-form.component';
import { LifeComponent } from './bseg/insurances/life/life.component';
import { LifeListComponent } from './bseg/insurances/life/life-list/life-list.component';
import { LifeShowComponent } from './bseg/insurances/life/life-show/life-show.component';
import { LifeFormComponent } from './bseg/insurances/life/life-form/life-form.component';
import { LifeBreadcumbsComponent } from './bseg/insurances/life/life-breadcumbs/life-breadcumbs.component';
import { LifeService } from './services/life.service';
import { ResidentialComponent } from './bseg/insurances/residential/residential.component';
import { ResidentialListComponent } from './bseg/insurances/residential/residential-list/residential-list.component';
import { ResidentialShowComponent } from './bseg/insurances/residential/residential-show/residential-show.component';
import { ResidentialFormComponent } from './bseg/insurances/residential/residential-form/residential-form.component';
import { ResidentialService } from './services/residential.service';
import { EOService } from './services/eo.service';
import { ResidentialBreadcumbsComponent } from './bseg/insurances/residential/residential-breadcumbs/residential-breadcumbs.component';
import { EoComponent } from './bseg/insurances/eo/eo.component';
import { EoBreadcumbsComponent } from './bseg/insurances/eo/eo-breadcumbs/eo-breadcumbs.component';
import { EoFormComponent } from './bseg/insurances/eo/eo-form/eo-form.component';
import { EoListComponent } from './bseg/insurances/eo/eo-list/eo-list.component';
import { EoShowComponent } from './bseg/insurances/eo/eo-show/eo-show.component';
import { AutoService } from './services/auto.service';
import { LeaseComponent } from './bseg/insurances/lease/lease.component';
import { LeaseShowComponent } from './bseg/insurances/lease/lease-show/lease-show.component';
import { LeaseListComponent } from './bseg/insurances/lease/lease-list/lease-list.component';
import { LeaseFormComponent } from './bseg/insurances/lease/lease-form/lease-form.component';
import { LeaseBreadcumbsComponent } from './bseg/insurances/lease/lease-breadcumbs/lease-breadcumbs.component';
import { LeaseService } from './services/lease.service';
import { AutoBreadcumbsComponent } from './bseg/insurances/auto/auto-breadcumbs/auto-breadcumbs.component';
import { AutoComponent } from './bseg/insurances/auto/auto.component';
import { InsurersComponent } from './bseg/insurers/insurers.component';
import { InsurersListComponent } from './bseg/insurers/insurers-list/insurers-list.component';
import { InsurersFormComponent } from './bseg/insurers/insurers-form/insurers-form.component';
import { InsurersShowComponent } from './bseg/insurers/insurers-show/insurers-show.component';
import { InsurersBreadcumbsComponent } from './bseg/insurers/insurers-breadcumbs/insurers-breadcumbs.component';
import { InsurersService } from './services/insurers.service';
import { AuthComponent } from './bseg/auth/auth.component';
import { SignupComponent } from './bseg/signup/signup.component';
import {BrokerService} from "./services/broker.service";

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LeftSideComponent,
    UserSidebarComponent,
    NavComponent,
    BrokerComponent,
    BrokerListComponent,
    BrokerCreateComponent,
    BrokerFormComponent,
    BrokerShowComponent,
    DashboardComponent,
    InsurancesComponent,
    ClientsComponent,
    PoliciesComponent,
    AlertsComponent,
    ChatComponent,
    NotificationsComponent,
    BrokerBreadcumbComponent,
    ClientsBreadcumbsComponent,
    ClientsListComponent,
    ClientsFormComponent,
    ClientsShowComponent,
    BoxesComponent,
    DashboardListComponent,
    DashboardColumnsComponent,
    AlertsListComponent,
    AlertsFormComponent,
    AlertsShowComponent,
    AlertsBreadcumbsComponent,
    AutoListComponent,
    AutoShowComponent,
    AutoFormComponent,
    LifeComponent,
    LifeListComponent,
    LifeShowComponent,
    LifeFormComponent,
    LifeBreadcumbsComponent,
    ResidentialComponent,
    ResidentialListComponent,
    ResidentialShowComponent,
    ResidentialFormComponent,
    ResidentialBreadcumbsComponent,
    EoComponent,
    EoBreadcumbsComponent,
    EoFormComponent,
    EoListComponent,
    EoShowComponent,
    LeaseComponent,
    LeaseShowComponent,
    LeaseListComponent,
    LeaseFormComponent,
    LeaseBreadcumbsComponent,
    AutoBreadcumbsComponent,
    AutoComponent,
    InsurersComponent,
    InsurersListComponent,
    InsurersFormComponent,
    InsurersShowComponent,
    InsurersBreadcumbsComponent,
    AuthComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AdminModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(r)
  ],
  providers: [
    AutoService,
    ClientsService,
    AlertsService,
    LifeService,
    ResidentialService,
    EOService,
    LeaseService,
    InsurersService,
    BrokerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
