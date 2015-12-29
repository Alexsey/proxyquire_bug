'use strict'

let assert = require('better-assert')
let proxyquire = require('proxyquire').noPreserveCache()


let fake = {}
let foo = proxyquire('./foo', {
	'./bar': fake
})
fake.f.g = () => 'a'
fake.h = () => 'a'

assert(foo.bar.h() == 'a')
assert(foo.bar.f.g() == 'a')



foo = proxyquire('./foo.js', {
	'./bar.js': {}
})

assert(foo.bar.h() == 'h')
assert(foo.bar.f.g() == 'g') // will throw - foo.bar.f.g() is 'a'