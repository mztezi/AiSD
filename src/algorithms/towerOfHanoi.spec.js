import { towerOfHanoi } from "./towerOfHanoi.js";

describe('towerOfHanoi', () => {
    it('should log on the console message: Move disk 1 from A to C for argument 1', () => {
        // assign
        const num = 1;
        const a = 'A';
        const b = 'B';
        const c = 'C';

        // act
        spyOn(console, 'log');
        towerOfHanoi(num, a, c, b);

        // assert
        expect(console.log).toHaveBeenCalledWith(`Move disk 1 from A to C`);
    });
})