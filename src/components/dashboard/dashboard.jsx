import React, { Component } from "react";
// import ofertaBlack from "../../../../public/images/products/Oferta-BlackFriday.jpg";
// import ofertAcc from "../../../../public/images/products/Oferta-Accesorios.jpg";
// import Accesorios from "../Accesorios/Accesorios";
// import Celulares from "../Celulares/Celulares";
import Product from "../products/products";
import { Route, Routes } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <main className="content-wrap">
        <Product />
      </main>
    </>
  );
}