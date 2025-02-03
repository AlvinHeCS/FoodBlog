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
        console.error(error);
    }

}
// Test the login function
console.log(login("angie", "password"))


function postText(fileName, info) {

    // need to check for unique file otherwise would overwrite old file and we dont want that +-
    const newFileName = fileName + ".txt";
    const filePath = "./posts/" + newFileName;
    console.log(newFileName)
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (!err) {
            console.error('Error: File already exists');
        } else {
            fs.writeFile(filePath, info, (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    return true;
                } else {
                    console.log('File created and written successfully.');
                    return false;
                }
            });
        }
    });
}

// test postText function
postText("hello", "hello my name is Alvin")
postText("hi", "hello my name is Alvin")


// function postImg()

// function editPost

// function getfileInformation

//function getImg