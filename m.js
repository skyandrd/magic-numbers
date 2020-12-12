const csv = require('csv-parser');
const fs = require('fs');

const checkUniqueMagicNumbers = () => {
    const uniq = new Map();
    const uniqMagicKeys = [];
    const uniqMagicValues = [];

    let rowsCount = 0;

    const read = fs.createReadStream('data/table.csv')
      .pipe(csv())
      .on('data', (row) => {
        str = row.Code;
        codes = '';
    
        for (let i=0; i< str.length;i++) {
            code = str.charCodeAt(i);
            codes += code;
        }
    
        uniq.set(str, codes);
        rowsCount++;
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        console.log('rowsCount', rowsCount)
          
        uniq.forEach(logMapElements);

        const result = {count: rowsCount, keysLen: uniqMagicKeys.length, valuesLen: uniqMagicValues.length};
        console.log("result", result)

        return result;
    });
    
    const logMapElements = (value, key, map) => {
        uniqMagicKeys.push(key);
        uniqMagicValues.push(value);    
        // console.log(`${key} = ${value}`);
    }

    const p = Promise.resolve(read)
    
    p.then(r => {
        return r;
    })
    
    p.catch(err => {
        console.error(err)
    })

    return p;
}

checkUniqueMagicNumbers();

module.exports = {
    checkUniqueMagicNumbers,
}
