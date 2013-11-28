JADE=./node_modules/.bin/jade
TARGET_DIR=public
TARGET=${TARGET_DIR}/index.html
INPUT_JADE=views/index.jade

all: ${TARGET}

${TARGET}: $(wildcard views/*.jade)
	${JADE} -O '{include_shell:0}' -o ${TARGET_DIR} ${INPUT_JADE}

clean:
	rm -rf ${TARGET}
