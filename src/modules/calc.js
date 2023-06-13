const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const calcSquare = document.querySelector('.calc-square');
    const calcType = document.querySelector('.calc-type');
    const total = document.getElementById('total');

    function validateNumericInput(input) {
        const value = input.value.trim();
        const numericValue = value.replace(/[^\d]/g, '');
        input.value = numericValue;
    }

    calcCount.addEventListener('input', () => {
        validateNumericInput(calcCount);
    });

    calcDay.addEventListener('input', () => {
        validateNumericInput(calcDay);
    });

    calcSquare.addEventListener('input', () => {
        validateNumericInput(calcSquare);
    });

    const select = calcBlock.querySelector('.calc-type');
    select.addEventListener('change', () => {
        const selectedOption = select.options[select.selectedIndex];
        console.log(selectedOption.textContent);
    });

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcSquare.value && calcType.value) {
            totalValue = price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }
        total.textContent = totalValue;
    };
    calcBlock.addEventListener('input', e => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    });
    console.log('calc');
};
export default calc;
