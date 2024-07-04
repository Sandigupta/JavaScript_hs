const accountId=1234;
let accountEmail="hitesh@gooogle.com";
// Generaly use let in the place of ver because var scope is does not deffine.
var accountPassword="12345";
accountCity="Jaipur"; //This is possible in js but not recommended to use it.
let accountState; //This means this variable is undiffine.

// accountId=2 //This is not allowed because we can't reassine the value of a const variable.

accountEmail="hc@hc.com"
accountPassword="123450"
accountCity="Bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);