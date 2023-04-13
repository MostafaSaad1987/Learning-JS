// This script is about a function to look up in a contact list based on name and property.
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
    // My solution. It first has two bools, one to check if the name is found and another for the property.
    let foundName = false;
    let foundProp = false;
    // Then there is a for loop that loops around the contacts list.
    // Checks if the name exists and if a property exists.
    // If both exist, return the value of the property.
    // Otherwise, return a string saying what is missing.
    // It is written that way in case of the same name existing for multiple people.
    for (let i = 0; i < contacts.length; i++) {
        if (name == contacts[i].firstName) {
            foundName = true;
        }
        if (contacts[i].hasOwnProperty(prop)) {
            foundProp = true;
        }
        if (foundName && foundProp) {
            return contacts[i][prop];
        }
    }

    if (foundName && foundProp == false) {
        return "No such property";
    } else if (!foundName) {
        return "No such contact";
    }
}

console.log(lookUpProfile("Akira", "address"));

// Another solution that doesn't take into account if multiple people have the same name.
// Same thing but once it finds a name, it checks it's property and sees if it exists, then 
// returns the contact or what's missing, depending on what is found.
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}