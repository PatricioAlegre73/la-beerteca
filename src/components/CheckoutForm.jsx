// src/components/CheckoutForm.jsx
import React, { useState } from "react";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías agregar la lógica para procesar el pago
    console.log(`Compra realizada por ${name} con email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;
