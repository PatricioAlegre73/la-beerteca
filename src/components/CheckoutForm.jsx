import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Complete todos los campos");
      return;
    }

    setLoading(true);
    const order = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error("Error creando la orden: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>Gracias por tu compra!</h2>
        <p>Tu número de orden es: {orderId}</p>
        <p>Serás redirigido al inicio en unos segundos.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>
      <input
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Procesando..." : "Enviar Orden"}
      </button>
    </form>
  );
}

export default CheckoutForm;
