import { M } from '@/calc/matrix.js';


describe('Matrix Class', () => {

    test('Matrix', () => {

        const m1 = M([
            [1, 1],
            [2, 2]
        ]);
    
        expect(m1.values[0]).toEqual([1, 1]);
        expect(m1.values[1]).toEqual([2, 2]);
    });

    test('Matrix add', () => {
        const m1 = M([
            [1, 1],
            [2, 2]
        ]);

        const m2 = M([
            [1, 1],
            [2, 2]
        ]);

        const exp = M([
            [2, 2],
            [4, 4]
        ]);

        m1.add(m2);
        expect(m1.values).toEqual(exp.values);
    });

});