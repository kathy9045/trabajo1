// CheckoutForm.jsx
import React, { useState } from 'react';
import '../css/CheckoutForm.css'; // Asegúrate de que la ruta es correcta

const CheckoutForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para proceder al pago
    alert('Pago procesado con éxito!');
    onClose(); // Cerrar el formulario después de procesar el pago
  };

  return (
    <div className="checkout-form-overlay">
      <div className="checkout-form">
        <h2>Formulario de Pago</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            Método de Pago:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="creditCard">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Transferencia Bancaria</option>
            </select>
          </label>
          {paymentMethod === 'creditCard' && (
            <>
              <label>
                Número de Tarjeta:
                <input
                  type="text"
                  placeholder="**** **** **** ****"
                  required
                />
              </label>
              <label>
                Fecha de Expiración:
                <input
                  type="text"
                  placeholder="MM/AA"
                  required
                />
              </label>
              <label>
                Código de Seguridad:
                <input
                  type="text"
                  placeholder="CVV"
                  required
                />
              </label>
            </>
          )}
          {paymentMethod === 'paypal' && (
            <p>Inicie sesión en su cuenta de PayPal para completar el pago.</p>
          )}
          {paymentMethod === 'bankTransfer' && (
            <p>Por favor, realice la transferencia bancaria a las siguientes coordenadas:</p>
          )}
          <button type="submit" className="submit-button">Pagar</button>
          <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
      <style>
        {`
          /* Estilos para el overlay */
          .checkout-form-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            overflow: auto; /* Permite el desplazamiento en caso de contenido excesivo */
          }

          /* Estilos para el formulario */
          .checkout-form {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 100%;
            max-width: 600px; /* Ancho máximo del formulario */
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow-y: auto; /* Permite el desplazamiento vertical */
            max-height: 80vh; 
            margin-top: 120px; /* Espacio adicional desde la parte superior del contenedor overlay */
            border: 1px solid #ddd;
          }

          h2 {
            margin-bottom: 20px;
          }

          label {
            display: block;
            margin-bottom: 15px;
          }

          input, select {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          button {
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 10px;
          }

          .submit-button {
            background-color: #2ecc71; /* Verde para el botón de pago */
            color: #fff;
          }

          .cancel-button {
            background-color: #e74c3c; /* Rojo para el botón de cancelar */
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default CheckoutForm;
