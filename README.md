# FinalProject
Feeatures and description of the site:

3 APIs were used to get **data**:

1) API for generating Investigators.
2) Custom/Server Side Programmed API to generate Spies in the required object format.
3) API to get live weather data. **<==API key has been temporarily disactivated for security purposes.**

MongoDB used to store Operator Data.
1 Database, 2 Collections.

All data is stored on MongoDB. Investigator/Spy Data is fetched from Mongo DB and rendered on webpage.
After input is submitted by user, appropriate call to backend server(MongoBD) gets data and **filters** it according to user input requirements.
