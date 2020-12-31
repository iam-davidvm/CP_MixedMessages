// arrays which will be used to create a random sentence
const artist = ['The Beatles', 'The Rolling Stones', 'Elton John', 'Mariah Carey', 'Madonna', 'Barbra Streisand', 'Michael Jackson', 'Taylor Swift', 'Stevie Wonder', 'Chicago', 'Whitney Houston', 'Paul McCartney', 'Elvis Presley', 'Janet Jackson', 'Rod Stewart'];
const verb = ['created', 'almost deleted', 'wrote', 'hates', 'loves', 'banned', 'composed', 'lip-synched', 'recorded', 'autotuned', 'arranged', 'improvised', 'stole', 'whispered', 'whistled', 'rapped'];
const song = ['She Loves You', 'Satisfaction', 'Your Song', 'Fantasy', 'Into the Groove', 'People', 'Billie Jean', 'Shake it off', 'As', 'If You Leave Me Now', 'I Will Always Love You', 'Hi, Hi, Hi', 'Heartbreak Hotel', 'That\'s The Way Love Goes', 'Hot Legs'];
const adverb = ['on the toilet', 'from his own memory', 'while he was riding a waterscooter', 'almost as much as I do', 'in a capella', 'from Spotify', 'on a toy xylophone', 'after a visit at the dentist', 'on a Nokia 3210', 'to sound like a cat', 'after watching a documentary about balloons', 'from the family chest of Queen mom', 'in your ears', 'at a high pitch', 'on a groovy beat'];


// make it possible to add a value to an array
const addItem = (array, value) => array.push(value);

// delete a value from an array
const removeItem = (array, value) => array = array.filter(item => item !== value);

// takes a random item of an array
const getRandomValue = array => {
    return array[Math.floor(Math.random() * array.length)];
}

// return a random sentence with random values or custom values
const createSentence = (customArtist = getRandomValue(artist), customVerb = getRandomValue(verb), customSong = getRandomValue(song), customAdverb = getRandomValue(adverb)) => {
    let sentence = customArtist + ' ' + customVerb + ' ' + customSong + ' ' + customAdverb;
    return sentence;
}

addItem(artist, '2Pac');
removeItem(artist, 'Madonna');
console.log(createSentence());