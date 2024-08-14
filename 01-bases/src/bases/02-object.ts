export const persona = {
  name: "Juan",
  address: {
      city: "Barcelona",
      postalCode: 8001
  }
};

// Usando el operador spread (copia superficial)
const copyWithSpread = { ...persona };

// Usando structuredClone (copia profunda)
const copyWithStructuredClone = structuredClone(persona);

// Modificamos el objeto persona
persona.address.city = "Madrid";

console.log(persona.address.city); // "Madrid"
console.log(copyWithSpread.address.city); // "Madrid" 
// copyWithSpread.address sigue apuntando al mismo objeto que persona.address.

console.log(copyWithStructuredClone.address.city); // "Barcelona"
// copyWithStructuredClone.address es un objeto completamente nuevo y no se ve afectado por los cambios en persona.
