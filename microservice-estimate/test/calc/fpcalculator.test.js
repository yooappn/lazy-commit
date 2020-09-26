import { fpCalc, gsc, personHours } from '@/calc/fpcalculator.js';
import { ifpug, calcUFP } from '@/calc/functionpoint.js';

describe('FpCalculator', () => {

    test('gsc', () => {
        const mono = gsc('mono');
        const monoAct = mono.vaf();

        expect(mono.tdi()).toBe(48);
        expect(monoAct).toBe(1.13);
    });

    test('calcUFP', () => {
        const eio = 1;
        const ilf = 1;
        const fp = ifpug(eio, eio, eio, ilf, ilf, ilf, 30, 5);

        const act = calcUFP([fp]);

        expect(act).toBe(30);
    });

    test('fpCalc', () => {
        const val = personHours([fpCalc(6, 'mono', gsc('mono'))], 15);

        expect(val).toEqual([47]);
    });

});
