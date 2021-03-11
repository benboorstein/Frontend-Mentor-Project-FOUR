const ranges = [
    {
        pageViews: 25,
        price: 2.00
    },
    {
        pageViews: 40,
        price: 7.00
    },
    {
        pageViews: 55,
        price: 11.50
    },
    {
        pageViews: 70,
        price: 15.50
    },
    {
        pageViews: 85,
        price: 19.00
    },
    {
        pageViews: 100,
        price: 22.00
    },
    {
        pageViews: 115,
        price: 24.50
    },
    {
        pageViews: 130,
        price: 26.50
    },
    {
        pageViews: 145,
        price: 28.00
    },
    {
        pageViews: 160,
        price: 29.00
    },
    {
        pageViews: 175,
        price: 29.50
    }
]

document.getElementById('points').addEventListener('change', (event) => {

    document.getElementById('pageviews').textContent = ranges[Number(event.target.value)].pageViews // QQQ: Do I need Number() here (it works without it)?
    document.getElementById('price').textContent = ranges[Number(event.target.value)].price.toFixed(2) // QQQ: Do I need Number() here (it works without it)?
})

// The toggle
document.getElementById('toggle').addEventListener('click', getYearlyBilling)

function getYearlyBilling() {
    if (document.getElementById('toggle').checked) {
        document.getElementById('billing-period').textContent = '/ year'
        document.getElementById('price').textContent = ranges[Number(event.target.value)].price*.75.toFixed(2) // QQQ: How do I access the proper array index from within this function? Obviously I know I can't in the way I have in the line above. And how do I work in the ".75" so that it ALSO gets rounded to only 2 places past the decimal point?
    } else {
        document.getElementById('billing-period').textContent = '/ month'
    }
}