import { Link } from 'react-router-dom';
import ProductCard from './miniComponents/ProductCard'
import { useState, useEffect } from 'react';


function Featured(props) {

    let { Data } = props;

    const [prod, setProd] = useState(null);

    useEffect(() => {
        function getProducts() {
            Data = Data.slice(0, 4);
            setProd(Data.map((e, index) => {
                const { id, image } = e;
                return <Link key={index} to={`/Furniture-Gallery/product/${index}`}><ProductCard ID={id} imgURL={image} /></Link>
            }))
        }
        Data && getProducts();
    }, [Data])

    return (
        <>
            <div className='highlight'>

                <div id='featured'>
                    <h1>Featured Products</h1>

                    <div>
                        {prod}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured;