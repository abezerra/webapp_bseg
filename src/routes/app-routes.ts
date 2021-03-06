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
import {MailComponent} from "../app/bseg/mail/mail.component";
import {MailOutboxComponent} from "../app/bseg/mail/mail-outbox/mail-outbox.component";
import {MailTemplatesComponent} from "../app/bseg/mail/mail-templates/mail-templates.component";
import {MailTemplatesShowComponent} from "../app/bseg/mail/mail-templates/mail-templates-show/mail-templates-show.component";
import {MailTemplatesEditComponent} from "../app/bseg/mail/mail-templates/mail-templates-edit/mail-templates-edit.component";
import {MailListsComponent} from "../app/bseg/mail/mail-lists/mail-lists.component";
import {MailListShowComponent} from "../app/bseg/mail/mail-lists/mail-list-show/mail-list-show.component";
import {MailListEditComponent} from "../app/bseg/mail/mail-lists/mail-list-edit/mail-list-edit.component";
import {SmsComponent} from "../app/sms/sms.component";
import {SmsOutboxComponent} from "../app/sms/sms-outbox/sms-outbox.component";
import {SmsTemplatesComponent} from "../app/sms/sms-templates/sms-templates.component";
import {SmsTemplatesShowComponent} from "../app/sms/sms-templates/sms-templates-show/sms-templates-show.component";
import {SmsTemplatesEditComponent} from "../app/sms/sms-templates/sms-templates-edit/sms-templates-edit.component";
import {SmsListsComponent} from "../app/sms/sms-lists/sms-lists.component";
import {SmsListsShowComponent} from "../app/sms/sms-lists/sms-lists-show/sms-lists-show.component";
import {SmsListsEditComponent} from "../app/sms/sms-lists/sms-lists-edit/sms-lists-edit.component";
import {MetasComponent} from "../app/bseg/metas/metas.component";
import {MetasShowComponent} from "../app/bseg/metas/metas-show/metas-show.component";
import {MetasEditComponent} from "../app/bseg/metas/metas-edit/metas-edit.component";

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

  {path: 'mail', component: MailComponent, canActivate: [AuthGuard]},
  // {path: 'mail-show/:id', component: Mail, canActivate: [AuthGuard]},
  {path: 'mail-outbox', component: MailOutboxComponent, canActivate: [AuthGuard]},
  {path: 'mail-template', component: MailTemplatesComponent, canActivate: [AuthGuard]},
  {path: 'mail-template-show/:id', component: MailTemplatesShowComponent, canActivate: [AuthGuard]},
  {path: 'mail-template-edit/:id', component: MailTemplatesEditComponent, canActivate: [AuthGuard]},
  {path: 'mail-list', component: MailListsComponent, canActivate: [AuthGuard]},
  {path: 'mail-list-show/:id', component: MailListShowComponent, canActivate: [AuthGuard]},
  {path: 'mail-list-edit/:id', component: MailListEditComponent, canActivate: [AuthGuard]},

  {path: 'sms', component: SmsComponent, canActivate: [AuthGuard]},
  // {path: 'sms-show/:id', component: Mail, canActivate: [AuthGuard]},
  {path: 'sms-outbox', component: SmsOutboxComponent, canActivate: [AuthGuard]},
  {path: 'sms-template', component: SmsTemplatesComponent, canActivate: [AuthGuard]},
  {path: 'sms-template-show/:id', component: SmsTemplatesShowComponent, canActivate: [AuthGuard]},
  {path: 'sms-template-edit/:id', component: SmsTemplatesEditComponent, canActivate: [AuthGuard]},
  {path: 'sms-list', component: SmsListsComponent, canActivate: [AuthGuard]},
  {path: 'sms-list-show/:id', component: SmsListsShowComponent, canActivate: [AuthGuard]},
  {path: 'sms-list-edit/:id', component: SmsListsEditComponent, canActivate: [AuthGuard]},

  {path: 'metas', component: MetasComponent, canActivate: [AuthGuard]},
  {path: 'metas-show/:id', component: MetasShowComponent, canActivate: [AuthGuard]},
  {path: 'metas-edit/:id', component: MetasEditComponent, canActivate: [AuthGuard]},
];
