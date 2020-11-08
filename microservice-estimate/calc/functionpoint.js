

const _v = {
  idx : {ei: 0, eo: 1, eq: 2, ilf: 3, eif: 4, det: 5, ret:6, ftr: 7},
  complexity: {
    high: 'high', avg: 'avg', low: 'low',
  },
  fp: {
    data : {
        ilf: {low: 7, avg: 10, high: 15},
        eif: {low: 5, avg: 7, high: 10}
    },
    tx : {
        ei : {low: 3, avg: 4, high: 6},
        eo : {low: 4, avg: 5, high: 7},
        eq : {low: 3, avg: 4, high: 6}
    }
  }
};

class GSC {

    constructor(vals) {
        this.data = Object.assign({},{
        dataCommunication : vals.dataCommunication,
        distributedDataProcessing : vals.distributedDataProcessing,
        performance : vals.performance,
        heavilyUsedConfiguration : vals.heavilyUsedConfiguration,
        transactionRate : vals.transactionRate, // 5
        onlineDataEntry : vals.onlineDataEntry,
        endUserEfficiency : vals.endUserEfficiency,
        onlineUpdate : vals.onlineUpdate,
        complexProcessing : vals.complexProcessing,
        reusability: vals.reusability, // 10
        installationEase : vals.installationEase,
        operationalEase : vals.operationalEase,
        multipleSites : vals.multipleSites,
        facilitateChange : vals.facilitateChange}); //14
    }

    tdi() {
        return Object.keys(this.data)
        .map(k => { return this.data[k]; })
        .reduce((a,b) => { return a + b; });
    }

    vaf() {
        return (this.tdi() * 0.01) + 0.65;
    }

    keys() {
        return Object.keys(this.data);
    }

    num(k) {
        return this.data[k];
    }
}

//
// https://typea.info/tips/wiki.cgi?page=%A5%D5%A5%A1%A5%F3%A5%AF%A5%B7%A5%E7%A5%F3%A5%DD%A5%A4%A5%F3%A5%C8#p5
// https://qiita.com/yasushi-jp/items/d128a06a5f6e6e22a0df#%E8%A8%88%E7%AE%97%E6%96%B9%E6%B3%95
//
// transaction fn
// ei : external input
// eo : external output
// eq : external in Query
//
// data fn
// ilf : internal logical file/data
// eif : external interface file/data
//
// metrix
// det : not iteratable record
// ret : iteratable record
// ftr : count of ilf number
//
const ifpug = (ei, eo, eq, ilf, eif, det, ret, ftr) => {
    return [ei, eo, eq, ilf, eif, det, ret, ftr];
}

const calcUFP = (fps) => {
    return fps.map((fp) => { return calcFP(fp); }).reduce((a, b) => { return a+b;})
}

const calcFP = (fp) => {
    const dataCpx = complexityOfData(fp);
    const txCpx = complexityOfTx(fp);

    const point = _v.fp.data.ilf[dataCpx] * fp[_v.idx.ilf]
     + _v.fp.data.eif[dataCpx] * fp[_v.idx.eif]
     + _v.fp.tx.ei[txCpx] * fp[_v.idx.ei]
     + _v.fp.tx.eo[txCpx] * fp[_v.idx.eo]
     + _v.fp.tx.eq[txCpx] * fp[_v.idx.eq];
     /*
     console.log('cof:ilf>' + _v.fp.data.ilf[dataCpx]
        + ',ilf:' + fp[_v.idx.ilf]
        + '| cof:eif>' + _v.fp.data.eif[dataCpx] + ',eif:' + fp[_v.idx.eif]
        + '| cof:ei>' + _v.fp.tx.ei[txCpx] + ',ei:' + fp[_v.idx.ei]
        + '| cof:eo>' + _v.fp.tx.eo[txCpx] + ',eo:' + fp[_v.idx.eo]
        + '| cof:eq>' + _v.fp.tx.eq[txCpx] + ',eq' + fp[_v.idx.eq]);*/

    return point;
}

//const calcDataAndTxComplexi()

const complexityOfData = (fp) => {
    const det = fp[_v.idx.det];
    const ret = fp[_v.idx.ret];
    if (ret === 1) {
        return det <= 50 ? _v.complexity.low : _v.complexity.avg;
    }
    if (ret >= 6) {
        return det <= 19 ? _v.complexity.avg : _v.complexity.high;
    }
    return det <= 19 ? _v.complexity.low : det >= 51 ? _v.complexity.high : _v.complexity.avg ;
}

const complexityOfTx = (fp) => {
    const ftr = fp[_v.idx.ftr];
    const det = fp[_v.idx.det];
    if (ftr <= 1) {
        return det <= 15 ? _v.complexity.low : _v.complexity.avg;
    }
    if (ftr >= 3) {
        return det <= 4 ? _v.complexity.avg : _v.complexity.high;
    }
    return det <= 5 ? _v.complexity.low : det >= 20 ? _v.complexity.high : _v.complexity.avg;
}

export { ifpug, GSC, calcUFP };