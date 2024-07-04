import React, { useState } from 'react'
import { useCart } from '../providers/Cart';

interface ButtonProps {
    text: string | number;
    onClick?: () => void;
    status?: boolean;
}

// type props = {
//     text: string | number,
//     onClick?: () => void,
//     status?: true
// }

interface BookMeta {
    name: string;
    price: number;
}

const Book: React.FC<ButtonProps> = (props) => {
    const { text, onClick = () => { alert("N/A") }, status } = props
    const cartContext = useCart();

    const [data, setData] = useState<BookMeta>({
        name: "Healing journey",
        price: 1000
    })
    return (
        <div>
            <h1>Name : {data.name} (Rs. {data.price})</h1>
            <br />
            Buy Now : <button onClick={() => setData({ name: "Three musk", price: 1200 })} disabled={status ? false : true}>{text}</button>
            <br />
            <h3>
                {cartContext?.value}
                <button onClick={e=>{cartContext?.setCount(cartContext.value + 1)}}>Inc</button>
            </h3>
        </div>
    )
}

export default Book