"use client"

import React from 'react';
import { Card,CardBody, CardHeader, Image } from '@nextui-org/react';

const CardItem =  ({ data } : any) => {
    return (
        <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{data.product.title}</p>
            <small className="text-default-500">{data.product.brand}</small>
            <h4 className="font-bold text-large">{data.product.price}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
            <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={data.product.thumbnail}
            width={270}
            />
        </CardBody>
        </Card>
    );
};

export default CardItem;