# 준비하기 #

    $ npm install

Demo slide에서 terminal을 사용하려면 shellinabox를 설치해야한다.
이때 public/shellinabox-color.css를 이용한다.

     $ sudo shellinaboxd -t -s /:LOGIN --css=/path/to/HERE/public/shellinabox-color.css

# Test #

    $ grunt test

# 서버 실행 #

## node.js ##

    $ ./node_modules/.bin/coffee app.coffee

## Grunt ##

    $ grunt serve [--shell_host=hostname] [--port=PORT]

shellinabox를 포함하려면 shell_host 옵션을 사용한다.

# 배포용 파일 생성 #

## Static HTLM 파일 생성 ##

### jade cli 이용 ###

    $ make

Demo slide가 제외된 html이 public/index.html에 저장된다.

### Grunt 이용 ###

    $ grunt jade [--shell_host=hostname]

## Tgz Package 만들기 ##

    $ grunt package [--shell_host=hostname]

# 보기 #

## node.js로 실행하는 경우 ##

### Shellinabox가 있는 Demo Slide 포함 ###

http://server:3000

### Demo Slide 제외 ###

http://server:3000/no-shell

###  배포 용 파일 보기 ###

http://server:3000/index.html

## Grunt로 실행하는 경우 ##

http://server:3000/index.html
