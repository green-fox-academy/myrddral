import { Thing } from './thing.hu.js';
import { Fleet } from './fleet.hu.js';

let fleet = new Fleet();

// -  Van egy `Thing` osztályod
// -  Van egy `Fleet` osztályod
// - Ezen osztályokat használva érd el az alábbi kimenetet:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

const things = [
    new Thing('Get milk'),
    new Thing('Remove the obstacles'),
    new Thing('Stand up'),
    new Thing('Eat lunch')
]

things[2].complete();
things[3].complete();

fleet.add(things[0]);
fleet.add(things[1]);
fleet.add(things[2]);
fleet.add(things[3]);

console.log(fleet.toString());