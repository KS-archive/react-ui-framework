# Floating Action Button (FAB)

## ```<FAB />```

| Nazwa     | Typ            | Wartość domyślna     | Opis                                                                                                                                                                                                    |
|-----------|----------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| count 	  | number 	       | ```null```				    | Wartość licznika w górnym rogu przycisku. Wyświetlana tylko jeśli przycisk nie posiada ```items```.								                                                                                      |
| **icon** 	| string 	       | -				            | Ścieżka do pliku z domyślną ikoną w przycisku.								                                                                                                                                          |
| iconOpen 	| string 	       | ```''```				      | Ścieżka do pliku z ikoną wyświetlaną, gdy przycisk jest aktywny.								                                                                                                                        |
| items 	  | array[object]  | ```[]```				      | Elementy rozwijane po aktywacji przycisku.								                                                                                                                                              |
| offset 	  | array[number]  | ```[0, 0]```				  | Przesunięcie przycisku od pozycji domyślnej w [poziomie, pionie].								                                                                                                                        |
| onClick 	| function 	     | ```() => {}```			  | Funkcja wykonywana po kliknięciu przycisku (o ile nie posiada ```items```).								                                                                                                              |
| position 	| string 	       | ```'right bottom'``` | Domyślna pozycja na stronie. Możliwe wartości to: ```left top```, ```left center```, ```left bottom```, ```center top```, ```center bottom```, ```right top```, ```right center```, ```right bottom```. |
| title 	  | string 	       | ```''```				      | Tytuł wyświetlany po najechaniu na przycisk.								                                                                                                                                            |

## ```FAB item```
| Nazwa     | Typ            | Wartość domyślna     | Opis                                            |
|-----------|----------------|----------------------|-------------------------------------------------|
| **icon** 	| string 	       | -				            | Ścieżka do pliku z domyślną ikoną w przycisku.  |
| onClick 	| function 	     | ```() => {}```			  | Funkcja wykonywana po kliknięciu przycisku.     |
| title 	  | string 	       | ```''```				      | Tytuł wyświetlany po najechaniu na przycisk.    |
