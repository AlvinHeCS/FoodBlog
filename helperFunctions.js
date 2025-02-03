"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readline = require("readline");
// Login function
function ProcessLine(user, pass, line) {
    console.log("This is user: " + user);
    console.log("this is pass: " + pass);
    console.log("This is line: " + line);
    var userPassArray = line.split(' ');
    var lineUser = userPassArray[0];
    var linePass = userPassArray[1];
    console.log("This is lineUser: " + lineUser);
    console.log("This is linePass: " + linePass);
    return user === lineUser && pass === linePass;
}
function login(user, pass) {
    try {
        var fileStream = fs.createReadStream('./loginCredentials.txt', 'utf-8');
        var readingInterface_1 = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        var successfulLogin_1 = false;
        readingInterface_1.on('line', function (line) {
            if (ProcessLine(user, pass, line)) {
                console.log("successful log in");
                successfulLogin_1 = true;
                readingInterface_1.close();
            }
        });
        readingInterface_1.on('close', function () {
            console.log('File reading completed.');
            console.log(successfulLogin_1);
            return successfulLogin_1;
        });
    }
    catch (error) {
        console.error(error);
    }
}
// Test the login function
console.log(login("angie", "password"));
function postText(fileName, info) {
    // need to check for unique file otherwise would overwrite old file and we dont want that +-
    var newFileName = fileName + ".txt";
    var filePath = "./posts/" + newFileName;
    console.log(newFileName);
    fs.access(filePath, fs.constants.F_OK, function (err) {
        if (!err) {
            console.error('Error: File already exists');
        }
        else {
            fs.writeFile(filePath, info, function (err) {
                if (err) {
                    console.error('Error writing to file:', err);
                    return true;
                }
                else {
                    console.log('File created and written successfully.');
                    return false;
                }
            });
        }
    });
}
postText("hello", "hello my name is Alvin");
postText("hi", "hello my name is Alvin");
// function postImg
// function editPost
// function getfileInformation
//function getImg321321
