# RealEstateApp
## Steps to run the app
1) Clone the repository using git clone https://github.com/DivyaMohan94/RealEstateApp.git
2) After the repository is cloned, navigate to the project directory using the following command: cd real_estate_fe
3) Once you’re inside the project directory, run the following command to install the dependencies required for the project: npm -i
4) In case of issues shown after the npm install, run the below to automatically fix the issues: npm audit fix
5) Use this command in the terminal to start the app: npm start

This command will start a local development server and run the React project in your web browser. You can access the project by navigating to http://localhost:3000 in your web browser.

## Search Query
 I have integrated Fuse.js into my React application to provide advanced search functionality. 
 Fuse.js offers powerful features such as fuzzy search, enabling users to find relevant results even when their query is not an exact match. 

In this app, the key attributes you can search for include tags, description, address, zip code, year built, number of beds, and number of baths. I have used Fuse.js to perform searches across all of these fields, generating results based on their relevance and score.

For example, 

 1) Searching for the string 'sun' in our application will yield results that include homes located in Sunnyvale, as well as properties with tags and descriptions containing the keyword 'sun'.
 2) Searching for 'sunlight' will narrow down the search and provide you with the most relevant results. This search term will focus on properties with tags, descriptions, or other key fields containing the keyword 'sunlight,' helping you discover homes that meet your specific preferences.
 3) Search for "wood" to get homes with hard wood floors.
 4) Other search terms: tesla, RV, single family, 94587, palo

The output is sorted based on relevance, prioritizing properties with tags, descriptions, or other key fields containing the keyword.
