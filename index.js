const fs = require('node:fs');

const Module = require('./main.js');


const env = {
    // memoryBase: 0,
    // tableBase: 0,
    // memory: new WebAssembly.Memory({
    //   initial: 256*20
    // }),
    // table: new WebAssembly.Table({
    //   initial: 0,
    //   element: 'anyfunc'
    // })
  }


const run = async function () {
    // const wasm = fs.readFileSync('./main.wasm');
    // // var typedArray = new Uint8Array(wasm);

    // let instance = null;
    // const handle = async function () {
    //     const res = await instance.cwrap('loadModule')()
    //     console.log('Memory used:', instance.HEAP8.length)
    //     return JSON.parse(res)
    // }
    const wasm = await Module({wasmBinaryFile: 'main.wasm'});
    console.log(wasm.HEAP8)
    let res = await wasm.cwrap('loadModule')()
    console.log(res);
    wasm.resizeHeap(1024*64*960)
     res = await wasm.cwrap('loadModule')()
    console.log(res);

      
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

};

run();