import style from "./ShoppingClient.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getOrdersByUser from "../../redux/Actions/Order/getOrdersByUser";
import { Card, Row, Col, Image } from 'antd';
import { getColorName } from "../../utils/getColorName";
import { Link } from "react-router-dom";

const ShoppingClient = ({ products }) => {

  return (
    <div className={style.shoppingClientContainer}>
      
        {products?.map((userOrder) => (
          <div key={userOrder.id} style={{width: '100%'}}>
            {
              <Card
                key={userOrder.id}
                bordered={false}
                hoverable={true}
                id={userOrder.id}
              >
                <Row justify="center">
                  <Col span={3}>
                    <div >Nombre<br /> {userOrder.name} </div>
                  </Col>
                  <Col span={3}>
                    <div><Image alt={userOrder.name} src={userOrder.image &&userOrder.image} width={35} /></div>
                  </Col>
                  <Col span={3}>
                    <div >Color<br />{getColorName(userOrder.color)}</div>
                  </Col>
                  <Col span={3} >
                    <div>Cant.<br />{userOrder.quantity}</div>
                  </Col>
                  <Col span={4}>
                    <div >Precio x unidad<br />${userOrder.price}</div>
                  </Col>
                  <Col span={3}>
                    <div >Total<br />${userOrder.price * userOrder.quantity}</div>
                  </Col>
                  <Col span={3}>
                    <Link to={`/detail/${userOrder.id}`}>
                      Ver
                    </Link>
                  </Col>
                </Row>
              </Card>
            }
          </div>
        ))}
    </div>
  );
};

export default ShoppingClient;


