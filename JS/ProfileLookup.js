// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
    //for loop to cycle through the contacts list.
    for(let i = 0; i <contacts.length; i++) {
      //check if name is an actual contact's firstName and the given property (prop) is a property of that contact
      if(contacts[i].firstName == name) {
        if(contacts[x].hasOwnProperty(prop)) {
          //return the "value" of that property.
          return contacts[i].prop;
        } else {
          //prop does not correspond to any valid properties of a contact found to match name
          return "No such property";
         }
      }
    }
   //name does not correspond to any contacts 
    return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
