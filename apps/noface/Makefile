all:

build: prepare
	./node_modules/.bin/rollup -c --bundleConfigAsCjs

prepare:
	mkdir -p dist
	cp ./src/manifest.json ./dist/manifest.json

dev: prepare
	./node_modules/.bin/rollup -c --bundleConfigAsCjs --watch
