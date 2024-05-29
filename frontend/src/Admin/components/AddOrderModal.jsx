import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2'
import { AppRoute } from '../../App';
import Products from '../../Guest/pages/Products';
import StitchType from '../../Guest/pages/StitchType';

export default function AddOrderModal() {


    return (

        <>
{/* stitching add krny k liye */}
<StitchType />

{/* products add krny k liye */}
<Products/>





</>


)

}
