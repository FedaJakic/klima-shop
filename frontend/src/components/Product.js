import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { FcHighPriority } from "react-icons/fc";

const Product = ({ product }) => {
  return (
    <Card className="my-1 p-1 rounded">
      {product.onSale === true ? (
        <h4 className="text-danger">
          Akcija <FcHighPriority />{" "}
        </h4>
      ) : (
        <></>
      )}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image.toString().split(",")[0]} variant="top" />
      </Link>
      <Card.Body>
        <p class="font-italic text-sm">{product.sifraProizvoda}</p>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong class="font-weight-bold text-lg-left">
              {product.name}
            </strong>
          </Card.Title>
        </Link>
        {/* <ul> */}
        <li style={{ fontSize: "small" }}>
          učinak hlađenja (kW): {product.coldEff}
        </li>
        <li style={{ fontSize: "small" }}>
          učinak grijanja (kW): {product.warmEff}
        </li>
        <li style={{ fontSize: "small" }}>
          energetska klasa: {product.energyClass}
        </li>
        <li style={{ fontSize: "small" }}>
          veličina prostora (m2): {product.sizeOfRoom}
        </li>
        {/* </ul> */}

        {/* <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

        <Card.Text as="h3" style={{ fontSize: "small" }}>
          EUR{" "}
          {product.onSale === true ? (
            <span className="font-weight-light" style={{ fontSize: "small" }}>
              <span>
                {" "}
                {Number(((100 - product.sale) * product.price) / 100)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
              <span style={{ fontSize: "x-large" }}>
                <br></br>
                eur{" "}
                {Number(((100 - product.sale) * product.price) / 100 / 7.5345)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </span>
          ) : (
            <span className="font-weight-bold" style={{ fontSize: "medium" }}>
              {Number(product.price)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              <span style={{ fontSize: "x-small" }}>
                <br></br>
                kn{" "}
                {Number(product.price * 7.5345)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
