## 1. Сборка и запуск с++ версии
```
cd ./cc
make
./main - запуск с++ примера

```
## 2. Простой wasm
### Компиляция wasm by clang
```
brew install llvm - на маках старые версии clang, нужно обновить и при запуске указывать новый путь
./simple/make.sh - сгенерится /simple/funcs.wasm
```

## 3. Сборка emscript
```
cd es
./build.sh (первый раз скачается и сбилдится компилятор) - тут создадутся файлы sortLib.js & sortLib.wasm
```

## 4. Запуск примеров в node
```
node ./node/index.js - запуск примера в ноде (сравнение сортировки в js и в wasm)
```

## 5. Запуск примеров в браузере
```
npm install --global http-server
nvm use v16
http-server
http://localhost:8080/
```

| Пример | Время, мс |  Время, / |
| --- | ----------- | ----------- |
| c++ | 1700 | 1 |
| node js | 12800 | 7.5 |
| node wasm | 3800 | 2.2 |
| browser js | 11670 | 6.9 |
| browser wasm | 6030 | 3.5 |



### wasm
- WASM быстрее: не надо парсить, это байт-код для ВМ. JS преобразуется в него, а тут просто декодируем.
- Быстрее компилируется, так как ближе к машинному представлению.
- Лучше оптимизируется, так как типизован (number in bubbleSort)
- WASM меньше размером
- можно билдить в wasm из разных готовых либ исходников


