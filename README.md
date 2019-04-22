# CRUD-with-Express-and-MySQL

This project is built with Node JS (with Express JS) and SQL. CRUD is done with this API- Create, Read, Update and Delete

## Installation

1. Clone this repository <br>
2. Start the Node Server i.e. nodemon app.js or node app.js <br>
3. Install Postman for executing CRUD operation
4. You need to first generate the token as shown in the screenshot below
5. Now for all operation you need to pass: Authorization: brearer <your_generated_token> as shown in the screenshots below. Without passing token it will show Unauthoized access 
6. I have added Postman collection file for all requests, please follow it step by step

## Screenshots

![Screenshot of Starting Node Server](https://user-images.githubusercontent.com/15896579/56477180-5be8e980-64c0-11e9-99f2-77e9f9b9b992.png?raw=true "Screenshot of Starting Node Server")

![Screenshot of different postman requests](https://user-images.githubusercontent.com/15896579/56477181-5f7c7080-64c0-11e9-88d0-213142a34c09.png?raw=true "Screenshot of different postman requests")

![Screenshot of first basic request](https://user-images.githubusercontent.com/15896579/56477182-64412480-64c0-11e9-82c4-4f81034ea803.png?raw=true "Screenshot of first basic request")

![Screenshot of generate token](https://user-images.githubusercontent.com/15896579/56477183-673c1500-64c0-11e9-850a-32af841e3275.png?raw=true "Screenshot of first generate token")

![Screenshot of adding gerenerated token in header of request](https://user-images.githubusercontent.com/15896579/56477187-6efbb980-64c0-11e9-8288-3be1c47af5af.png?raw=true "Screenshot of adding gerenerated token in header of request")

![Screenshot of create / insert](https://user-images.githubusercontent.com/15896579/56477188-7327d700-64c0-11e9-9bb6-74c04e12380a.png?raw=true "Screenshot of create / insert")

![Screenshot of inserted value in DB](https://user-images.githubusercontent.com/15896579/56477190-7753f480-64c0-11e9-97d5-576e33e6386d.png?raw=true "Screenshot of inserted value in DB")

![If tried any request without passing token in header](https://user-images.githubusercontent.com/15896579/56477195-95215980-64c0-11e9-88cb-7ec91c24ec93.png?raw=true "If tried any request without passing token in header")

![Read / Fetch all data from DB](https://user-images.githubusercontent.com/15896579/56477195-95215980-64c0-11e9-88cb-7ec91c24ec93.png?raw=true "Read / Fetch all data from DB")

![Read / Fetch single data from DB by passing ID](https://user-images.githubusercontent.com/15896579/56477198-9e122b00-64c0-11e9-9a92-39848ec2d92a.png?raw=true "Read / Fetch single data from DB by passing ID")

![Update data from DB by passing ID](https://user-images.githubusercontent.com/15896579/56477200-a10d1b80-64c0-11e9-9944-7e7007ad3c1e.png?raw=true "Update data from DB by passing ID")

![Checking updated data in DB](https://user-images.githubusercontent.com/15896579/56477202-a4a0a280-64c0-11e9-9e39-e3bec0a7ea3b.png?raw=true "Checking updated data in DB")

![If any request passed without token](https://user-images.githubusercontent.com/15896579/56477206-a8342980-64c0-11e9-9970-2d143332f642.png?raw=true "If any request passed without token")

![Deleting single data by passing ID](https://user-images.githubusercontent.com/15896579/56477206-a8342980-64c0-11e9-9970-2d143332f642.png?raw=true "Deleting single data by passing ID")

![Checking deleting data in DB](https://user-images.githubusercontent.com/15896579/56477212-b1bd9180-64c0-11e9-9f28-43901be487b2.png?raw=true "Checking deleting data in DB")



