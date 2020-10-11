import { ifpug, calcUFP, GSC } from './functionpoint';

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
        reusability: re, // 10
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
    const ret = [];
    const mdl = ifpug(eio, eio, eio, ilf, ilf, ilf, mono.records, ilf);
    for (let i = 0; i < moduleCount ; i++) {
        ret.push(Array.from(mdl));
    }
    return ret;
};

const applyMicroInfuence = (moduleCount) => {
    const mdl = _params.models.micro.fp; 
    const ret = [];
    for (let i = 0; i < moduleCount ; i++) {
        ret.push(Array.from(mdl));
    }
    return ret;
};

const gsc = (fpModel) => {
    return new GSC(_params.models[fpModel].gsc);
};

const fpCalc = (moduleCount, fpModel, gsc, fpCalcFn = undefined) => {
    // apply model influence
    const fps = fpModel === 'mono' ? applyMonoInfuence(moduleCount) : applyMicroInfuence(moduleCount);
    // calc fp
    return gsc.vaf() * calcUFP(fps);
};

const eachFpCalc = (from, to, perHour = 10) => {
    const ret = {mono: [], micro: []};
    const monoGsc = gsc('mono');
    const microGsc = gsc('micro')
    for (let n = from; n <= to ; n++) {
        const mono = fpCalc(n, 'mono', monoGsc);
        const micro = fpCalc(n, 'micro', microGsc);
        ret.mono.push({n, point: mono});
        ret.micro.push({n, point: micro});
    }
    return ret;
};

const personHour = (p, perHour) => {return Math.round(p / perHour); };

const personHours = (fps, perHour) => {
    return fps.map(p => { return Math.round(p / perHour); })
};

export { fpCalc, eachFpCalc, gsc, personHours };