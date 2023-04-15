import { useParams } from 'react-router-dom';
import ProductCard from '../components/miniComponents/ProductCard';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Category(props) {

    const { type } = useParams();
    const { Data } = props;
    const [prod, setProd] = useState(null);


    useEffect(() => {
        function getProducts() {
            setProd(Data.map((e, index) => {
                const { id, image, name, price, category } = e;
                if (category == type.toLowerCase())
                    return <Link to={`/Furniture-Gallery/product/${index}`}><ProductCard Index={index} ID={id} imgURL={image} Title={name} Price={price} /></Link>
            }))
        }
        Data && getProducts();
    }, [Data, type])


    return (
        <>
            <h1 className='heading'>{type}</h1>
            <div className='productList'>
                {prod}
            </div>
        </>
    )
}

export default Category;