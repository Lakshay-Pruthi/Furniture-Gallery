import { useState, useEffect } from "react";
import ProductCard from './miniComponents/ProductCard'
import { Link } from "react-router-dom";


function AllProducts(props) {

    const { Data, From, To } = props;
    const [prod, setProd] = useState(null);

    useEffect(() => {
        function getProducts() {
            let data = Data.slice(From, To);
            setProd(data.map((e, index) => {
                index = From + index;
                const { id, image, name, price } = e;
                return <Link to={`/Furniture-Gallery/product/${index}`}><ProductCard Key={index} Index={index} ID={id} imgURL={image} Title={name} Price={price} /></Link>
            }))
        }
        Data && getProducts();
    }, [Data])


    return (
        <>

            <div className="productList">
                {prod}
            </div>
        </>
    )
}
export default AllProducts;