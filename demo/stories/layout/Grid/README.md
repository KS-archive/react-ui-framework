# Grid

## ```<Grid />```

| Name          | Type    | Default value    | Description                                                                      |
|---------------|---------|------------------|----------------------------------------------------------------------------------|
| **children**  | node    | -		             | Content inside the grid. You must provide ```<GridItem />``` as direct children. |
| className     | string 	| ```''```				 | Class added to the main component. 	                                            |
| dynamic       | bool 	  | ```false``` 		 | When is set as true entire grid will rerender on every props change.             |
| fluid 	      | bool    | ```false``` 		 | When is set as true columns will occupy 100% of parent width.	                  |
| style 		    | object  | ```{}``` 	       | Additional styles for the main component.                                        |

## ```<GridItem />```
#### {size} is one of values: xs, sm, md, lg, xl, xxl.

| Name          | Type    | Default value    | Description                                                |
|---------------|---------|------------------|------------------------------------------------------------|
| className     | string  | ```''```				 | Class added to the main component. 	                      |
| {size}        | number  | ```1``` 		     | Width of the item. Can receive values from 1 to 12         |
| {size}-offset | number  | ```0``` 		     | Move columns to the right by specified number of columns.	|
| style 		    | object  | ```{}``` 	       | Additional styles for the main component.                  |
