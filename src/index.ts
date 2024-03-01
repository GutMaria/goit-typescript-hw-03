import { Wizard } from './3'
import {Key, Person, House, MyHouse} from './4'


// 3.
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();

wizard.levelUp();


// 4.
const key = new Key();
console.log(key)

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);