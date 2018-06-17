# Select

| Name        | Type    | Default value   | Description                                             |
|-------------|---------|-----------------|---------------------------------------------------------|
| **label**	  | string 	| ```''```				| Name showed at the top of select.	                      |
| **name**	  | string  | ```''```				| Name of the select. 	                                  |
| className	  | string  | ```''```				| Class added to the main component.	                    |
| isClearable	| bool 	  | ```true```			| Show "x" icon, which can clear select value.	          |
| error	      | string  | ```''```				| Text of the error (if any exist).		                    |
| onBlur	    | func 	  | ```() => {}```	| Callback when the select loses focus.	                  |
| onChange	  | func 	  | ```() => {}```	| Callback when the select content changes.	              |
| onFocus	    | func 	  | ```() => {}```	| Callback when the select gain focus.		                |
| items	      | array   | ```[]```				| Options to select.	                                    |
| pristine	  | bool 	  | ```true```			| Set to ```true```	if input never had been focused.      |
| isSearchable| bool 	  | ```false```			| Give user possibility to search through options.	      |
| style	      | object  | ```{}```				| Additional styles for the main component.	              |
| value	      | string 	| ```''```				| Value of the select.		                                |
