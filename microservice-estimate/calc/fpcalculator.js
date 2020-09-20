import { ifpug, calcUFP } from './functionpoint';

const gscObj = (dc, ddp, p, huc, tr, ode, eue, ou, cp, re, ist, oe, ms, fc) => {
    return {
        dataCommunication : dc,
        distributedDataProcessing : ddp,
        performance : p,
        heavilyUsedConfiguration : huc,
        transactionRate : tr, // 5
        onlineDataEntry : ode,
        endUserEfficiency : eue,
        onlineUpdate : ou,
        complexProcessing : cp,
        reusability= re, // 10
        installationEase : ist,
        operationalEase : oe,
        multipleSites : ms,
        facilitateChange : fc
    };
};

const _params = {
    models : {
       mono : {
        fp: {
            externalIO : 1,
            ilf : 5,
            records : 30
        },
        gsc: gscObj(3, 3, 4, 4, 3 /* 5 */, 5, 4, 4, 3, 2 /* 10 */, 4, 4, 1, 4),
       },
       micro: {
        fp: ifpug(1, 1, 1, 0, 1, 2, 20, 4),
        gsc: gscObj(5, 5, 4, 4, 3 /* 5 */, 1, 4, 4, 1, 4 /* 10 */, 1, 1, 1, 1),
       }
    }
};

const applyMonoInfuence = (moduleCount) => {
    const mono = _params.models.mono.fp; 
    const eio = mono.externalIO;
    const ilf = mono.ilf;
    const mdl = [eio, eio, eio, ilf, ilf, ilf, mono.records, ilf];
    const ret = [];
    for (let i = 0; i < moduleCount ; i++) {
        ret.push(Array.from(mdl));
    }
    return ret;
};

const fpCalc = (moduleCount, fpModel, gsc, fpCalcFn = undefined) => {
    // apply model influence
    const fps = fpModel === 'mono' ? applyMonoInfuence(moduleCount) : [];
    // calc fp
    return gsc.vaf() * calcUFP(fps);
};

export { fpCalc };