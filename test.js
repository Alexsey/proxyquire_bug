'use strict'

let assert = require('better-assert')
let proxyquire = require('proxyquire')

let foo, fake = {}


foo = proxyquire('./foo.js', {
	'./bar.js': fake
})

fake.h = () => 'a'
fake.f.g = () => 'a'
assert(foo.bar.h() == 'a')
assert(foo.bar.f.g() == 'a')



fake = {}
foo = proxyquire('./foo.js', {
	'./bar.js': fake
})

assert(foo.bar.h() == 'h')
assert(foo.bar.f.g() == 'f')
