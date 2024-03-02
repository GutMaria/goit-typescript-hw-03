
class Key {
  private signature: number = Math.random()
  
  getSignature(): number {
    return this.signature
  }
}

class Person {
  constructor(private key: Key) {
  }

  getKey(): Key {
      console.log('getKey Person', this.key )
    return this.key;
  }
}

class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}
  
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log('person come in')
    }
  }

  openDoor(key: Key) {}
  }


class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door open")
  }
  }
}

// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);


export {Key, Person, House, MyHouse};