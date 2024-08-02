#include <stdio.h>
#include <dlfcn.h>
#include <unistd.h>
#include <emscripten.h>

typedef void (*hello_func)();

EMSCRIPTEN_KEEPALIVE
static int state = 0;

EMSCRIPTEN_KEEPALIVE
int loadModule() {

    void* handle = dlopen("./module.o", RTLD_LAZY);
    if (!handle) {
        fprintf(stderr, "%s\n", dlerror());
        return 1;
    }

    hello_func func = (hello_func) dlsym(handle, "helloworld");
    if (!func) {
        fprintf(stderr, "%s\n", dlerror());
        dlclose(handle);
        return 1;
    }

    func();

    dlclose(handle);
    state += 1;
    return state;
}


int main() {


    return 0;
}