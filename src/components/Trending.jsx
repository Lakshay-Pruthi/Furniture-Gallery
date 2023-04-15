import { useState, useEffect } from "react";
import ProductCard from "./miniComponents/ProductCard";
import { Link } from "react-router-dom";

function Trending(props) {
    const { Data } = props;
    const [prod, setProd] = useState(null);

    useEffect(() => {
        function getProducts() {
            let from = Math.round(Math.random() * 4);
            let to = Math.round(Math.random() * 8);
            let data = Data.slice(from, to + 8);
            setProd(data.map((e, index) => {
                index = index + from;
                const { id, image } = e;
                return <Link to={`/Furniture-Gallery/product/${index}`}><ProductCard Key={index} ID={id} imgURL={image} /></Link>
            }))
        }
        Data && getProducts();
    }, [Data])


    return (
        <>
            <div className='highlight'>

                <div id='Trending'>
                    <h1>Trending</h1>

                    <div id="innerDiv">
                        {prod}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending;