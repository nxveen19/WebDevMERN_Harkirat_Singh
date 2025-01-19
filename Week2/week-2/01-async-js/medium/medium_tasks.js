// Read a file, remove all the extra spaces and write it back to the same file.

const fs = require('fs');

fs.readFile("example.txt", 'utf-8', (err, data) => {
    console.log("og data", data);
    let new_data =  data.split(' '); // splitted the data with spaces as trim() doesnt remove whitespaces in middle 
    console.log("Trimmed data : " , new_data)
    const new_data1 = new_data.filter(word => word !== '').join(" ") // it is then filtered by reoving '' spaces and then joined
    console.log(new_data1);
fs.writeFile("example.txt", new_data1, 'utf-8', (err) => {
    console.log('updated successfully')
});
});

// Task 2:

// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)