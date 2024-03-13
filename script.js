const click = document.getElementById('click');
const display = document.getElementById('display');

const UP1 = document.getElementById('1_up');
const BuyExpense = document.getElementById('buy_expense')

const UP2 = document.getElementById('10_up');
const BuyExpense2 = document.getElementById('buy_expense2');

const ShopOpen = document.getElementById("OPEN");
const SHOP = document.getElementById("shop");



let count = 0
let BuyCount = 5
let BuyCount2 = 1000

//메인 스코어
click.addEventListener('click', function(){
    count++ ;
    display.textContent = count
})
//5초마다 1씩 증가 함수
setInterval(function(){
    count++
    display.textContent = count
},5000)

// 페이지 로드 시 상점 상태 확인
if (localStorage.getItem('shopOpen') === 'true') {
    SHOP.style.display = 'block';
    ShopOpen.style.display = 'none';
}
//상점  함수
function OPEN(){
        SHOP.style.display = 'block'
        ShopOpen.style.display = 'none'

        localStorage.setItem('shopOpen', 'true');
}
//상점 닫기 함수
function Close(){
        ShopOpen.style.display = ''
        SHOP.style.display = 'none'

        localStorage.setItem('shopOpen', 'false');
}


//1씩 업그레이드 함수
UP1.addEventListener('click', function(){
    if(parseInt(BuyExpense.textContent) >= 100 && parseInt(display.textContent) >= parseInt(BuyExpense.textContent)){
        count -= parseInt(BuyExpense.textContent); 
            BuyCount+=20;
            display.textContent = count;
            BuyExpense.textContent = BuyCount;

            click.addEventListener('click', function(){
                count++ ;
                display.textContent = count
                
            })

    }else if(parseInt(BuyExpense.textContent) >= 10 && parseInt(display.textContent) >= parseInt(BuyExpense.textContent)){
            count -= parseInt(BuyExpense.textContent); 
            BuyCount+=10;
            display.textContent = count;
            BuyExpense.textContent = BuyCount;

            click.addEventListener('click', function(){
                count++ ;
                display.textContent = count
            })

    }else if (parseInt(display.textContent) >= parseInt(BuyExpense.textContent)) {
        count -= parseInt(BuyExpense.textContent); 
        BuyCount+=5;
        display.textContent = count;
        BuyExpense.textContent = BuyCount;

        click.addEventListener('click', function(){
            count++ ;
            display.textContent = count
        })
    } else {
        alert('돈 부족!!');
    }
});



//10씩 업그레이드 함수
UP2.addEventListener('click', function(){
    if (parseInt(display.textContent) >= parseInt(BuyExpense2.textContent)) {
        count -= parseInt(BuyExpense2.textContent); 
        BuyCount2 += 100;
        display.textContent = count;
        BuyExpense2.textContent = BuyCount2;

        click.addEventListener('click', function(){
            count+=10 ;
            display.textContent = count
        })
    }else{
        alert('돈 부족!!');
    }
});

