'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Products', [{
            name: "Lone Women",
            autor: "Victor Lavalle",
            description: "Adelaide Henry carries an enormous steamer trunk with her wherever she goes. It's locked at all times. Because when the trunk opens, people around Adelaide start to disappear. The year is 1915, and Adelaide is in trouble. Her secret sin killed her parents, forcing her to flee California in a hellfire rush and make her way to Montana as a homesteader. Dragging the trunk with her at every stop, she will become one of the lone women taking advantage of the governments offer of free land for those who can tame it--except that Adelaide isnt alone. And the secret shes tried so desperately to lock away might be the only thing that will help her survive the harsh territory. Crafted by a modern master of magical suspense, Lone Women blends shimmering prose, an unforgettable cast of adventurers who find horror and sisterhood in a brutal landscape, and a portrait of early-twentieth-century America like you've never seen. And at its heart is the gripping story of a woman desperate to bury her past--or redeem it.",
            rating: 0.0,
            cover: "https://images-us.bookshop.org/ingram/9780525512080.jpg?height=500&v=v2-fd4ebd90473e7eae9053880e258564cd",
            status: "New",
            paperback_price: 0,
            hardcover_price: 25.11,
            paperback_availability: 0,
            hardcover_availability: 3,
            genre: "Horror",
            createdAt: new Date(),
            updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Products', null, {});
    
  }
};
