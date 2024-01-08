if [ ! -d "emsdk" ]
then
  git clone https://github.com/emscripten-core/emsdk.git
  cd emsdk || exit
  git pull
  ./emsdk install latest
  ./emsdk activate latest
  cd ..
fi

source ./emsdk/emsdk_env.sh

emcc ../cc/funcs.cc \
-s "EXPORTED_FUNCTIONS=['_bubbleSort','_malloc', '_free']" \
-s "EXPORTED_RUNTIME_METHODS=['FS','malloc','_malloc','_free', 'ccall','cwrap']" \
-s ALLOW_MEMORY_GROWTH=1 \
-s ENVIRONMENT="web,worker,node" \
-s WASM=1 \
-s FORCE_FILESYSTEM=1 \
-o sortLib.js \
-O3 \
-Wno-dangling-else

echo 'done'

