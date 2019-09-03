export class PatientDTO {
  id: number;
  name: string;
  sex: string;
  birthdayDay: number;
  birthdayMonth: number;
  birthdayYear: number;

  constructor(id: number, name: string, sex: string, birthdayDay: number, birthdayMonth: number, birthdayYear: number) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.birthdayDay = birthdayDay;
    this.birthdayMonth = birthdayMonth;
    this.birthdayYear = birthdayYear;
  }
}
