# Input

| Name      | Type      | Default value   | Description                                         |
|-----------|-----------|-----------------|-----------------------------------------------------|
| **name**	| string 	  | -				        | Name of the input. 	                                |
| className	| string 	  | ```''```				| Class added to the main component.	                |
| error 	  | string 	  | ```''```				| Text of the error (if any exist).			              |
| label 	  | string 	  | ```''```				| Name of the field.			                            |
| onBlur 	  | function 	| ```() => {}```  | Callback when the input loses focus.			          |
| onChange 	| function 	| ```() => {}```  | Callback when the input content changes.			      |
| onFocus 	| function  | ```() => {}```  | Callback when the input gain focus.			            |
| pristine 	| bool 	    | ```true```			| Set to ```true```	if inpun never had been focused.  |
| style 	  | object 	  | ```{}```				| Additional styles for the main component.			      |
| type 	    | string 	  | ```'text'```	  | Equivalent for HTML ```type``` attribute.			      |
| value 	  | string 	  | ```''```				| Value of the input.		                              |
