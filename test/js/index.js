// bmi = (peso/altezza)**2
const persone = {
  matteo: {
    name: "Matteo",
    weight: 78,
    height: 169,
    get bmi() {
      return Math.floor((this.weight / this.height) ** 2 * 100);
    },
  },
  luca: {
    name: "Luca",
    weight: 95,
    height: 195,
    get bmi() {
      return Math.floor((this.weight / this.height) ** 2 * 100);
    },
  },
};

const matteoBmi = persone.matteo.bmi;
console.log(persone.matteo.name, matteoBmi);

let lucaBmi = persone.luca.bmi;
console.log(persone.luca.name, lucaBmi);

if (matteoBmi > lucaBmi) {
  console.log(`Matteo ha il BMI più alto: ${matteoBmi}`);
} else if (lucaBmi > matteoBmi) {
  console.log(`Luca ha il BMI più alto: ${lucaBmi}`);
} else {
  console.log(`Matteo e Luca hanno lo stesso BMI: ${matteoBmi} == ${lucaBmi}`);
}
