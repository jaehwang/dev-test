# 준비하기 #

    $ npm install

Demo slide에서 terminal을 사용하려면 shellinabox를 설치해야한다.
이때 public/shellinabox-color.css를 이용한다.

     $ sudo shellinaboxd -t -s /:LOGIN --css=/path/to/shellinabox-color.css

# 서버 실행 #

    $ ./node_modules/.bin/coffee app.coffee

# 배포용 파일 생성 #

    $ make

Demo slide가 제외된 html이 public/index.html에 저장된다.

# 보기 #

## Shellinabox가 있는 Demo Slide 포함 ##

http://server:3000

## Demo Slide 제외 ##

http://server:3000/no-shell

## 배포 용 파일 보기 ##

http://server:3000/index.html

