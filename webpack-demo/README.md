# web technology guides

## webpack

Сначала давайте создадим каталог, инициализируем npm, установим webpack локально и установим webpack-cli (инструмент, используемый для запуска webpack в командной строке):

```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

Создаем файл **_webpack.config.js_** в папке проекта и пишем следующую конфигурацию в файле

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code.png" width = "300" >

Создаем папки **dist** и **src** в папке проекта. В папке **src** создаем файл **index.js**

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code2.png" width = "300" >

В файле **package.json** для запуска проекта пишем такой код

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code1.png" width = "300" >

Для сборки проекта используем команды в консоле

```
npm run start
```

или

```
npm run build
```

Для создания html файла воспользуемся плагином html-webpack-plugin

```
npm install --save-dev html-webpack-plugin
```

После установки дабавляем вот такой код в файл **webpack.config.js**

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code3.png" width = "500" >

Для автоматической сборки проекта добавим такой код в файл **package.json**

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code4.png" width = "500" >

Для работы со стилями пропишем такую команду для добавления css-loader

```
npm i --save-dev css-loader
npm i --save-dev style-loader
```

Чтобы стили подключились нужно импортировать их в javascript-file

Для мнимизации css-file подключим **optimize-css-assets-webpack-plugin** и **mini-css-extract-plugin**

```
npm i --save-dev mini-css-extract-plugin
nmp i --save-dev optimize-css-assets-webpack-plugin
```

В конфиг файле пропишем следующий код:

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code5.png" width = "500" >

Для мнимизации javascript-file используем **terser-webpack-plugin**

```
$ npm install terser-webpack-plugin --save-dev
```

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code6.png" width = "500" >

Настраиваем DevServer

```
npm i --save-dev webpack-dev-server
```

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code7.png" width = "500" >

в файле package.json пишем скрипт для запуска

```
"dev": "webpack-dev-server --mode development --open"
```

Настраиваем babe js

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

Добавляем строчку кода в конфиг файл и устанавливаем **babel-loader**

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code8.png" width = "500" >

```
npm i --save-dev babel-loader
```

В корне проекта создаем файл **.babelrc** и пишем в нем следующий код

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code9.png" width = "500" >

Компиляция **sass**

```
npm i --save-dev sass-loader node-sass
```

**webpack.config.js**

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code10.png" width = "500" >

Компиляция **JSX**

```
npm i --save-dev @babel/preset-react
```

**.babelrc**

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code11.png" width = "500" >

Компиляция **typescript**

```
npm install --save-dev @babel/preset-typescript
```

**.babelrc**

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code13.png" width = "500" >

**webpack.config.js**

<img src="https://github.com/MrCronkite/guides/blob/master/webpack-demo/img/code12.png" width = "500" >
