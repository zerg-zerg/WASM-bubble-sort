PATH="/usr/local/opt/llvm/bin:$PATH"
clang --target=wasm32 --no-standard-libraries --optimize=3 -Wl,--export-all -Wl,--demangle -Wl,--no-entry  -o ./simple/funcs.wasm ./cc/funcs.cc