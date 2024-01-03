# Display Product WooCommerce Reast API to NextJS

1. We did add Woocommerce Api,s consumerKey, and consumerSecret on NextJs file craete: "pages/api/products-api.js" 

    url: "https://example.com",
    consumerKey: "ck_d48249a2e51adcd6ce8544915212f0efccf4f988",
    consumerSecret: "cs_493b3b4137bb308f74e5ca295ec860407654c211",
    version: "wc/v3"

    2. Next, we did Re-set in "index.js" :  const res = await fetch(`http://localhost:3000/api/products-api`); 
    
