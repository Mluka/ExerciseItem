const base64 = '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'

const mybuffer = Buffer.from(base64, 'base64')
console.log(mybuffer)
require('fs').writeFile('logo.png', mybuffer)