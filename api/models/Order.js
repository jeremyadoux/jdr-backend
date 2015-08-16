/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        validByDriver: {
            type: 'boolean',
            required: true
        },
        owner: {
            model: 'user',
            required: true
        },
        products: {
            collection: 'product',
            via: 'id'
        },
        establishment : {
            model: 'establishment',
            required: true
        }
    }

};

