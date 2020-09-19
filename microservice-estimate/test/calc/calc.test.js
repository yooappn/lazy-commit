import { M, MZ } from '@/calc/matrix.js';


describe('Matrix Class', () => {

    test('M function', () => {
        const m1 = M([
            [1, 1],
            [2, 2]
        ]);
    
        expect(m1.values[0]).toEqual([1, 1]);
        expect(m1.values[1]).toEqual([2, 2]);
    });

    test('MZ function', () => {
        const m = MZ(2,2);
        expect([[0, 0], [0, 0]]).toEqual(m.values);
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

        const act = m1.add(m2);
        expect(exp.values).toEqual(act.values);
    });

    test('Matrix mul', () => {
        const m1 = M([
            [1, 1],
            [2, 2]
        ]);

        const m2 = M([
            [1, 2],
            [1, 2]
        ]);

        const act = m1.mul(m2);
        expect([[2, 4],[4, 8]]).toEqual(act.values);
    })
});