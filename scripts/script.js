class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contacts(name, email, phone, relation);
    this.contacts.push(newContact);
  }
  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  print() {
    this.contacts.forEach(contact => {
      console.log(contact);
    });
  }
}

class Contacts {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.print();
addressBook.add("Veronica", "@gmail.com", "248", "self");
addressBook.add("Eric", "@yahoo.com", "313", "spouse");
addressBook.add("Eric Jr", "@ymail.com", "586", "child");
addressBook.print();
addressBook.delete("Eric");
addressBook.print(); 
