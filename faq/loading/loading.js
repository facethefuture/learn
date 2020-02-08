function refresh (){
    //1.获取到列表的dom，刷新显示部分的dom，列表父容器的dom



    let container = document.querySelector('#afterLoading');

    let refreshText = document.querySelector('.refreshText');

    let parent = document.querySelector('#afterLoading');



    //2.定义一些需要常用的变量

    let startY = 0;//手指触摸最开始的Y坐标

    let endY = 0;//手指结束触摸时的Y坐标



    //3.给列表dom监听touchstart事件,得到起始位置的Y坐标

    parent.addEventListener('touchstart',function(e){
        console.log(e)
        startY = e.touches[0].pageY;
        // if(isTop() && (e.touches[0].pageY-startY) > 1000){
        //     setTimeout(() => {
        //         document.querySelector('#loading').style.display = 'block'
        //         document.querySelector('#afterLoading').style.display = 'none'
        //     },500)
        // }



    });

    //4.给列表dom监听touchmove事件，当移动到一定程度需要显示上面的文字

    parent.addEventListener('touchmove',function (e) {
        // console.log(e.touches[0].pageY,startY)
        endY = e.touches[0].pageY
        let flag = false
        if(isTop() && (e.touches[0].pageY-startY) > 0){

            // console.log('下拉了');

            // refreshText.style.height = "50px";
            if (!flag && endY - startY < 300) {
                parent.style.transform = `translateY(${endY - startY > 300 ? 150 : (endY - startY) / 1.2}px)`;

                parent.style.transition = "all ease 0.5s";
                flag = !flag
            }


            // refreshText.innerHTML = "释放立即刷新...";

        }

    });

    //5.给列表dom监听touchend事件，此时说明用户已经松开了手指，应该进行异步操作了

    parent.addEventListener('touchend',function (e) {
        // refreshText.style.height = "0px";
        // console.log(e)
        parent.style.transform = "translateY(0)";


        if(isTop() && (endY - startY) > 300){
            setTimeout(() => {
                document.querySelector('#loading').style.display = 'flex'
                document.querySelector('#afterLoading').style.display = 'none'
            },300)
            // refreshText.innerHTML = "正在刷新...";

            setTimeout(function(){


                console.log('成功刷新');
                window.location.reload()

                document.querySelector('#loading').style.display = 'none'
                document.querySelector('#afterLoading').style.display = 'block'
                // window.location.reload()
                // setTimeout(() => {
                //
                // },500)

            },1000)

        }

        return;

    })

    function isTop(){
        // console.log(document.documentElement.scrollTop||document.body.scrollTop)
        var t = document.documentElement.scrollTop||document.body.scrollTop;

        return t === 0 ? true : false;

    }
}
function clickTab() {
    document.querySelector('#tabItem1').onclick = function (v) {
        console.log(window.location)
        console.log(`${window.location.origin}${window.location.pathname}`)
        window.location.href = window.location.origin + '/faq/index.html'

    }
    document.querySelector('#tabItem2').onclick = function (v) {
        console.log(window.location)
        console.log(`${window.location.origin}${window.location.pathname}`)
        window.location.href = window.location.origin + '/faq/index2.html'

    }
    document.querySelector('#tabItem3').onclick = function (v) {
        console.log(window.location)
        console.log(`${window.location.origin}${window.location.pathname}`)
        window.location.href = window.location.origin + '/faq/index3.html'

    }
}
