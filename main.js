// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(array) {
    const newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        if (newArray.length % 2 != 0) {
          let digit = array[i]*2;
          if (digit > 9) {
              digit -= 9;
          };
          newArray.push(digit);
        } else {
            newArray.push(array[i]);
        };
    };
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumArray = newArray.reduce(reducer);
    if (sumArray%10===0) {
        return true;
    } else {
        return false;
    };
};


function findInvalidCards(nestArray) {
    const invalidCards = nestArray.filter(array => validateCred(array) === false);
    return invalidCards;
};


const invalidCards = (findInvalidCards(batch));


function idInvalidCardCompanies(nestArray) {
    const companies =[];
    nestArray.forEach(card => {
        switch (card[0]) {
            case 3:
                if (!companies.includes('Amex (American Express)')){
                    companies.push('Amex (American Express)')
                };
                break;
            case 4:
                if (!companies.includes('Visa')){
                    companies.push('Visa')
                };
                break;
            case 5:
                if (!companies.includes('Mastercard')){
                    companies.push('Mastercard')
                };
                break;
            case 6:
                if (!companies.includes('Discover')){
                    companies.push('Discover')
                };
                break;    
        };
    });
    return companies;
};

console.log(idInvalidCardCompanies(invalidCards));

function convertNumberToArray(number) {
    const array = number.toString();
    const newArray = array.split('');
    const newnewArray = [];
    newArray.forEach(x => {
        newnewArray.push(parseInt(x))
    });
    return newnewArray;
};




function invalidToValid(invalid) {
    const valid = invalid;
    const newArray = [];
    for (let i = invalid.length - 1; i >= 0; i--) {
        if (newArray.length % 2 != 0) {
            let digit = invalid[i]*2;
            if (digit > 9) {
              digit -= 9;
            };
            newArray.push(digit);
        } else {
            newArray.push(invalid[i]);
        };
    };
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    newArray[newArray.length - 1] = 0;
    valid[valid.length - 1] = 0;
    while (newArray.reduce(reducer)%10!=0) {
        console.log(valid[valid.length - 1]);
        console.log(newArray);
        console.log(valid);
        newArray[newArray.length - 1]++;
        valid[valid.length - 1]++;
    };
    return valid;
};


const peos = invalidToValid(invalid1);
console.log(peos);
console.log(invalid1);
console.log(validateCred(peos));




//console.log(validateCred(convertNumberToArray(4929998644531910)));