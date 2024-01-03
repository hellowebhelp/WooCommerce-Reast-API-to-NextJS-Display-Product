# Display Product WooCommerce Reast API to NextJS

1. We did add Woocommerce Api,s consumerKey, and consumerSecret on NextJs file craete: "pages/api/products-api.js" 

    // url: "https://example.com",
    // consumerKey: "ck_d6bd5afeceec1bba52605c4520fcc715044b2f8f0",
    // consumerSecret: "cs_648877e26024523975a0a6ee30c0b576d5fd4687b",
    // version: "wc/v3"

2. Next, we did Re-set in "index.js" :  const res = await fetch(`http://localhost:3000/api/products-api`); 
    
