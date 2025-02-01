import * as fs from 'fs';
import * as readline from 'readline';


// Login function 
async function ProcessLine(user: string, pass: string, line: string): Promise<boolean> {
    const userPassArray = line.split(' ')
    const lineUser = userPassArray[0];
    const linePass = userPassArray[1];
    if (user == lineUser && pass == linePass) {
        return true
    } else {
        return false
    }
}

async function login(user: string, pass: string): Promise<boolean> {
    try {
        const fileStream = await fs.createReadStream('./loginCredentials.txt', 'utf-8');
        const rl = readline.createInterface({
            input:fileStream,
            crlfDelay: Infinity,
        });
        for await (const line of rl) {
            if (await ProcessLine(user, pass, line)) {
                return true; 
            }
        }
        console.log('File reading completed.');
        return false;
    } catch (error){
        console.error("Error:", error);
        return false;
    }
}


(async () => {
    console.log(await login("angie", "password"))
})();