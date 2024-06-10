//todo-1 Person 클래스 정의
class Person {
  constructor() {
    this._name = '';
    this._age = 0;
    this._job = '';
  }
  //todo-2 name property
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  //todo-3 age property
  set age(value) {
    this._age = value;
  }
  get age() {
    return this._age;
  }
  //todo-4 job property
  set job(value) {
    this._job = value;
  }
  get job() {
    return this._job;
  }
}

const person = new Person();
person.name = '정호연';
person.age = 27;
person.job = '학생';

//todo-5 객체 속성 출력
console.log('Name:', person.name);
console.log('Age:', person.age);
console.log('job:', person.job);
