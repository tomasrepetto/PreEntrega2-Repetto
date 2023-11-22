/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ({ product }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-around",
            }}>
                return (
                    <Card key={product.id} style={{ width: "18rem", margin: 20}}>
                        <Card.Img src={product.img} />
                            <Card.Body>
                            <Card.Title>{product.category}</Card.Title>
                            <Card.Subtitle>{product.name}</Card.Subtitle>
                            <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                    </Card>
                );
        </div>
    )
};

export default ItemDetailContainer

