'use strict';

/**
 * roles service
 */

module.exports = () => ({
  getRoles: async () => {
    var data = await strapi.query("plugin::users-permissions.role").findMany({
      populate: ["*"],
      select: ['id', 'name']
    })
    return data.map(x => ({id: x.id, title:x.name}));
  }
});
