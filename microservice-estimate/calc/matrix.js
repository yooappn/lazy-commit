
const M = (vals) => {
    return new Matrix(vals);
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

    add(v) {
        this.values.forEach((row, r) => {
            v.values[r].forEach((a, i) => {
                row[i] += a;
            });
        });

    }
};


export {M, Matrix};