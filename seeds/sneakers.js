
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
          "sale_status": "on-sale",
          "listing_price": 550,
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
          "sale_status": "not-on-sale",
          "listing_price": "666",
          "description": "f you wonder where all the Kanye West sneaker madness started, look no further. Here we have the original Nike Air Yeezy in the \"Zen Grey\" colorway – the first-ever shoe"
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
          "sale_status": "on-sale",
          "listing_price": 549,
          "description": "the most hip"
        },
        {
          "user_id": 1,
          "brand": "Adidas",
          "title": "Human Race",
          "year": 2018,
          "condition": 3,
          "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyxpddY4f9lizCpuiDxiyqI9KBF_YX3iaxF9CJkIkVmDXHO2E5gOWTvzrXOFbyyBrK12ojeov3jwbe9pNht3gusakuF6AV10BYX5RZO3MowKO1GS0__17N&usqp=CAE",
          "size": 9,
          "color": "black",
          "public": "TRUE",
          "cost": 12500,
          "sale_status": "on-sale",
          "listing_price": 12550,
          "description": "High-top sneaker with grip-tape ankle strap and dollar bill print Leather upper Round toe Adjustable grip-tape strap Leather lining Rubber sole Padded insole Made in Italy. Maison Margiela"
        },
        {
          "user_id": 2,
          "brand": "Gucci",
          "title": "Metalic platform sneaker",
          "year": 2015,
          "condition": 4,
          "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRztMmpjLUGVg5xPFYpZsL_-i8lEVrAQetBDRJoCKEYs4hrCGuflQX6qmBl7YAHh1kGFXFXPO54uuGXHhGuCUzjglAtigJ0Ej0-8-v6ibCStYyOnvG1CgWbcg&usqp=CAE",
          "size": 8,
          "color": "metalic",
          "public": "FALSE",
          "cost": 950,
          "sale_status": "on-sale",
          "listing_price": 1000,
          "description": "the best shoes ever"
        },
        {
          "user_id": 2,
          "brand": "Valentino",
          "title": "Camoflauge Running sneaker",
          "year": 2019,
          "condition": 5,
          "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQBbt06zn5YYheQ9FgshjWC3h4b9hhyKZGyhm-gGFRlFv1otYYFfxVWw4y98JSar63f1QebU2hrZNdDTuEAYaokL_JK9AGHTOGDWI0-StRjTqi8lREzQ7VgvjNl&usqp=CAE",
          "size": 6,
          "color": "camo",
          "public": "TRUE",
          "cost": 1000,
          "sale_status": "not-on-sale",
          "listing_price": "777",
          "description": "these are the greatest shoes in the land. "
        },
        {
          "user_id": 1,
          "brand": "Christian Louboutin's",
          "title": "Louis Flat Patent Leather",
          "year": 2017,
          "condition": 3,
          "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzvPqRKaGSwdaXAxHNgyZ2dKVPN81f6Yak4tUHWP57qHFRCoPwacV4i26T1ijMXipEs5rk7-EXYVj5oTCIkLebYzXXzdJq&usqp=CAE",
          "size": 7,
          "color": "green",
          "public": "TRUE",
          "cost": 850,
          "sale_status": "on-sale",
          "listing_price": 900,
          "description": "Showcasing a tonal sole, these comfortable high-tops are embellished at the cap toe and quarter panels with shiny yellow spikes. 1\"\"/25mm midsole (approximately). Spike-embellished cap toe and quarter panels."
        }
      ]);
    });
};
