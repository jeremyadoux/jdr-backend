/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        establishment: {
            model: 'establishment',
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string'
        },
        image: {
            type: 'string'
        },
        category: {
            type: 'string',
            in: ['starter', 'dish', 'dessert', 'snack', 'drink']
        },
        price: {
            type: 'float',
            required: true
        }


    }
};

