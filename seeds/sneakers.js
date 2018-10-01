
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sneakers').del()
    .then(function () {
      // Inserts seed entries
      return knex('sneakers').insert([
        {
          "user_id": 1,
          "brand": "nike",
          "title": "Air Jordan 9 Retro Premio",
          "year": 2016,
          "condition": 5,
          "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHG-jWYEOCg-EfDf5byO0ygOj4dv7WNH6x7r1ID2nqsON4nwZdFMQMhHzkDU0oHeNBoxDoWRwvlUqUSdGpXTHLMkWR2jfs7_oVheeyc38pN_Zdl_CFlIE-hcM&usqp=CAE",
          "size": 9.5,
          "color": "red",
          "public": "TRUE",
          "cost": 500,
          "description": "beautiful"
        },
        {
          "user_id": 2,
          "brand": "nike",
          "title": "Nike Air Mag Back to The Future",
          "year": 2016,
          "condition": 4,
          "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQzbMX11HKla6d2XkGUF5hU-AD-QwEwLnQLSiOXjynCC3T7bjnzXRVSeX7z8zmA4DhVEAXj18X6ZR_VUP_7Fo_okx8uhWpJEITq1FW6dHYVudtgYfeUpDcQ-w&usqp=CAE",
          "size": 8,
          "color": "earth",
          "public": "TRUE",
          "cost": 1230.5,
          "description": "so cool",
          "sale_status": "for sale"
        },
        {
          "user_id": 1,
          "brand": "maison margiela",
          "title": "Colorblock Fusion Leather Trainer Sneakers",
          "year": 2018,
          "condition": 5,
          "image": "https://images.neimanmarcus.com/ca/1/product_assets/N/5/D/R/A/NMN5DRA_mu.jpg",
          "size": 10,
          "color": "multi",
          "public": "TRUE",
          "cost": 499,
          "description": "the most hip"
        }
      ]);
    });
};
