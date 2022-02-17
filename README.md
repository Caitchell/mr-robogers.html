# Mr.Robogers Neighborhood

#### By: Caitlyn Mitchell

#### This is a webpage where the user inputs any number they would like, and the form returns a string of numbers from the number 0 to the number the user inputted. If any of the numbers before the number they entered, or the number they entered contains the numbers, "1", "2", or "3", those numbers will be replaced with the srtings "Beep!", "Boop!", and "Won't you be my neighbor?".



## Technologies Used

#### 

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Setup/Installation
* Clone or Download repository to your desktop.
* Navigate to project folder.
* Open index.html in your browser window.


## Tests

### Describe: numbersRoboger()
* Test:"It will return a list of numbers. Numbers that contain the number 1 will be replaced with the string 'Beep!'"
* Code: numbersRoboger();
* Expected Output:'"0","Beep!","2","3","4","5","6","7","8","9,"'

* Test:"It will return a list of numbers. Numbers that contain the number 2 will be replaced with the  string 'Boop!'"
* Code: numbersRoboger();
* Expected Output: '"0","Beep!","Boop!","3","4","5","6","7","8","9,"'

* Test:"It will return a list of numbers. Numbers that contain the number 3 will be replaced with the string 'Won't you be my neighbor?'"
* Code: numbersRoboger();
* Expected Output: '"0","Beep!","Boop!","Won't you be my neighbor?","4","5","6","7","8","9,"'

* Test:"It will return a list of numbers and strings. If user inputs the number 7, the webpage should return all numbers and strings up to the number 7.
* Code: numbersRoboger();
* Expected Output: '"0","Beep!","Boop!","Won't you be my neighbor?","4","5","6","7"'

* Test:"If the user inputs the number 15 it should list all numbers and strings, ending on the number 15 which should now read 'Beep!'"
* Code: numbersRoboger();
* ExpectedOutcome: '"0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!"'

## Known Bugs

#### No known bugs.

## License

#### MIT