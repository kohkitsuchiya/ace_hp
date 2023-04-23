import Swiper, {Navigation, Pagination, SwiperOptions} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination])

export const body = (message: string): void => {
    anime()
    slide(message)
}


function slide (message: string): void {
    // document.body.innerHTML  = `${message}`;
    console.log(`${message}を出力しました`)

    window.onload = () => {
        const swiperParams: SwiperOptions = {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 1,
            loop: false,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                type: "fraction" 
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el:'.swiper-scrollbar',
            },
        }

        const swiper = new Swiper('.swiper', swiperParams)

    }
}

function anime (): void{
    const scrollTop = (): number => {
        return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    };
    const elepos = document.querySelector<HTMLDivElement>('.lineTrigger')
    const elepos2 = document.querySelector<HTMLDivElement>('.lineTrigger2')
    const elepos3 = document.querySelector<HTMLDivElement>('.lineTrigger3')
    const elepos4 = document.querySelector<HTMLDivElement>('.lineTrigger4')
    const elepos5 = document.querySelector<HTMLDivElement>('.lineTrigger5')
    const elepos6 = document.querySelector<HTMLDivElement>('.lineTrigger6')
    const elepos7 = document.querySelector<HTMLDivElement>('.lineTrigger7')
    const elepos8 = document.querySelector<HTMLDivElement>('.lineTrigger8')
    const elepos9 = document.querySelector<HTMLDivElement>('.lineTrigger9')
    const elepos10 = document.querySelector<HTMLDivElement>('.lineTrigger10')
    const elepos11 = document.querySelector<HTMLDivElement>('.lineTrigger11')
    const elepos12 = document.querySelector<HTMLDivElement>('.lineTrigger12')
    const elepos13 = document.querySelector<HTMLDivElement>('.lineTrigger13')
    const elepos14 = document.querySelector<HTMLDivElement>('.lineTrigger14')
    const elepos15 = document.querySelector<HTMLDivElement>('.lineTrigger15')
    const elepos16 = document.querySelector<HTMLDivElement>('.lineTrigger16')
    const elepos17 = document.querySelector<HTMLDivElement>('.lineTrigger17')
    const elepos18 = document.querySelector<HTMLDivElement>('.lineTrigger18')
    const elepos19 = document.querySelector<HTMLDivElement>('.lineTrigger19')
    const elepos20 = document.querySelector<HTMLDivElement>('.lineTrigger20')
    const elepos21 = document.querySelector<HTMLDivElement>('.lineTrigger21')

    window.onload = () =>{
        if(elepos){
            elepos.classList.toggle('lineanime')
        }
        if(elepos2){
            elepos2.classList.toggle('lineanime')
        }
        if(elepos3){
            elepos3.classList.toggle('lineanime')
        }
        if(elepos4){
            elepos4.classList.toggle('lineanime')
        }
        if(elepos5){
            elepos5.classList.toggle('lineanime')
        }
        if(elepos6){
            elepos6.classList.toggle('lineanime')
        }
        if(elepos7){
            elepos7.classList.toggle('lineanime')
        }
        if(elepos8){
            elepos8.classList.toggle('lineanime')
        }
        if(elepos9){
            elepos9.classList.toggle('lineanime')
        }
        if(elepos10){
            elepos10.classList.toggle('lineanime')
        }
        if(elepos11){
            elepos11.classList.toggle('lineanime')
        }
        if(elepos12){
            elepos12.classList.toggle('lineanime')
        }
        if(elepos13){
            elepos13.classList.toggle('lineanime')
        }
        if(elepos14){
            elepos14.classList.toggle('lineanime')
        }
        if(elepos15){
            elepos15.classList.toggle('lineanime')
        }
        if(elepos16){
            elepos16.classList.toggle('lineanime')
        }
        if(elepos17){
            elepos17.classList.toggle('lineanime')
        }
        if(elepos18){
            elepos18.classList.toggle('lineanime')
        }
        if(elepos19){
            elepos19.classList.toggle('lineanime')
        }
        if(elepos20){
            elepos20.classList.toggle('lineanime')
        }
        if(elepos21){
            elepos21.classList.toggle('lineanime')
        }
        }

    window.onscroll = () =>{
        if(elepos){
            if(scrollTop() >= (elepos?.offsetTop - 50) - window.innerHeight){
                elepos.classList.add('lineanime')
                // }
            }else{
                elepos.classList.remove('lineanime')
            }
        }
        if(elepos2){
            if(scrollTop() >= (elepos2?.offsetTop - 50) - window.innerHeight){
                elepos2.classList.add('lineanime')
                // }
            }else{
                elepos2.classList.remove('lineanime')
            }
        }
        if(elepos3){
            if(scrollTop() >= (elepos3?.offsetTop - 50) - window.innerHeight){
                elepos3.classList.add('lineanime')
                // }
            }else{
                elepos3.classList.remove('lineanime')
            }
        }
        if(elepos4){
            if(scrollTop() >= (elepos4?.offsetTop - 50) - window.innerHeight){
                elepos4.classList.add('lineanime')
                // }
            }else{
                elepos4.classList.remove('lineanime')
            }
        }
        if(elepos5){
            if(scrollTop() >= (elepos5?.offsetTop - 50) - window.innerHeight){
                elepos5.classList.add('lineanime')
                // }
            }else{
                elepos5.classList.remove('lineanime')
            }
        }
            if(elepos6){
                if(scrollTop() >= (elepos6?.offsetTop - 50) - window.innerHeight){
                    elepos6.classList.add('lineanime')
                    // }
                }else{
                    elepos6.classList.remove('lineanime')
                }
        }
        if(elepos7){
            if(scrollTop() >= (elepos7?.offsetTop - 50) - window.innerHeight){
                elepos7.classList.add('lineanime')
                // }
            }else{
                elepos7.classList.remove('lineanime')
            }
    }
    if(elepos8){
        if(scrollTop() >= (elepos8?.offsetTop - 50) - window.innerHeight){
            elepos8.classList.add('lineanime')
            // }
        }else{
            elepos8.classList.remove('lineanime')
        }
}
if(elepos9){
    if(scrollTop() >= (elepos9?.offsetTop - 50) - window.innerHeight){
        elepos9.classList.add('lineanime')
        // }
    }else{
        elepos9.classList.remove('lineanime')
    }
}
if(elepos10){
    if(scrollTop() >= (elepos10?.offsetTop - 50) - window.innerHeight){
        elepos10.classList.add('lineanime')
        // }
    }else{
        elepos10.classList.remove('lineanime')
    }
}
if(elepos11){
    if(scrollTop() >= (elepos11?.offsetTop - 50) - window.innerHeight){
        elepos11.classList.add('lineanime')
        // }
    }else{
        elepos11.classList.remove('lineanime')
    }
}
if(elepos12){
    if(scrollTop() >= (elepos12?.offsetTop - 50) - window.innerHeight){
        elepos12.classList.add('lineanime')
        // }
    }else{
        elepos12.classList.remove('lineanime')
    }
}
if(elepos13){
    if(scrollTop() >= (elepos13?.offsetTop - 50) - window.innerHeight){
        elepos13.classList.add('lineanime')
        // }
    }else{
        elepos13.classList.remove('lineanime')
    }
}
if(elepos14){
    if(scrollTop() >= (elepos14?.offsetTop - 50) - window.innerHeight){
        elepos14.classList.add('lineanime')
        // }
    }else{
        elepos14.classList.remove('lineanime')
    }
}
if(elepos15){
    if(scrollTop() >= (elepos15?.offsetTop - 50) - window.innerHeight){
        elepos15.classList.add('lineanime')
        // }
    }else{
        elepos15.classList.remove('lineanime')
    }
}
if(elepos16){
    if(scrollTop() >= (elepos16?.offsetTop - 50) - window.innerHeight){
        elepos16.classList.add('lineanime')
        // }
    }else{
        elepos16.classList.remove('lineanime')
    }
}
if(elepos17){
    if(scrollTop() >= (elepos17?.offsetTop - 50) - window.innerHeight){
        elepos17.classList.add('lineanime')
        // }
    }else{
        elepos17.classList.remove('lineanime')
    }
}
if(elepos18){
    if(scrollTop() >= (elepos18?.offsetTop - 50) - window.innerHeight){
        elepos18.classList.add('lineanime')
        // }
    }else{
        elepos18.classList.remove('lineanime')
    }
}
if(elepos19){
    if(scrollTop() >= (elepos19?.offsetTop - 50) - window.innerHeight){
        elepos19.classList.add('lineanime')
        // }
    }else{
        elepos19.classList.remove('lineanime')
    }
}
if(elepos20){
    if(scrollTop() >= (elepos20?.offsetTop - 50) - window.innerHeight){
        elepos20.classList.add('lineanime')
        // }
    }else{
        elepos20.classList.remove('lineanime')
    }
}
if(elepos21){
    if(scrollTop() >= (elepos21?.offsetTop - 50) - window.innerHeight){
        elepos21.classList.add('lineanime')
        // }
    }else{
        elepos21.classList.remove('lineanime')
    }
}
    }
}
