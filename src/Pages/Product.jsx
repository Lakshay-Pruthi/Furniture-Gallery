import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Trending from "../components/Trending";


function Product(props) {
    const { productIndex } = useParams();
    const { Data } = props;


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productIndex]);

    const [imgURL, setImageURL] = useState(null);
    const [Title, setTitle] = useState('Loading...')
    const [Price, setPrice] = useState('Loading...')
    const [Description, setDescription] = useState('Loading...')
    const [Brand, setBrand] = useState('Loading...')
    const [Shipping, setShipping] = useState('Loading...')
    // const [Colors, setColors] = useState('Loading...')
    // const [colorsDisplay, setColorsDisplay] = useState('Loading...')

    const [cart, setCart] = useState([]);

    useEffect(() => {

        function loadProduct() {
            const { name, image, company, price, shipping, description, colors } = Data[productIndex];
            setTitle(name.toUpperCase());
            setImageURL(image);
            setPrice(price)
            setBrand(company)
            setShipping(shipping)
            setDescription(description)
            // setColors(colors)
        }

        Data && loadProduct();
    }, [Data, productIndex])

    // useEffect(() => {
    //     function showColors() {
    //         setColorsDisplay(() => {
    //             // console.log(colors);
    //             Colors.map((e) => {
    //                 return <div className="colorDisplay" style={`'background-color': ${e}`}>Hello</div>
    //             })
    //         })
    //     }

    //     Data && Colors && showColors();
    // }, [Data])

    function addProductToCart() {
        setCart(...cart, productIndex);
        localStorage.setItem('cart', cart);
    }
    return (
        <>
            <div className="productContainer" id="prod">
                <div className="prodFullImage">
                    <img src={imgURL} alt="Loading..." />
                </div>
                <div className="prodDetails">
                    <h1 className="heading">{Title}</h1>
                    <p>{Description}</p>
                    <div>
                        <h2>Price: ${Price}</h2>
                        <h3>Brand: {Brand}</h3>
                    </div>
                    {Shipping ?
                        <p>This product is eligible for free shipping.</p>
                        :
                        ""
                    }
                    <div className="buttonGroup">
                        <button className="buyBtn">Buy Now</button>
                        <button className="atc" onClick={addProductToCart}>Add to Cart</button>
                    </div>
                </div>

            </div>
            <Trending Data={Data} />
        </>
    )
}
export default Product;