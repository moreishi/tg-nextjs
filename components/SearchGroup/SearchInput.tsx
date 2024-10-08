"use client"

import React, { useState } from 'react';
import {Input, Image, Card, CardHeader} from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SearchInput() {

    const [searchKeyUp, setSearchKeyUp] = useState();
    const [searchData, setSearchData] = useState([]);

    const router =  useRouter();

    const searchKeyUpFn = async (event:any) => {
        setSearchKeyUp(event.target.value);
        const data = (await fetch(`http://127.0.0.1:8000/api/products/search?q=${searchKeyUp}&select=title,thumbnail`)).json();
        let [{products}] = await Promise.all([data]);
        setSearchData(products)
    }

    const onLinkClick = (productId:string) => {
        // console.log(productId);
        router.push(`/products/${productId}`)
    }

  return (
    <div className="inline-flex flex-col justify-center relative text-gray-500">
      <div className='relative'><Input onKeyUp={searchKeyUpFn} /></div>
        
        <ul className="bg-white border border-gray-100 w-full mt-2">
            {searchData.slice(0,7).map((product:any) => <li onClick={() => onLinkClick(product.id)} key={product.id} className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
            <Card shadow='none' radius='none'>
                <CardHeader className="flex gap-3">
                    <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src={product.thumbnail}
                    width={40}
                    />
                    <div className="flex flex-col">
                    <p className="text-md">{product.title}</p>
                    </div>
                </CardHeader>
            </Card>
            </li>)}
            
        </ul>

    </div>
  );
}