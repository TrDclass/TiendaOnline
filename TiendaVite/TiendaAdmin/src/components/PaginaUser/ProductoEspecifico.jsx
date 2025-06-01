import { useState } from 'react'
import DescripcionProducto from './ProductoEspecifico/DescripcionProducto'
import MasVendidos from './ProductoEspecifico/MasVendidos'

function ProductoEspecifico(){
    return(
    <>
    <DescripcionProducto/>
    <MasVendidos/>
    </>
    );
}   


export default ProductoEspecifico