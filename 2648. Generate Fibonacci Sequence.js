/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a=0;
    let b=1;
    while(1)
    {
         yield a;
         let c=a+b;
         b=a;
         a=c;
    }

};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */