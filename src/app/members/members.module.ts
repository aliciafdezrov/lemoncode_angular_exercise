import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent
} from './members-table';
import {MemberSearchComponent} from './members-search';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
    MemberSearchComponent,
  ],
  exports: [
    MembersTableComponent,
    MemberSearchComponent
  ]
})
export class MembersModule { }
