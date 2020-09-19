
const M = (vals) => {
    return new Matrix(vals);
};

const MZ = (col, row) => {
    const m = [];
    for (let i = 0; i < row ; i++) {
        m.push(ary(col));
    }
    return M(m);
}

const ary = (n) => {
    const ret = [];
    for (let i = 0; i < n ; i++) {
        ret.push(0);
    }
    return ret;
};

class Matrix {
    constructor(vals) {
        this.values = vals;
    }

    get cols() {
        return this.values[0].length;
    }

    get rows() {
        return this.values.length;
    }

    put(col, row, v) {
        this.values[row][col] = v;
    }

    clone() {
        const m = MZ(this.cols, this.rows);
        this.values.forEach((row, r) => {
            row.forEach((a, c) => {
                m.values[r][c] = a;
            });
        });
        return m;
    }

    add(v) {
        const ret = this.clone();
        ret.values.forEach((row, r) => {
            v.values[r].forEach((a, i) => {
                row[i] += a;
            });
        });
        return ret;
    }

    mul(v) {
        if (this.cols !== v.rows) {
            return null;
        }
        const ret = MZ(this.rows, v.rows);
        this.values.forEach((row, rr) => {
            for (let cc = 0; cc < v.rows ; cc++) {  
                let val = 0;
                row.forEach((cv, ri) => {
                    val += cv * v.values[ri][cc];
                });
                ret.put(cc, rr, val);
            }
        });
        return ret;
    }
};


export {M, MZ, Matrix};