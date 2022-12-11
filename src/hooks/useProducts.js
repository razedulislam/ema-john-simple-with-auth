// Custom hook : nijeder create kora hook
import { useEffect, useState } from "react";

const useProducts = () => {
    //nijeder create kora hook call korechi= useProducts
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("fakeData/products.JSON")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return [products, setProducts];
};
export default useProducts;
