const person = {
    name: 'Tamil',
    age: 31,
    location: {
        city: 'Chennai',
        temp: 32
    }
}

const {name='Anonymous', age} = person;

console.log(`${name} is at ${age}`);

const {city,temp: temperature} = person.location;

console.log(`It is ${temperature} in ${city}`);