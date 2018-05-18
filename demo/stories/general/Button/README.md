# Button

| Nazwa     | Typ           | Wartość domyślna | Opis                									                                                                                                                                      |
|-----------|---------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| children 	| node / string | ```''```				 | Zawartość przycisku.									                                                                                                                                      |
| className | string 	      | ```''``` 		     | Klasa dodana do głównego komponentu. 							                                                                                                                        |
| ghost 	  | bool 		      | ```false```      | Ustawienie na ```true``` tworzy przycisk z przezroczystym tłem. 	                                                                                                          |
| kind 		  | string 	      | ```'primary'```  | Określa kolor przycisku. Możliwe wartości to: ```'primary'```, ```'accent'```, ```'grey'```, ```'white'```, ```'info'```, ```'success'```, ```'error'```, ```'warning'```. |
| label 		| string 	      | ```''```         | Tekst w przycisku. Może zostać wykorzystany, gdy przycisk nie posiada ```children```                                                                                       |
| onClick 	| function      | ```() => {}```   | Funkcja wykonywana po kliknięciu przycisku.				                                                                                                                        |
| size 		  | string        | ```'md'``` 	     | Oreśla wysokość przycisku i wielkość fontu. Możliwe wartości to: ```'sm'```, ```'md'```, ```'lg'```.	                                                                      |
| type 		  | string        | ```'button'```   | Odpowiednik atrybutu ```type``` w HTML.	                                                                                                                                  |
