/**
 * Task 1:
 * Create a type called RecordCollection which contains
 * - albumTitle: mandatory field, string type
 * - artist: optional field, string type
 * - tracks: mandatory field, Array of strings
 * - yearOfProduction: optional field, number type
 */

/* Uncomment the line below and complete the block */
type RecordCollection = {
  [id: number]: {
    artist?: string;
    album?: string;
    tracks?: string[];
  };
};

// type record

/**
 * Task 2:
 * Specify the recordCollection variable defined below to be of type "RecordCollection"
 */

const recordCollection: RecordCollection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    album: "Runway song",
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
    tracks: [],
  },
};

/**
 * Task 3:
 * Update the parameter of "updateRecords" function with the appropriate types
 */

/**
 * Task 4:
 * Implement the "updateRecords" function to work as expected. To know more on
 *  how the function works refer the problem.txt file
 */

/**
 * Task 5:
 * Add a return type to the function
 */

// Only change code below this line make sure there is no errors after changing the function
function updateRecords(
  recordCollection: RecordCollection,
  id: number,
  prop: "artist" | "tracks",
  value: string
): RecordCollection {
  if (!recordCollection[id]) {
    recordCollection[id] = {};
  }

  if (prop !== "tracks" && value !== "") {
    recordCollection[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (!recordCollection[id].tracks) {
      recordCollection[id].tracks = [];
    }
    recordCollection[id].tracks?.push(value);
  }

  return recordCollection;
}
console.log(updateRecords(recordCollection, 5439, "artist", "Sonu"));
console.log(
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
);
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
/**
 * Task 6
 * Run some of the testcases and see if the results match
 *
 * case 1: updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
 *
 * case 2: updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
 *
 * You can also check with some of the other possible combinations
 */
