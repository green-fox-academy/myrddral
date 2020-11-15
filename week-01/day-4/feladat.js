'use strict';

const lineCount = 5;
let i = 0;

    for (let i=1; i <= lineCount; i++)
    {
      let eachLine = ''
  
        for (let j=1; j<=i; j++)
        {
          eachLine += "*"
        }
        console.log(eachLine);
    }
  
