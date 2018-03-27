# webpack4-sample

```
npm init -y
npm install webpack webpack-cli --save-dev
npm install babel-core babel-loader babel-preset-env --save-dev
npm install browser-sync --save-dev
npm install copy-webpack-plugin --save-dev
npm install css-loader --save-dev
npm install html-loader --save-dev
npm install html-webpack-plugin --save-dev
npm install lite-server --save-dev
npm install mini-css-extract-plugin --save-dev
npm install clean-webpack-plugin --save-dev

npm install jquery --save
----------------------------------------------
style-loader
extract-text-webpack-plugin
```

## 목적

build -> dist로 하고 src 를 watch 하여 build 한다.
dist 를 html home으로 하여 브라우저로 확인 한다.

```
dist
/-- assets
      /images
 -- bundle.js 
 -- bundle.css
 -- vendor.js
 -- index.html
```

webpack  + babel을 사용하여 js 를 bundle 한다.

browser-sync + lite-server 를 사용하여 개발서버로 사용한다.

copy-webpack-plugin 으로 일반폴더를 dist 로 복사한다.

html-loader 를 사용한다.

mini-css-extract-plugin 으로 CSS를 별도의 파일로 추출한다.

## 실행

terminal 1
```
npm run watch
```

terminal 2
```
npm run start
```

## webpack-dev-server 를 사용하지 못한 이유..

1) webpack-dev-server --inline --hot --open --mode development
    - 속도는 빠르다.
    - 이유는 모르지만 styles.css 를 수정하면 실시간 반영이 안된다.
 
2) webpack-dev-server --inline --hot --open --mode '' or production
    - 번들링 속도가 느리다. (https://webpack.js.org/guides/code-splitting/)
    - styles.css 수정시 실시간 반영된다.

3) webpack --config webpack.config.js -p --watch
    - 번들링 속도가 빠르고 styles.css 수정시 실시간반영
    - 별도의 웹서버로 dist/ 를 home 로 처리한다. (nginx 사용)

## 기타

1) css background-image: url('test.jpg') -> 빌드 에러남. -> publicPath: '/'

2) ExtractTextPlugin 을 사용하면 error 발생한다. 먼지 모르겠다.

3) bundle1.js , bundle2.js 는 보통 bundle.js 하나만 있으면되고, 혹시 index1.html, index2.html 처럼 각페이지별 bundle.js 가 필요한 경우를 생각하여 추가 하였다.