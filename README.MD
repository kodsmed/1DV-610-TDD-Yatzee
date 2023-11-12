# TDD Project

## Yatzee

### Description

This project is an assignment for the course 1DV609 Software Testing at Linnaeus University.  
The assignment is to create a project using TDD (Test Driven Development) and to use a  
test framework to do Unit Testing, mocking and coverage testing.  

The project is a game of Yatzee, a dice game where the player rolls six dice and tries to  
get the best possible combination of dice values. The player can roll the dice up to three  
times per round and can choose to keep any number of dice between rolls. The player can  
choose to score the round in any of the 15 categories, but can only score each category once.  
The player with the highest score after 15 rounds wins the game.  

### Authors

Adam Sjöström, as223js  
Jimmy Karlsson, jk224jv

### Infrastructure choices

The project is written in TypeScript and uses the test framework Jest and the Jest/Dom Testing Library.
Jest supports mocking and coverage testing, and the Jest/Dom Testing Library is a library that  
allows for testing of the web pages, which is useful since any UI in a js/Ts project is almost always  
written in HTML and CSS. Our project follows this standard, and the UI is written in HTML and CSS.

### Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run build-ts` to build the project from TypeScript to JavaScript
4. Run `npm run test` to run the tests
5. Run `npm run coverage` to run the coverage tests
6. Run `npm run start` to start the project