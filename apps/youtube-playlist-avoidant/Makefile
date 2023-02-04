all:

build: prepare
	./node_modules/.bin/rollup -c --bundleConfigAsCjs

prepare:
	mkdir -p dist
	cp ./src/manifest.json ./dist/manifest.json
	cp ./src/options/options.html ./dist/options.html

dev: prepare
	./node_modules/.bin/rollup -c --bundleConfigAsCjs --watch
