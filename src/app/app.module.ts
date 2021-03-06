import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {GrowlModule} from 'primeng/growl';
import {ListboxModule} from 'primeng/listbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { QuillModule } from 'ngx-quill'

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
import {NgSelectizeModule} from "ng-selectize";
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./security/auth.guard";
import TokensService from "./services/tokens.service";
import {HttpService} from "./services/http.service";
import AuthInterceptor from "./security/Auth.interceptor";
import { MediasComponent } from './bseg/medias/medias.component';
import { MediasListComponent } from './bseg/medias/medias-list/medias-list.component';
import { MediasFormComponent } from './bseg/medias/medias-form/medias-form.component';
import { MediasBadagesComponent } from './bseg/medias/medias-badages/medias-badages.component';
import { MediasShowComponent } from './bseg/medias/medias-show/medias-show.component';
import {MediasService} from "./services/medias.service";
import { BrokerEditComponent } from './bseg/broker/broker-edit/broker-edit.component';
import { BrokerEditMainComponent } from './bseg/broker/broker-edit-main/broker-edit-main.component';
import { ClientEditComponent } from './bseg/clients/client-edit/client-edit.component';
import { AutoEditComponent } from './bseg/insurances/auto/auto-edit/auto-edit.component';
import { EoEditComponent } from './bseg/insurances/eo/eo-edit/eo-edit.component';
import { LeaseEditComponent } from './bseg/insurances/lease/lease-edit/lease-edit.component';
import { LifeEditComponent } from './bseg/insurances/life/life-edit/life-edit.component';
import { ResidentialEditComponent } from './bseg/insurances/residential/residential-edit/residential-edit.component';
import { ProfileComponent } from './bseg/profile/profile.component';
import { ProfileListComponent } from './bseg/profile/profile-list/profile-list.component';
import { ProfileEditComponent } from './bseg/profile/profile-edit/profile-edit.component';
import { ProfileShowComponent } from './bseg/profile/profile-show/profile-show.component';
import { ProfileNumbersComponent } from './bseg/profile/profile-numbers/profile-numbers.component';
import { ProfileAttendanceComponent } from './bseg/profile/profile-attendance/profile-attendance.component';
import { ProfileAboutComponent } from './bseg/profile/profile-about/profile-about.component';
import { ProfileTimelineComponent } from './bseg/profile/profile-timeline/profile-timeline.component';
import {DashboardService} from "./services/dashboard.service";
import { ChatMessagesComponent } from './bseg/chat/chat-messages/chat-messages.component';
import {NgChatModule} from "ng-chat";
import {ChatService} from "./services/chat.service";
import { ChatUsersOnlineComponent } from './bseg/chat/chat-users-online/chat-users-online.component';
import { NotificationsListComponent } from './bseg/notifications/notifications-list/notifications-list.component';
import { NotificationsCreateComponent } from './bseg/notifications/notifications-create/notifications-create.component';
import { NotificationsEditComponent } from './bseg/notifications/notifications-edit/notifications-edit.component';
import { NotificationsShowComponent } from './bseg/notifications/notifications-show/notifications-show.component';
import {PusherService} from "./services/pusher.service";
import { NotificationsBreadcumbsComponent } from './bseg/notifications/notifications-breadcumbs/notifications-breadcumbs.component';

import {MailService} from "./services/mail.service";
import { MailComponent } from './bseg/mail/mail.component';
import { MailBreadcumbsComponent } from './bseg/mail/mail-breadcumbs/mail-breadcumbs.component';
import { MailInboxComponent } from './bseg/mail/mail-inbox/mail-inbox.component';
import { MailOutboxComponent } from './bseg/mail/mail-outbox/mail-outbox.component';
import { MailSidebarComponent } from './bseg/mail/mail-sidebar/mail-sidebar.component';
import { MailListsComponent } from './bseg/mail/mail-lists/mail-lists.component';
import { MailListCreateComponent } from './bseg/mail/mail-lists/mail-list-create/mail-list-create.component';
import { MailListEditComponent } from './bseg/mail/mail-lists/mail-list-edit/mail-list-edit.component';
import { MailListShowComponent } from './bseg/mail/mail-lists/mail-list-show/mail-list-show.component';
import { MailTemplatesComponent } from './bseg/mail/mail-templates/mail-templates.component';
import { MailTemplatesCreateComponent } from './bseg/mail/mail-templates/mail-templates-create/mail-templates-create.component';
import { MailTemplatesEditComponent } from './bseg/mail/mail-templates/mail-templates-edit/mail-templates-edit.component';
import { MailTemplatesListComponent } from './bseg/mail/mail-templates/mail-templates-list/mail-templates-list.component';
import { MailTemplatesShowComponent } from './bseg/mail/mail-templates/mail-templates-show/mail-templates-show.component';
import { MailComposeComponent } from './bseg/mail/mail-compose/mail-compose.component';
import { MailTemplatesBreadcumbsComponent } from './bseg/mail/mail-templates/mail-templates-breadcumbs/mail-templates-breadcumbs.component';
import { MailListsBreadcumbsComponent } from './bseg/mail/mail-lists/mail-lists-breadcumbs/mail-lists-breadcumbs.component';
import { MailListListComponent } from './bseg/mail/mail-lists/mail-list-list/mail-list-list.component';

import {SmsService} from "./services/sms.service";
import { SmsComponent } from './sms/sms.component';
import { SmsBreadcumbsComponent } from './sms/sms-breadcumbs/sms-breadcumbs.component';
import { SmsComposeComponent } from './sms/sms-compose/sms-compose.component';
import { SmsInboxComponent } from './sms/sms-inbox/sms-inbox.component';
import { SmsOutboxComponent } from './sms/sms-outbox/sms-outbox.component';
import { SmsSidebarComponent } from './sms/sms-sidebar/sms-sidebar.component';
import { SmsListsComponent } from './sms/sms-lists/sms-lists.component';
import { SmsTemplatesComponent } from './sms/sms-templates/sms-templates.component';
import { SmsListsCreateComponent } from './sms/sms-lists/sms-lists-create/sms-lists-create.component';
import { SmsListsEditComponent } from './sms/sms-lists/sms-lists-edit/sms-lists-edit.component';
import { SmsListsListComponent } from './sms/sms-lists/sms-lists-list/sms-lists-list.component';
import { SmsListsShowComponent } from './sms/sms-lists/sms-lists-show/sms-lists-show.component';
import { SmsListsBreadcumbsComponent } from './sms/sms-lists/sms-lists-breadcumbs/sms-lists-breadcumbs.component';
import { SmsTemplatesCreateComponent } from './sms/sms-templates/sms-templates-create/sms-templates-create.component';
import { SmsTemplatesListComponent } from './sms/sms-templates/sms-templates-list/sms-templates-list.component';
import { SmsTemplatesEditComponent } from './sms/sms-templates/sms-templates-edit/sms-templates-edit.component';
import { SmsTemplatesShowComponent } from './sms/sms-templates/sms-templates-show/sms-templates-show.component';
import { SmsTemplatesBreadcumbsComponent } from './sms/sms-templates/sms-templates-breadcumbs/sms-templates-breadcumbs.component';
import { MetasComponent } from './bseg/metas/metas.component';
import { MetasBreadcumbsComponent } from './bseg/metas/metas-breadcumbs/metas-breadcumbs.component';
import { MetasCreateComponent } from './bseg/metas/metas-create/metas-create.component';
import { MetasEditComponent } from './bseg/metas/metas-edit/metas-edit.component';
import { MetasListComponent } from './bseg/metas/metas-list/metas-list.component';
import { MetasShowComponent } from './bseg/metas/metas-show/metas-show.component';
import {MetasService} from "./services/metas.service";
import { DashboardChartsComponent } from './bseg/dashboard/dashboard-charts/dashboard-charts.component';
import { AutoImportComponent } from './bseg/insurances/auto/auto-import/auto-import.component';
import {ExtractorService} from "./services/extractor.service";



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
    SignupComponent,
    MediasComponent,
    MediasListComponent,
    MediasFormComponent,
    MediasBadagesComponent,
    MediasShowComponent,
    BrokerEditComponent,
    BrokerEditMainComponent,
    ClientEditComponent,
    AutoEditComponent,
    EoEditComponent,
    LeaseEditComponent,
    LifeEditComponent,
    ResidentialEditComponent,
    ProfileComponent,
    ProfileListComponent,
    ProfileEditComponent,
    ProfileShowComponent,
    ProfileNumbersComponent,
    ProfileAttendanceComponent,
    ProfileAboutComponent,
    ProfileTimelineComponent,
    ChatMessagesComponent,
    ChatUsersOnlineComponent,
    NotificationsListComponent,
    NotificationsCreateComponent,
    NotificationsEditComponent,
    NotificationsShowComponent,
    NotificationsBreadcumbsComponent,
    MailComponent,
    MailBreadcumbsComponent,
    MailInboxComponent,
    MailOutboxComponent,
    MailSidebarComponent,
    MailListsComponent,
    MailListCreateComponent,
    MailListEditComponent,
    MailListShowComponent,
    MailTemplatesComponent,
    MailTemplatesCreateComponent,
    MailTemplatesEditComponent,
    MailTemplatesListComponent,
    MailTemplatesShowComponent,
    MailComposeComponent,
    MailTemplatesBreadcumbsComponent,
    MailListsBreadcumbsComponent,
    MailListListComponent,
    SmsComponent,
    SmsBreadcumbsComponent,
    SmsComposeComponent,
    SmsInboxComponent,
    SmsOutboxComponent,
    SmsSidebarComponent,
    SmsListsComponent,
    SmsTemplatesComponent,
    SmsListsCreateComponent,
    SmsListsEditComponent,
    SmsListsListComponent,
    SmsListsShowComponent,
    SmsListsBreadcumbsComponent,
    SmsTemplatesCreateComponent,
    SmsTemplatesListComponent,
    SmsTemplatesEditComponent,
    SmsTemplatesShowComponent,
    SmsTemplatesBreadcumbsComponent,
    MetasComponent,
    MetasBreadcumbsComponent,
    MetasCreateComponent,
    MetasEditComponent,
    MetasListComponent,
    MetasShowComponent,
    DashboardChartsComponent,
    AutoImportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(r),
    NgSelectizeModule,
    NgChatModule,
    NgxPaginationModule,
    EditorModule,
    GrowlModule,
    ListboxModule,
    ToastrModule.forRoot(),
    CurrencyMaskModule,
    Ng2GoogleChartsModule,
    QuillModule,
  ],
  providers: [
    ToastrService,
    AutoService,
    ClientsService,
    AlertsService,
    LifeService,
    ResidentialService,
    EOService,
    LeaseService,
    InsurersService,
    BrokerService,
    AuthService,
    AuthGuard,
    HttpService,
    MediasService,
    DashboardService,
    ChatService,
    PusherService,
    MailService,
    SmsService,
    MetasService,
    ExtractorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
