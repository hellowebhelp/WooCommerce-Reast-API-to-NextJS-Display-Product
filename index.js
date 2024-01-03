/**
 * All products collection.
 * 
 * Development by Hellowebhelp.com
 */
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


export const getStaticProps = async () => {

    // For Products Fetch
    const res = await fetch(`http://localhost:3000/api/products-api`);
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const ProductData = await res.json();

    return {
        props: { ProductData }, // Products array
    };
}


const All_collection = ({ ProductData, }) => {
    return (
        <>
            <section>
                <div className="custom_container">
                    {ProductData?.map(
                        (Display) => (
                            <Link href={'#'} key={Display.id}>
                                <div>{Display.name}</div>
                            </Link>
                        )
                    )}
                </div>
            </section>
        </>
    );
}
export default All_collection;
