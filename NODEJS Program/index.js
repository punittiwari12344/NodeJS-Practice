const fs= require("fs");

//TO CREAT A NEW FOLDER
// fs.mkdirSync("text.txt");

// TO CREAT AND WRITE A FILE 
// fs.writeFileSync("read.txt","welcome to my youtube channal");
// fs.writeFileSync("read.txt","Thapa Technical , welcome to my youtube channal");

//TO ADD MORE TEXT IN THE SAME FILE 
// fs.appendFileSync("read.txt","pppppppp ppppp pppp");

//TO READ THE SAVED FILE
// fs.readFileSync("read.txt");


//NODE.JS INCLUDES AN ADDITIONAL DATA TYPE CALLED BUFFER
//(NOT AVILABLE IN BROWSER'S JAVASCRIPT ).
//BUFFER IS MAINLY USED TO STORE BINERY DATA,
// WHILE READING FROM A FILE OR RECEIVING PACKETS OVER THE NETWORK.  

// {/* <Buffer 54 68 61 70 61 20 54 65 63 68 6e 69 63 61 6c 20 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 79 6f 75 74 75 62 65 20 63 68 61 6e 6e 61 6c 0d 0a 0d ... 90 more bytes> */}

// const buf_data=fs.readFileSync("read.txt");
// org_data = buf_data.toString();
// console.log(org_data); 

//TO RENAME THE FILE NAME

fs.renameSync('read.txt','readwrite.txt');