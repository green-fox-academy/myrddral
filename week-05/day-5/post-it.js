// Post-it
// Készíts egy PostIt osztályt, aminek a következők a tagváltozói:
// backgroundColor
// text
// textColor
// Készíts néhány példa post-it objektumot:
// egy narancssárgát kék szöveggel: "Egy, megerett a meggy"
// egy rózsaszínt fekete szöveggel: "Ketto, csipkebokor vesszo"
// egy sárgát zöld szöveggel: "1 liter tej!"

'use strict';

class PostIt {
    constructor (bgColor, text, textColor) {
        this.backgroundColor = bgColor;
        this.text = text;
        this.textColor = textColor;
    }
}

const postIts = [
    new PostIt('orange', 'Egy, megérett a meggy', 'blue'),
    new PostIt('pink', 'Kettő, csipkebokor vessző', 'black'),
    new PostIt('yellow', '1 liter tej!', 'green'),
]

console.log(postIts);