'use strict';

/**
 * A set of functions called "actions" for `roles`
 */

module.exports = {
  getRoles: async (ctx, next) => {
    try {
      const data = await strapi
        .service("api::roles.roles")
        .getRoles();
      ctx.body = 'ok';
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
