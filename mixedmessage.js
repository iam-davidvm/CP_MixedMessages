// arrays which will be used to create a random sentence
const artist = ['The Beatles', 'The Rolling Stones', 'Elton John', 'Mariah Carey', 'Madonna', 'Barbra Streisand', 'Michael Jackson', 'Taylor Swift', 'Stevie Wonder', 'Chicago', 'Whitney Houston', 'Paul McCartney', 'Elvis Presley', 'Janet Jackson', 'Rod Stewart'];
const verb = ['created', 'almost deleted', 'wrote', 'hates', 'loves', 'banned', 'composed', 'lip-synched', 'recorded', 'autotuned', 'arranged', 'improvised', 'stole', 'whispered', 'whistled', 'rapped'];
const song = ['She Loves You', 'Satisfaction', 'Your Song', 'Fantasy', 'Into the Groove', 'People', 'Billie Jean', 'Shake it off', 'As', 'If You Leave Me Now', 'I Will Always Love You', 'Hi, Hi, Hi', 'Heartbreak Hotel', 'That\'s The Way Love Goes', 'Hot Legs'];
const adverb = ['on the toilet', 'from his own memory', 'while he was riding a waterscooter', 'almost as much as I do', 'in a capella', 'from Spotify', 'on a toy xylophone', 'after a visit at the dentist', 'on a Nokia 3210', 'to sound like a cat', 'after watching a documentary about balloons', 'from the family chest of Queen mom', 'in your ears', 'at a high pitch', 'on a groovy beat'];

// all arrays in one array to keep an overview
const allArrays = [artist, verb, song, adverb];

// make it possible to add a value to an array
const addItem = (array, value) => array.push(value);

// return a random sentence
const createSentence = (customArtist, customVerb, customSong, customAdverb) => {
    let randomArtist = allArrays[0][Math.floor(Math.random() * artist.length)];
    let randomVerb = allArrays[1][Math.floor(Math.random() * verb.length)];
    let randomSong = allArrays[2][Math.floor(Math.random() * song.length)];
    let randomAdverb = allArrays[3][Math.floor(Math.random() * adverb.length)];
    // a user can add his custom values
    if (customArtist) {
        randomArtist = customArtist;
    }
    if (customVerb) {
        randomVerb = customVerb;
    }
    if (customSong) {
        randomSong = customSong;
    }
    if (customAdverb) {
        randomAdverb = customAdverb;
    }
    let sentence = randomArtist + ' ' + randomVerb + ' ' + randomSong + ' ' + randomAdverb;
    return sentence;
}

addItem(artist, '2Pac');
console.log(createSentence());