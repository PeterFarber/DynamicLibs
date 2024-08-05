#!/bin/bash

emcc ./src/module.c -sSIDE_MODULE -sMEMORY64 -o ./build/module.o
emcc  \
    -O3 \
    -g2 \
    -sMEMORY64=1 \
    -sMAIN_MODULE \
    -sEXPORTED_FUNCTIONS='["_main"]' \
    -sEXPORTED_RUNTIME_METHODS='["cwrap", "ccall", "UTF8ToString", "lengthBytesUTF8", "FS"]' \
    -sWASM=1 \
    -sASSERTIONS=2 \
    -sFORCE_FILESYSTEM=1 \
    -sSTACK_SIZE=41943040 \
    -sALLOW_MEMORY_GROWTH=1 \
    -sINITIAL_MEMORY=52428800 \
    -sMAXIMUM_MEMORY=524288000 \
    -sMODULARIZE=1 \
    -lm \
    -ldl -o ./build/main.js ./src/main.c