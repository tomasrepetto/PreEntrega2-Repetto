/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ ProductsData }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-evenly",
            }}>

            {ProductsData.map((product) => {
                return (
                    <Card key={product.id} style={{ width: "18rem", margin: 20}}>
                        <Card.Body>
                        <Link to={`/item/${product.id}`}><Card.Img variant="top" src={product.img} /></Link>
                            <Card.Title>{product.category}</Card.Title>
                            <Card.Subtitle>{product.name}</Card.Subtitle>
                            <Card.Text>{product.description}</Card.Text>
                            <Link to={`/item/${product.id}`}><button style={{width: "10rem",cursor: "pointer", border: "none", backgroundColor:"black", color: "whitesmoke", marginLeft:"3rem"}}>Ver mas</button></Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    )
};

export default ItemListContainer