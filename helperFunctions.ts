import * as fs from 'fs';
import * as readline from 'readline';


// Login function
function ProcessLine(user, pass, line) {
    console.log("This is user: " + user)
    console.log("this is pass: " + pass)
    console.log("This is line: " + line)
    const userPassArray = line.split(' ');
    const lineUser = userPassArray[0];
    const linePass = userPassArray[1];
    console.log("This is lineUser: " + lineUser)
    console.log("This is linePass: " + linePass)
    return user === lineUser && pass === linePass;
}


function login(user, pass) {
    try {
        const fileStream = fs.createReadStream('./loginCredentials.txt', 'utf-8');
        const readingInterface = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        
        let successfulLogin = false;
        readingInterface.on('line', (line) => {
            if (ProcessLine(user, pass, line)) {
                console.log("successful log in")
                successfulLogin = true;
                readingInterface.close();
            }
        });
        
        readingInterface.on('close', function () {
            console.log('File reading completed.');
            console.log(successfulLogin)
            return successfulLogin;
        
        });
    }
    catch (error) {
        console.log(error);
    }

}
// Test the login function
console.log(login("angie", "password"))
