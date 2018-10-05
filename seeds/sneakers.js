
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
          "description": "So beautiful. that's all I can say."
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
          "listing_price": 1280.5,
          "description": "f you wonder where all the Kanye West sneaker madness started, look no further. Here we have the original Nike Air Yeezy in the \"Zen Grey\" colorway – the first-ever shoe"
        },
        {
          "user_id": 3,
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
          "listing_price": 1050,
          "description": "these are the greatest shoes in the land."
        },
        {
          "user_id": 1,
          "brand": "Christian Louboutin's",
          "title": "Louis Flat Patent Leather",
          "year": 2017,
          "condition": 3,
          "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzvPqRKaGSwdaXAxHNgyZ2dKVPN81f6Yak4tUHWP57qHFRCoPwacV4i26T1ijMXipEs5rk7-EXYVj5oTCIkLebYzXXzdJq&usqp=CAE",
          "size": 13,
          "color": "green",
          "public": "TRUE",
          "cost": 850,
          "sale_status": "on-sale",
          "listing_price": 900,
          "description": "Showcasing a tonal sole, these comfortable high-tops are embellished at the cap toe and quarter panels with shiny yellow spikes. 1\"\"/25mm midsole (approximately). Spike-embellished cap toe and quarter panels."
        },
        {
          "user_id": 1,
          "brand": "Fendi",
          "title": "Logo Print Buckle Strap Sneakers",
          "year": 2016,
          "condition": 5,
          "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0dxCB9zgOC6lQsjj2pCPLTvws3tZWNrEmSzqjLzj1e1GLVKYfgi5LuEUV2GIxFb7WaSFPCfn3n0T4n7qmOKUqD5zZZpLjBJ_ihxIvjVUxhB347g1e94WhD6E&usqp=CAE",
          "size": 5,
          "color": "white",
          "public": "TRUE",
          "cost": 650,
          "sale_status": "on-sale",
          "listing_price": 700,
          "description": "Minimalist sneakers, with rubber box sole and maxi buckle. Made of white leather. The band is hand-painted with the iconic FF pattern and decorated with a metal-plated pearl."
        },
        {
          "user_id": 2,
          "brand": "Rebok",
          "title": "PW Hu Holi NMD MC Gold/Happy",
          "year": 2019,
          "condition": 5,
          "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNHQYqdnbVm5_jWXxUzSGrq7SgYrIg4FuUf_UVDubcoYOOBNhOtISDkp9bM1NT72yvwWPhzDO4QEje5vmkMVrUcZ_1YYsaBK9gSllWvI5jZ3y80rEwjWCKUg&usqp=CAE",
          "size": 13,
          "color": "pink",
          "public": "TRUE",
          "cost": 20000,
          "sale_status": "on-sale",
          "listing_price": 20050,
          "description": "Released in 2018, the four-colorway set took inspiration from the concept of yin and yang. Each sneaker symbolizes one of four natural elements"
        },
        {
          "user_id": 1,
          "brand": "Nike",
          "title": "Air Yeezy 'Blink'",
          "year": 2017,
          "condition": 4,
          "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwu1Y1lKxf8f1mGbITEx15_iNzcP5YrP3N_V7E4NsVhsqXUNV4GD3qFOVIQPxIUl7AtqBDoNhGJXtdUnigUWrjxeNjPxwFg_c5HIn7JTkwumyZFuc2W1Z7hQ&usqp=CAE",
          "size": 12,
          "color": "green",
          "public": "TRUE",
          "cost": 12000,
          "sale_status": "on-sale",
          "listing_price": 12050,
          "description": "The Air Yeezy ‘Blink’ from April 2009 is one of three sneakers that kicked off Kanye West’s partnership with Nike."
        },
        {
          "user_id": 2,
          "brand": "Barneys New York",
          "title": "Balenciaga Men's Triple S Sneakers",
          "year": 2015,
          "condition": 5,
          "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSviLhV4RYiotGV0qrPU5sRcQT7MLG5EUdLOgj0K0t_l3mxA1BtS8JYRu34v3NhdyPWEQgdGzq1aLT-Jt2d7VoSHbzOgGr7&usqp=CAE",
          "size": 10,
          "color": "multi",
          "public": "TRUE",
          "cost": 800,
          "sale_status": "on-sale",
          "listing_price": 850,
          "description": "Well-worn materials and bold retro appeal define a stylish sneaker with head-turning appeal."
        }
      ]);
    });
};
