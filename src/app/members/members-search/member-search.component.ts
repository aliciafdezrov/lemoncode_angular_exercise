import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-members-search',
    templateUrl: './member-search.component.html',
    styles: []
})
export class MemberSearchComponent {
    @Input() organization: string;
    @Output() organizationChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() loadMembers: EventEmitter<void> = new EventEmitter();

    organizationChangeHandler($event): void {
        const newOrganization = $event.target.value;
        this.organizationChange.emit(newOrganization);
    }

    handleOnClickLoad(): void {
        this.loadMembers.emit();
    }
}
