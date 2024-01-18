// app.js

document.addEventListener("DOMContentLoaded", function () {
    const smallComponentsContainer = document.querySelector(".small-components-container");
    const totalPriceContainer = document.querySelector(".total-price-container");
    const selectAllCheckbox = document.querySelector(".checkbox-input");
  
    const smallComponents = [
      { id: 1, name: "Prime", price: 150, selected: false },
      { id: 2, name: "Netflix", price: 200, selected: false },
      { id: 3, name: "Disney+", price: 180, selected: false },
      { id: 4, name: "Hulu", price: 120, selected: false },
      { id: 5, name: "Apple TV+", price: 100, selected: false },
      { id: 6, name: "HBO Max", price: 170, selected: false },
      { id: 9, name: "Peacock", price: 130, selected: false },
      { id: 7, name: "YouTube Premium", price: 140, selected: false },
      { id: 8, name: "CBS All Access", price: 110, selected: false },
      { id: 10, name: "Vudu", price: 90, selected: false },
    ];
  
    let selectAll = false;
  
    function updateSmallComponents() {
      smallComponentsContainer.innerHTML = "";
  
      smallComponents.forEach((component) => {
        const smallComponentDiv = createSmallComponentDiv(component);
        smallComponentsContainer.appendChild(smallComponentDiv);
      });
    }
  
    function createSmallComponentDiv(component) {
      const smallComponentDiv = document.createElement("div");
      smallComponentDiv.classList.add("small-component");
  
      const h2 = document.createElement("h2");
      h2.textContent = component.name;
  
      const p = document.createElement("p");
      p.textContent = `Price: ₹${component.price}`;
  
      const button = createButton(component);
      button.addEventListener("click", () => handleSelect(component.id));
  
      smallComponentDiv.appendChild(h2);
      smallComponentDiv.appendChild(p);
      smallComponentDiv.appendChild(button);
  
      return smallComponentDiv;
    }
  
    function createButton(component) {
      const button = document.createElement("button");
      button.textContent = component.selected ? "Cancel" : "Buy";
      return button;
    }
  
    function handleSelect(id) {
      smallComponents.forEach((component) => {
        if (component.id === id) {
          component.selected = !component.selected;
        }
      });
  
      updateSmallComponents();
      updateTotalPrice();
    }
  
    function handleSelectAll() {
      selectAll = !selectAll;
  
      smallComponents.forEach((component) => {
        component.selected = selectAll;
      });
  
      updateSmallComponents();
      updateTotalPrice();
    }
  
    function updateTotalPrice() {
      const selectedPrices = smallComponents
        .filter((component) => component.selected)
        .map((component) => component.price);
  
      const totalPrice = selectedPrices.reduce((total, price) => total + price, 0);
  
      totalPriceContainer.querySelector("h2").textContent = `Total Price: ₹${totalPrice}/-`;
    }
  
    selectAllCheckbox.addEventListener("change", handleSelectAll);
  
    // Initial rendering
    updateSmallComponents();
    updateTotalPrice();
  });
  