!function () {
    var duration = 50
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) // button
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 25
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `
       body{
           background-color:#B0E5FD;
       }
      
      .face{
        width:75vw;
        height:35vw;
        background-color: #FFFFFF;
        border:1.5vw solid #6E3619;
        border-bottom: none;
        border-radius: 50% / 100% 100% 0 0;
        position: absolute;
        left:50%;
        bottom: 0;
        transform:translateX(-50%);
      }
      
      .eye>div{
        width:8vw;
        height:8vw;
        background-color:#6E3619;
        border-radius:50%;
        position:absolute;
        top:40%;
      }    
      .eye-left{
        left:62.5%;
      }
      .eye-right{
        right:62.5%;
      }
      
      .nose > div{
        position: absolute;
        top:45%;
        width:7vw;
        height:7vw;
        border:1.5vw solid #6E3619;
        border-radius:50%;
       }
       .nose-left{
         left: 49.5%;
       }
       .nose-right{
         right:50%;
       }
       .nose::before{
        content:'';
        display: inline-block;
        width:10.2vw;
        height:6vw;
        background:#fff;
        border-radius: 50% / 50%;
        position:absolute;
        top:38%;
        left:50%;
        z-index:1;
        transform:translateX(-50%);
      }
      
      .blush > div{
        width:10vw;
        height:6.6vw;
        background-color:#F9D1CA;
        border-radius:50%/50%;
        position: absolute;
        top:65%;
        z-index:1;
      }
      .blush-left{
        left:68.5%;
      }
      .blush-right{
      right:68.5%;
      }
      
      .blush-left::before,
      .blush-right::before{
        content:'';
        display: inline-block;
        width:0.8vw;
        height:2.5vw;
        background-color:#fff;
        position: absolute;
        left:30%;
        top:25%;
        border-radius: 50%/46%;
        transform: rotate(15deg);
      }
      .blush-left::after,
      .blush-right::after{
        content:'';
        display: inline-block;
        width:0.8vw;
        height:2.5vw;
        background-color:#fff;
        position: absolute;
        right:30%;
        top:25%;
        border-radius: 50%/46%;
        transform: rotate(15deg);
        }
       
        .hand-left{
          width:20vw;
          height:7vw;
          border:1.5vw solid #6E3619;
          background-color: #fff;
          position: absolute;
          border-bottom: none;
          bottom: 0;
          left:5%;
          z-index: 1;
          border-radius: 50% / 100% 100% 0 0;
        }
      
        .hand-right{
          width:30vw;
          height:17vw;
          border:1.5vw solid #6E3619;
          background-color: #fff;
          border-radius: 45%/45%;
          position: absolute;
          right:2%;
          bottom: -10vw;
          transform: rotate(120deg);
         
        }
        .grass {
          transform-origin: 50% 100%;
          position: absolute;
          left:36%;
          bottom:115%;
          z-index: 1;
          transform: rotate(-10deg);
        }
        .grass::after,
        .grass::before {
            content: '';
            display: inline-block;
            position: absolute;
            z-index: 1;
            background-color: #83d456;
            border:1.5vw solid #6E3619;
            border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
          }
      
          .grass::after {
            width: 10vw;
            height: 8vw;
            transform: rotate(170deg);
            bottom:2vw;
            left:-5vw;
          }

          .grass::before {
            width: 10vw;
            height: 8vw;
            transform: rotate(45deg);
            right:4vw;
            bottom:-2vw;
          }
      
          .grass-inner {
            width: 10vw;
            height: 8vw;
            border:1.5vw solid #6E3619;
            border-radius: 0 100% 0 0;
            border-bottom-width: 0px;
            border-top-width: 8px;
            border-left-width: 0;
            position: absolute;
            bottom: -6vw;
            left: -4vw;
          } 
    `


    writeCode('', code)

}.call()
