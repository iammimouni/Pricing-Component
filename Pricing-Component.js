document.getElementById("pricing-toggle").addEventListener("change", (event) => {
    const isYearly = event.target.checked;
    document.querySelectorAll(".price-value").forEach((priceElement) => {
        const price = isYearly ?
            priceElement.getAttribute("data-year") :
            priceElement.getAttribute("data-month");
        priceElement.textContent = price;
    });
});