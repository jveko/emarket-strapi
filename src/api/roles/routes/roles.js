module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/roles',
     handler: 'roles.getRoles',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
