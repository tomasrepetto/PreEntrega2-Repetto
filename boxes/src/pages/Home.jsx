import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { ProductsData } from '../data/productsData';


const Home = () => {
    return <ItemListContainer ProductsData={ProductsData}/>;
};

export default Home
