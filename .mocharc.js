module.exports = {
  require: [
    './node_modules/ts-node/register',
    './test/support/Setup.spec.ts'
  ],
  spec: './test/unit/**/*.spec.ts'
}
