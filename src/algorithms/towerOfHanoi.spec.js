import { towerOfHanoi } from "./towerOfHanoi.js";

describe('towerOfHanoi', () => {
    it('should log on the console message: Move disk 1 from A to C for argument 1', () => {
        // assign
        const num = 1;
        const a = 'A';
        const b = 'B';
        const c = 'C';
        spyOn(console, 'log');

        // act
        towerOfHanoi(num, a, c, b);

        // assert
        expect(console.log).toHaveBeenCalledWith('Move disk 1 from A to C');
    });

    it(`should log on the console message: 
        Move disk 1 from A to C, 
        Move disk 2 from A to B, 
        Move disk 1 from C to B, 
        Move disk 3 from A to C, 
        Move disk 1 from B to A, 
        Move disk 2 from B to C,
        Move disk 1 from A to C`, () => {

        // assign
        const num = 3;
        const a = 'A';
        const b = 'B';
        const c = 'C';

        // act
        spyOn(console, 'log');
        towerOfHanoi(num, a, c, b);

        // assert
        expect(console.log.calls.allArgs()).toEqual([
            ['Move disk 1 from A to C'],
            ['Move disk 2 from A to B'],
            ['Move disk 1 from C to B'],
            ['Move disk 3 from A to C'],
            ['Move disk 1 from B to A'],
            ['Move disk 2 from B to C'],
            ['Move disk 1 from A to C'],
        ]);
    });
});