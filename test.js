'use strict'

let assert = require('better-assert')
let proxyquire = require('proxyquire').noPreserveCache()


let foo = proxyquire('./foo.js', {
	'./bar.js': {
		f: {
			g: () => 'a'
		},
		h: () => 'a'
	}
})

assert(foo.bar.h() == 'a')
assert(foo.bar.f.g() == 'a')



foo = proxyquire('./foo.js', {
	'./bar.js': {}
})

assert(foo.bar.h() == 'h')
assert(foo.bar.f.g() == 'f')