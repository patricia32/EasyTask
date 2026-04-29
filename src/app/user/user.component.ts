import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[0]);

  // -- No signals
  // When a value is changed, Angular checks all the components

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // -- Signals
  // When a value is changed, Angular only checks the components that use the value

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // onSelectUser() {
  // This method is based on Zone.js & Angular's changes detection
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // -- No signals
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();
  select = output<string>(); // replacement for the line above, but  does not create a signal
  @Output() selectedUserName = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // -- Signals - READ ONLY

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
