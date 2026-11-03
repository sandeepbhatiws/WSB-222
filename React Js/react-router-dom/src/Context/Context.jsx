import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

var ContextAPI = createContext()

export default function Context({children}) {

    var cartItems = localStorage.getItem('cartItems');
    var cartItems = JSON.parse(cartItems);

    var [cartData, setCartData] = useState(cartItems ?? []);
    var [isLogin, setIsLogin] = useState(0);

    const addToCart = (product) => {

        // var checkCart = cartData.filter((v) => {
        //     if(v.id == product.id){
        //         return v;
        //     }
        // })

        var checkCart = cartData.filter((v) => v.id == product.id)

        if(checkCart.length == 0){
            const data = {
                id : product.id,
                name : product.name,
                image : product.image,
                price : product.price,
                description : product.description,
                category_name : product.category_name,
                quantity : 1
            }

            setCartData([data, ...cartData])
            toast.success('Add to Cart.')

            localStorage.setItem('cartItems',JSON.stringify([data, ...cartData]))
        } else {

            const updateCart = cartData.map((v) => {
                if(product.id == v.id){
                    v.quantity++;
                    return v;
                } else {
                    return v;
                }
            })

            setCartData([...updateCart])
            toast.success('Update Cart.')
            localStorage.setItem('cartItems',JSON.stringify([...updateCart]))
        }

        console.log(checkCart)

        
    }

    const updateCart = (id, type) => {
        console.log(id, type);

        if(type == 'minus'){
            const updateCart = cartData.map((v) => {
                if(id == v.id){
                    if(v.quantity > 1){
                        v.quantity--
                        toast.success('Quantity Update.')
                        return v
                    } else {
                        return v
                    }
                } else {
                    return v
                }
            })
            setCartData([...updateCart])
            localStorage.setItem('cartItems', JSON.stringify([...updateCart]))
        } else {
            const updateCart = cartData.map((v) => {
                if(id == v.id){
                    v.quantity++
                    return v
                } else {
                    return v
                }
            })
            setCartData([...updateCart])
            toast.success('Quantity Update.')
            localStorage.setItem('cartItems', JSON.stringify([...updateCart]))
        }
    }

    var data = { cartData, isLogin, setIsLogin, addToCart, updateCart }

    return (
        <>
            <ContextAPI.Provider value={ data }>
                {children}
            </ContextAPI.Provider>
        </>
    )
}


export { ContextAPI }