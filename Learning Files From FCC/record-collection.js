// This script is about adding, modifying and removing properties from objects.
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// The function that updates the properties of the object.
function updateRecords(records, id, prop, value) {
    if (value == "") {
        // Deletes the property if the entered value is empty.
        delete records[id][prop];
    } else if (prop != "tracks" && value != "") {
        // If the entered property isn't empty, and the value isn't empty,
        // assign the entered value to the property.
        records[id][prop] = value;
    } else if (records[id].hasOwnProperty("tracks") == false && prop == "tracks" && value != "") {
        // If the album doesn’t have a "tracks" property, create a new array
        // for the album's "tracks" property before adding the value to it.
        records[id][prop] = [value];
    } else if (prop == "tracks" && value != "") {
        // If prop is "tracks" and value isn’t an empty string, add the value
        // to the end of the album’s existing "tracks" array.
        records[id][prop].push(value);
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');