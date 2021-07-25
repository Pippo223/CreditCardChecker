// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(arr) {
 let sumEven = 0
 let sumOdd = 0
  for(i = arr.length-1; i>=0; i-=2) {
    sumEven += arr[i]
  }
 
  //console.log(sum)
  for(i = arr.length-2; i>=0; i-=2) {
    arr[i] = arr[i] * 2
    if(arr[i] > 9){
      arr[i]=arr[i]-9
    }
    sumOdd += arr[i]
  }
  let total = sumEven + sumOdd
//console.log(total)
   if(total % 10 == 0)
   {return true}else{return false}
}
console.log('valid1 is '+validateCred(valid1))
console.log('valid4 is '+validateCred(valid4))
console.log('invalid1 is '+validateCred(invalid1))
console.log('invalid2 is '+validateCred(invalid2))
//console.log('invalid3 is '+validateCred(invalid3))
//console.log('invalid4 is '+validateCred(invalid4))
//console.log('mystery1 is '+validateCred(mystery1))
//console.log('mystery5 is '+validateCred(mystery5))

function findInvalidCards(nestedArray) {
  let invalidArray = []
  for(let i=0; i<nestedArray.length; i++) {
    let current = nestedArray[i]
    if(!validateCred(current))
  {
    invalidArray.push(current)
  }
  }
  return invalidArray
}

console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

console.log(findInvalidCards(batch))
function idInvalidCardCompanies(invalidBatch) {
  const companies = [];
  for (let i = 0; i < invalidBatch.length; i++) {
    switch (invalidBatch[i][0]) {
      case 3:
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        break
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break
      default:
       // console.log('Company not found');
    }
  }
  return companies;
}


console.log(idInvalidCardCompanies([invalid2])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid1])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards






