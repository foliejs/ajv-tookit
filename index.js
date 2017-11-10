const Ajv = require('ajv')
const ajv = new Ajv({allErrors: true})

const schema = {
    // "$async": true,
    "properties": {
        "twitter_username": {
            "type": "string"
        }
    }
}

const validate = ajv.compile(schema)

console.log(validate({ twitter_username: '123' }))
console.log(validate({ test_username: '123' }))
console.log(validate({twitter_username: 1}))
