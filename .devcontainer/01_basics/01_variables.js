const accountId = 144553
let accountEmail = "shahbaz@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail = "sh@sh.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var
because of issue in black scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])

