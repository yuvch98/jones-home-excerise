import {run} from './automation/testAutomation.js'
async function main() {
    await run();
    console.log("Automation completed.");
}

main();