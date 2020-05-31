import {Component, Input} from '@angular/core';
import {MemberEntity} from './members/models/member.model';
import {MembersApiService} from './members/members-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Members Page';
  organization = 'lemoncode';
  members: MemberEntity[];

  constructor(private membersApi: MembersApiService) { }

  changeOrganization(newOrganizationName: string): void {
    this.organization = newOrganizationName;
  }

  loadMembers(organizationName): void {
    this.membersApi.getAllMembers(organizationName)
        .subscribe(
            (ms) => this.members = ms,
            (error) => console.log(error)
        );
  }
}
