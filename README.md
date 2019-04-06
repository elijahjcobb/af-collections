# AFCollections
AFCollections is a set of modules that communicate together to replicate and grow upon the default JavaScript structures.

## Included Structures 
| Class | Description |
| --- | --- |
| [`AFArray`](https://github.com/elijahjcobb/af-collections/blob/master/ts/array/AFArray.ts) | An immutable generic class representing a list of values. |
| [`AFArrayList`](https://github.com/elijahjcobb/af-collections/blob/master/ts/array/AFArrayList.ts) | A mutable generic class representing a list of values. |
| [`AFDictionary`](https://github.com/elijahjcobb/af-collections/blob/master/ts/map/AFDictionary.ts) | An immutable generic class representing a group of key value pairs. |
| `AFMap` | A mutable generic class representing a group of key value pairs. | |
| `AFIterator` | A generic iterator to iterate through provided values. |
| `AFCSV` | A helper class to generate a `CSV` endoded `string` from an `AFArray` instance. |
| `AFEnum` | A helper class to generate both `AFArray` and `AFArrayList` instances from a typescript `enum `. |
| `AFQueue` | A mutable generic class representing a queue. |
| `AFStack` | A mutable generic class representing a stack. |

## Accessing Structures
All the structures are packages onto `AFCollections`. Just import it like normal and you can use any structure of the package.
```
import AFCollections = require("af-collections");

let array: AFCollections.Array<any>;
let arrayList: AFCollections.ArrayList<any>;
let dictionary: AFCollections.Dictionary<any, any>;
let map: AFCollections.Map<any, any>;
let csv: AFCollections.CSV;
let iterator: AFCollections.Iterator<any>;
let set: AFCollections.Set<any>;
let stack: AFCollections.Stack<any>;

AFCollections.Enum.convertEnumToArray(null);
```

## Generics
Yes, literally everything is generic. I wrote this for a huge project and make sure everything I made was generic.

## Error Handling
Most classes throw errors when you do something that is a "no-no". They are just thrown as native `Error` instances.

## Full Documentation

### Source Code
I have completely documented everything so feel free to poke around the actual code. In the table at the top each class links directly to it's `TypeScript` source code on GitHub.

### TypeScript Declaration Files
You can also use `npm install @types/af-collections` to get all my declaration files.
## Bugs
If you find any bugs please create an issue on [GitHub](https://github.com/elijahjcobb/af-collections/issues) or if you are old fashioned email me at [elijah@elijahcobb.com](mailto:elijah@elijahcobb.com).