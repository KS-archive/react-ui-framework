# Floating Action Button (FAB)

## ```<FAB />```

| Name     | Type            | Default value     | Description                                                                                                                                                                                                    |
|-----------|----------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **icon** 	| string 	       | -				            | Path to the file with default icon for button.								                                                                                                                                              |
| count 	  | number 	       | ```null```				    | Value of the counter in top right corner of the button. Is showed only if button doesn't contain ```items```.								                                                                                |
| iconOpen 	| string 	       | ```''```				      | Path to the file with icon which is showed when button is active.								                                                                                                                            |
| items 	  | array[object]  | ```[]```				      | Elements showed after clicking on the button.								                                                                                                                                                |
| offset 	  | array[number]  | ```[0, 0]```				  | Button translation from default position [horizontally, vertically].								                                                                                                                        |
| onClick 	| function 	     | ```() => {}```			  | Callback when the button has been clicked (if it doesn't contain ```items```).								                                                                                                              |
| position 	| string 	       | ```'right bottom'``` | Default button position on the page. Possible values: ```left top```, ```left center```, ```left bottom```, ```center top```, ```center bottom```, ```right top```, ```right center```, ```right bottom```. |
| title 	  | string 	       | ```''```				      | Title showed after hovering the button.								                                                                                                                                                      |

## ```FAB item```
| Name      | Type           | Default value        | Description                                     |
|-----------|----------------|----------------------|-------------------------------------------------|
| **icon** 	| string 	       | -				            | Path to the file with default icon for button.	|
| onClick 	| function 	     | ```() => {}```			  | Callback when the button has been clicked.      |
| title 	  | string 	       | ```''```				      | Title showed after hovering the button.			    |
