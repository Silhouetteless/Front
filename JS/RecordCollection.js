//CodeCamp Challenge

// Setup
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

// Only change code below this line

function updateRecords(records, id, prop, value) {
  
//if prop isn't tracks and value isn't an empty string, update that album's prop to value:
  if(prop !== "tracks" && value !== "") {
    //update prop inside the id to value:
    //access the value of the key with records[][]; set the value 
    records[id][prop] = value;
    
//if prop is tracks, but doesn't have a property (check with .hasOnwProperty if the array exists first, because you cannot push into an array that doesn't exist)
  } else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    //create an empty array and add value to it
    records[id][prop] = [value];
    
//if prop is track and value isn't an empty string
  } else if(prop === "tracks" && value !== "") {
    //add value to the end of the album's existing tracks array. Use .push --> adds value at the end of an existing array
     records[id][prop].push(value);
    
 //if value is an empty string, delete the prop from the album
  } else if(value == "") {
    delete records[id][prop];
  }
  
  return records;
  
}

//test
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

