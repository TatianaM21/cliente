import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Clientes',
    path: '/clientes',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Productos',
    path: '/productos',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
   {
    title: 'Empleados',
    path: '/empleados',
    icon: <BsFillPersonCheckFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Pedidos',
    path: '/orders',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Facturas',
    path: '/invoices',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Gastos',
    path: '/expenses',
    icon: <FaCashRegister/>,
    cName: 'nav-text'
  } ,
  {
    title: 'Reportes',
    path: '/reportes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
];
