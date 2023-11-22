import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom';
import { ProductsData } from '../data/productsData';
import { useEffect, useState } from 'react';


const Category = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { categoryId } = useParams();
    useEffect(() => {
        setFilteredProducts(ProductsData.filter(
        (product) => product.category === categoryId)
    );
}, [categoryId]);
    

    return <ItemListContainer ProductsData={filteredProducts}/>
};

export default Category
