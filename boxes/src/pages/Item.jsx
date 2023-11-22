import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import { ProductsData } from '../data/productsData';


const Item = () => {
    const { id } = useParams();
    const productFiltered = ProductsData.filter((product) => product.id == id);

    return <ItemDetailContainer product={productFiltered[0]}/>
}

export default Item
