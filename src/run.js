const fs = require('node:fs');
const Module = require('../build/main.js');

const run = async function () {

    const wasm = await Module({wasmBinaryFile: '../build/main.wasm'});
    let res = await wasm.cwrap('loadModule')()
    console.log(res);
     res = await wasm.cwrap('loadModule')()
    console.log(res);

};

run();







































    // const wasm = fs.readFileSync('./main.wasm');
    // // var typedArray = new Uint8Array(wasm);

    // let instance = null;
    // const handle = async function () {
    //     const res = await instance.cwrap('loadModule')()
    //     console.log('Memory used:', instance.HEAP8.length)
    //     return JSON.parse(res)
    // }
      
    // var instantiateWasm = function (imports, cb) {

    //     WebAssembly.instantiate(wasm,imports).then(result => {
    //         console.log(JSON.stringify(result));
    //         cb(result.instance);
    //       }).catch(e => {
    //         // error caught
    //         console.log(e);
    //       });
    //     return {}
    // }


    // instance = await Module({
    //     instantiateWasm
    // })

    // // const result = await handle();
    // console.log(result);