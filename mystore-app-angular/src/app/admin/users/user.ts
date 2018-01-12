export class User {
  id: string;
  login: string;
  firstName: string;
  lastName: string;

  constructor(id?: string, login?: string, firstName?: string, lastName?: string) {
    this.id = id;
    this.login = login;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
