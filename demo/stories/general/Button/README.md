# Button

| Name      | Type          | Default value    | Description                									                                                                                                                              |
|-----------|---------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| children 	| node / string | ```''```				 | Content inside the button.									                                                                                                                                |
| className | string 	      | ```''``` 		     | Class added to the main component. 							                                                                                                                          |
| ghost 	  | bool 		      | ```false```      | Setting on ```true``` creates a button with transparent background. 	                                                                                                      |
| kind 		  | string 	      | ```'primary'```  | Determines background color. Possible values: ```'primary'```, ```'accent'```, ```'grey'```, ```'white'```, ```'info'```, ```'success'```, ```'error'```, ```'warning'```. |
| label 		| string 	      | ```''```         | Content inside the button. Can be used instead of ```children```.                                                                                                          |
| onClick 	| function      | ```() => {}```   | Callback when the button has been clicked.				                                                                                                                          |
| size 		  | string        | ```'md'``` 	     | Dtetermines height and font size ot the button. Possible values: ```'sm'```, ```'md'```, ```'lg'```.	                                                                      |
| style 		| object        | ```{}``` 	       | Additional styles for the main component.	                                                                                                                                |
| type 		  | string        | ```'button'```   | Equivalent for HTML ```type``` attribute.	                                                                                                                                |
