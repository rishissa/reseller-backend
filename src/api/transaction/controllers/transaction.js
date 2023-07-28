'use strict';

/**
 * transaction controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::transaction.transaction', ({strapi}) => ({
    getUsersTransactions: async (ctx, next) => {
        try {
            const user_id = ctx.request.params.id;
            const transactions = await strapi
              .query("plugin::users-permissions.user")
              .findOne({
                where: {
                  id: user_id,
                },
                exclude: ['password'],
                populate: {
                    transactions: true
                }
              });   
              delete transactions.password;
              delete transactions.provider;
              delete transactions.resetPasswordToken;
              delete transactions.confirmationToken;
              delete transactions.resetTokenExpiration;
              return ctx.send(transactions, 200)
        } catch (err) {
            console.log(err);
            return ctx.send(err, 400);
        }
    }  
}));
