var person = { // lines 1-5: Object
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1950',
    location: 'USA',
    friends: ['Mike', 'Joe', 'Sam', 'Christine'], //Array
    displayInfo: function() { //Method
        console.log(`${person.firstName} was born in ${person.birthDate} and has friends:` + " " + this.friends); 
/*Literal string using the the back tick operator.  When you use back tick operator in JavaScript, you can refer to the variable name 
inside the quotes using a $ sign.*/
    },
    address: {
        'building no': 3960,
        street: '123 my street',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA'
    }
}
person.displayInfo()
//console.log(person.friends);
console.log('Address:' + ' ' + person.address.street);

//Syntax for Array-like notation: ObjectName['propertyName']

//console.log('First name is:' + ' '+ person['firstName']); 

//String Concatination 
console.log('Complete Address 1 is:'+ ' ' + person['address']['street'] + ' ' + person['address']['city'] + ' ' + person['address']['state'] + ' '+ person['address']['country']);

console.log('Complete Address 2 is:'+ ' ' + person['address'].street + ' ' + person['address']['city'] + ', ' + person['address'].state + ', ' + person['address']['country']);

