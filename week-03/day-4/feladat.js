'use strict';

// HAROMSZOG

// Írj egy programot, ami rajzol
// egy ilyen háromszöget:
//
// *
// **
// ***
// ****
//
// A háromszögnek annyi sora legyen, mint amennyi a lineCount értéke

const lineCount = 10;
//let i = 0;

    // for (let i=0; i < lineCount; i++)
    // {
    //   debugger
    //   let eachLine = ''
    //     for (let j=0; j<=i; j++)
    //     {
    //       eachLine += '*'
    //     }
    //     console.log(eachLine);
    // }
    // console.log();
    
    // for (let i = 1; i <= lineCount; i++) {
    //   console.log('*'.repeat(i));
    // }
    
    // console.log();

// PIRAMIS

// Írj egy programot, ami
// ilyen piramist rajzol:
//
//
//    *      3 space 1 csillag  0    csillagszam:   lineCount
//   ***    2 space 3 csillag    1             lineCount +1
//  *****    1 space 5 csillag    2            lineCount +2
// *******  0 space 7 csillag      3           lineCount +3
//
// A piramisnak annyi sora legyen, mint amennyi a lineCount értéke


  // let printLine = ''

  // for (let i = 1; i <= lineCount; i++) {
  //   printLine = ' '.repeat(lineCount - i) + '*' + '*'.repeat((i-1)*2);

  //    console.log(printLine);
  // }

  for (let i = 1; i <= lineCount; i++) {
     console.log(' '.repeat(lineCount - i) + '*' + '*'.repeat((i-1)*2));
  }

  // IS THIS BAD PRACTICE? 