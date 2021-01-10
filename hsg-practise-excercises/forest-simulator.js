'use strict';

class Forest {
    constructor(trees) {
        this.trees = trees;
    }

    rain() {
        trees.forEach(element => {
            element.irrigate();
        });
    }

    getStatus() {
        const listOfTrees = trees.map(function (tree) {
            return `There is a ${tree.height} tall ${tree.type} in the forest.`;
            });
        return listOfTrees;
    }

    isEmpty() {
        return (trees.length === 0 ? true : false);
    }

    cutTrees() {
        trees.forEach(tree => {
            if (lumberjack.canCut(tree)) {
                delete tree;   /*does not work this way*/
            }
        });
    }
}

class Lumberjack {
    canCut(tree) {
        return (tree.getheight() > 4 ? true : false);
    }
}

class Tree {
    constructor(type, growUnit, height = 0) {
        this.type = type;
        this.height = height;
        this.growUnit = growUnit;
    }

    irrigate() {
            this.height += this.growUnit;
    }

    getheight() {
        return this.height;
    }
}

let trees = [
    new Tree("Whitebark Pine", 2),
    new Tree("Whitebark Pine", 2, 6),
    new Tree("Foxtail Pine", 1, 8)
]
const forest = new Forest(trees);
const lumberjack = new Lumberjack();

console.log(trees);
forest.cutTrees();
console.log(trees);
