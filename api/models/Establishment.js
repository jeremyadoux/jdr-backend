/**
 * Establishment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        orders: {
            collection: 'order',
            via: 'establishment'
        },
        products: {
            collection: 'product',
            via: 'establishment'
        },
        name: {
            type: 'string',
            required: true
        },
        address: {
            type: 'string'
        },
        city: {
            type: 'string',
            defaultsTo: 'Charbonnière les bains'
        },
        zipcode: {
            type: 'numeric',
            defaultsTo: '69260'
        }
    }
};

