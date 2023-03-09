function planChoose(a, b, c, d) {
    a.forEach(element => {
        element.addEventListener('mouseover', function (e) {
            element.classList.add('plan_choose');
            b.classList.add('plan_titles_choose');
            c.classList.add('plan_titles_choose');
            d.classList.add('plan_button_choose');
        });
        element.addEventListener('mouseleave', function (e) {
            element.classList.remove('plan_choose');
            b.classList.remove('plan_titles_choose');
            c.classList.remove('plan_titles_choose');
            d.classList.remove('plan_button_choose');
        });
    });
}

const sign_inEl = document.querySelector('.sign_in_button');
const inputPassEl = document.querySelector('.password');
const inputRePassEl = document.querySelector('.re_password');

sign_inEl.addEventListener('click', function (e) {
    if (inputPassEl.value === inputRePassEl.value) {
        inputPassEl.classList.add('right_pass');
        inputRePassEl.classList.add('right_pass');
    } else {
        inputPassEl.classList.add('wrong_pass');
        inputRePassEl.classList.add('wrong_pass');
    };
});

const plan1El = document.querySelectorAll('.tarif1');
const plan2El = document.querySelectorAll('.tarif2');
const plan3El = document.querySelectorAll('.tarif3');
const planTitle1El = document.querySelector('.plan_title1');
const planTitle2El = document.querySelector('.plan_title2');
const planTitle3El = document.querySelector('.plan_title3');
const planPrice1El = document.querySelector('.plan_title_price1');
const planPrice2El = document.querySelector('.plan_title_price2');
const planPrice3El = document.querySelector('.plan_title_price3');
const button1El = document.querySelector('.plan_button1');
const button2El = document.querySelector('.plan_button2');
const button3El = document.querySelector('.plan_button3');

planChoose(plan1El, planTitle1El, planPrice1El, button1El);
planChoose(plan2El, planTitle2El, planPrice2El, button2El);
planChoose(plan3El, planTitle3El, planPrice3El, button3El);






const starsEl = document.querySelector('.stars');
const buttons = document.querySelectorAll('.rating_star_button');

buttons.forEach(element => {
    element.addEventListener('click', function () {


        let currentStar = element.previousSibling;
        if (currentStar.classList.contains("checked")) {

            currentStar.classList.remove('checked');
        } else {
            currentStar.classList.add('checked');
            element.classList.add('checked');
        }
    });
})
    // buttons.forEach(element => {
    //     element.addEventListener ('click', function () {
    //         element.classList.add('checked');
    //             // const currentStar = element.previousSibling;
    //             // if (element.classList.contains("checked")) {
    //             //     currentStar.classList.remove('checked');
    //             // } else {
    //             //     currentStar.classList.add('checked');
    //             // }
    //         });
    //     })