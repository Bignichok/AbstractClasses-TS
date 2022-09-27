import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("asdasdas");
const linkedList = new LinkedList();

linkedList.add(100);
linkedList.add(110);
linkedList.add(10);
linkedList.add(5);
linkedList.add(-8);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
linkedList.print();