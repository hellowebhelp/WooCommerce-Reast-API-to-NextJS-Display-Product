// https://www.npmjs.com/package/@woocommerce/woocommerce-rest-api
// npm i @woocommerce/woocommerce-rest-api

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const api = new WooCommerceRestApi({
  
    url: "https://example.com",
    consumerKey: "ck_d48249a2e51adcd6ce8544915212f0efccf4f988",
    consumerSecret: "cs_493b3b4137bb308f74e5ca295ec860407654c211",
    version: "wc/v3"
});

export default async function handler(req, res) {
    const responseData = {
        success: false,
    }

    try {
        const { perpage } = req?.query ?? {};
        const { data } = await api.get(
            'products',
            {
                //per_page: perpage || 504, //example: ?perpage=1
                per_page: 20,
                status: 'publish',

            }
        );

        responseData.success = true;
        res.json(data);

    } catch (error) {
        responseData.error = error.message;
        res.status(500).json(responseData);
    }
}

