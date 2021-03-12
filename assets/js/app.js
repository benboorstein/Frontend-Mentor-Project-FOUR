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
    document.getElementById('pageviews').textContent = ranges[event.target.value].pageViews
    document.getElementById('price').textContent = ranges[event.target.value].price.toFixed(2)
})

document.getElementById('toggle').addEventListener('click', billingPeriod)

function billingPeriod() {
    let rangeSlider = document.getElementById('points')

    if (document.getElementById('toggle').checked) {
        document.getElementById('billing-period').textContent = '/ year'
        document.getElementById('price').textContent = ranges[rangeSlider.value].price*(.75).toFixed(2)
        document.getElementById('points').addEventListener('change', (event) => {
            document.getElementById('price').textContent = ranges[event.target.value].price*(.75).toFixed(2) // QQQ: toFixed(2) is working, but it's not working once the *(.75) is added. I've tried putting the parentheses several different places, and I've tried moving the *(.75) to the end.
        })
    } else {
        document.getElementById('billing-period').textContent = '/ month'
        document.getElementById('price').textContent = ranges[rangeSlider.value].price.toFixed(2)
        document.getElementById('points').addEventListener('change', (event) => {
            document.getElementById('price').textContent = ranges[event.target.value].price.toFixed(2)
        })
    }
}












