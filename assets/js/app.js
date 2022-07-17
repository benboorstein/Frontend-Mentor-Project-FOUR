const ranges = [ // An array of objects...often the structure that's best to use!
    {
        pageViews: 25,
        monthlyPrice: 2.00
    },
    {
        pageViews: 40,
        monthlyPrice: 7.00
    },
    {
        pageViews: 55,
        monthlyPrice: 11.50
    },
    {
        pageViews: 70,
        monthlyPrice: 15.50
    },
    {
        pageViews: 85,
        monthlyPrice: 19.00
    },
    {
        pageViews: 100,
        monthlyPrice: 22.00
    },
    {
        pageViews: 115,
        monthlyPrice: 24.50
    },
    {
        pageViews: 130,
        monthlyPrice: 26.50
    },
    {
        pageViews: 145,
        monthlyPrice: 28.00
    },
    {
        pageViews: 160,
        monthlyPrice: 29.00
    },
    {
        pageViews: 175,
        monthlyPrice: 29.50
    }
]

function getInfo(billPeriod, pricing, arrIndex) {
    document.getElementById('billing-period').textContent = billPeriod
    document.getElementById('price').textContent = pricing.toFixed(2) // toFixed(2) rounds the result to two decimal places and converts to a string.
    document.getElementById('pageviews').textContent = arrIndex.pageViews
}

let yearlyDiscount = .25
let monthsInYear = 12

document.getElementById('toggle').addEventListener('click', changeBilling)
// changeBilling() is for when the slider is STATIC (i.e., the user has only checked/unchecked the toggle but has not moved the slider)
function changeBilling() {
    let rangeSlider = document.getElementById('points')
    let yearlyPrice = (ranges[rangeSlider.value].monthlyPrice - (ranges[rangeSlider.value].monthlyPrice * yearlyDiscount)) * monthsInYear

    if (document.getElementById('toggle').checked) {
        getInfo('/ year', yearlyPrice, ranges[rangeSlider.value])
    } else {
        getInfo('/ month', ranges[rangeSlider.value].monthlyPrice, ranges[rangeSlider.value])
    }
}

// This is for when the slider is MOBILE (i.e., the user is moving the slider)
document.getElementById('points').addEventListener('input', (event) => { // "input" instead of "change" so that it works while DRAGGING the slider's thumb and not just on the click release of the slider's thumb.
    let yearlyPrice = (ranges[event.target.value].monthlyPrice - (ranges[event.target.value].monthlyPrice * yearlyDiscount)) * monthsInYear

    if (document.getElementById('toggle').checked) {
        getInfo('/ year', yearlyPrice, ranges[event.target.value])
    } else {
        getInfo('/ month', ranges[event.target.value].monthlyPrice, ranges[event.target.value])
    }
})