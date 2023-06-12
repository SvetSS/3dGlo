const calc = () => {
    const calcBlock = document.querySelector('.calc-block');
    const countInput = document.querySelector('.calc-count');
    const dayInput = document.querySelector('.calc-day');
    const squareInput = document.querySelector('.calc-square');

    function validateNumericInput(input) {
        const value = input.value.trim();

        const numericValue = value.replace(/[^\d]/g, '');

        input.value = numericValue;
    }

    countInput.addEventListener('input', () => {
        validateNumericInput(countInput);
    });

    dayInput.addEventListener('input', () => {
        validateNumericInput(dayInput);
    });

    squareInput.addEventListener('input', () => {
        validateNumericInput(squareInput);
    });

    const select = calcBlock.querySelector('.calc-type');
    select.addEventListener('change', () => {
        const selectedOption = select.options[select.selectedIndex];
        console.log(selectedOption.textContent);
    });

    console.log('calc');
};
export default calc;
