$(document).ready(function () {
    // var w = $(".gear_big2").css("left").replace(/[^-\d\.]/g, '');
    // console.log(w)
    // w = w
    // console.log(w)
    // // $(".gear_small").css("left", 0 + 'px');

    var time = 0
    var turn = 0
    var up = 1000

    // $(document).on("mousemove", function (event) {
    //     console.log(event.pageX)
    //     // console.log(event.pageY)

    //     $(".gear-box").css("perspective", event.pageX + 'px')

    // })

    setInterval(function () {
        time = time + 0.001
        turn = turn + 0.01



        $(".gear1").css("transform", 'rotateZ(' + turn + 'deg)' + 'translateZ(' + 100 + 'px)')
        $(".gear2").css("transform", 'rotateZ(' + -turn * 2.5 + 'deg)' + 'translateZ(' + 100 + 'px)')

        $(".gear3").css("transform", 'rotateZ(' + turn + 'deg)')
        $(".gear4").css("transform", 'rotateZ(' + -turn * 2.5 + 'deg)')

        $(".gear5").css("transform", 'rotateZ(' + (13 + -turn * 1.43) + 'deg)' + 'translateZ(' + 100 + 'px)')
        $(".gear6").css("transform", 'rotateZ(' + (5 + turn * 1.83) + 'deg)' + 'translateZ(' + 100 + 'px)')
        $(".gear7").css("transform", 'rotateZ(' + (-5 - turn * 2.5) + 'deg)' + 'translateZ(' + 100 + 'px)')

        if (time > 0.3) {
            $(".gear-box").animate({ bottom: "101%" }, 6000 / 2)
            $(".text-box").animate({ top: "-15%" }, 5500 / 2)
        }

        if (time > 1.2) {
            $(".gear-box").css("perspective", up + 'px')
            up = up - 1
            if (up < 100) {
                up = 100
            }
            console.log(up)

        }

    }, 1)



});