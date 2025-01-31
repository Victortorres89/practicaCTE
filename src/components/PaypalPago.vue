<template>
    <div class="donation-container">
      <h2>Apóyanos con una donación</h2>
      <button @click="donate" class="donate-button">
        Donar con PayPal
      </button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      donate() {
        // Reemplaza este enlace con el tuyo de PayPal
        const paypalLink = "https://www.paypal.com/donate/?hosted_button_id=TU_ENLACE_AQUI";
        window.open(paypalLink, "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .donation-container {
    text-align: center;
    margin: 20px;
  }
  
  .donate-button {
    background-color: #0070ba;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .donate-button:hover {
    background-color: #005ea6;
  }
  </style>
  