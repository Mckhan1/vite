<template>
    <div>
        <Navbar class="hiddenBtn" />
        <div class="textTastyog mt-[72px] h-[174px] w-[100%] bg-[#272E3B] flex">
            <div class="h-[100%] w-[85%] m-auto flex-col items-center justify-center">
                <h2 class="mt-[47px] text-[#fff] text-[48px] font-bold">Подтверждение пополнения счёта</h2>
                <div class="flex text-[#93979D]">
                    <span class="mr-[16px]">Tastygo.gg</span> |
                    <span class="ml-[16px]">Депозит № 87644632</span>
                </div>
            </div>
        </div>

        <div class="min-h-[605px] w-[100%] bg-[#20222A] flex">
            <div class="flex-col h-[100%] w-[85%] m-auto">

                <div class="min-h-[410px] mt-[40px] flex-col justify-between w-[100%] dashedBorder">


                    <div id="block1" class="block1 ml-[78px] pb-[48px] after relative">
                        <h2 class="text-[32px] text-[#fff]">Введите вашу ссылку на обмен</h2>
                        <div class="flex mt-[32px] duration-[.4s] text-[#F4C038]">
                            <span>Посмотреть свою ссылку на обмен</span>
                            <span class="ml-[28px]">Другие способы найти ссылку</span>
                        </div>
                        <div class="flex mt-[32px]">
                            <input placeholder="Введите вашу ссылку на обмен"
                                class="h-[48px] w-[600px] text-[#fff] outline-none px-[30px] bg-[transparent] border-[1px] border-solid border-[#3D4554] rounded-[24px]"
                                type="text">
                            <button class="py-[14px] px-[24px] text-[#A1A8B8] bg-[#425170] rounded-[48px] ml-[24px]"
                                @click="nextLvl">Продолжить</button>

                        </div>
                    </div>


                    <div class="block2 ml-[78px] pb-[48px] disabledBlock duration-[1s] after relative">
                        <h2 class="text-[24px] text-[#909195] w-[100%]">Подтвердите предложение обмена, проверив данные
                        </h2>
                        <div
                            class="time flex mt-[32px] h-[100px] border-b-[1px] border-solid border-[#3D4554] w-[100%] duration-[.4s] text-[#F4C038]">

                            <div class="h-[100%] w-[max-content] flex">
                                <div
                                    class="bg-[#272E3B] h-[60px] w-[45px] rounded-[4px] flex items-center justify-center text-[#fff] text-[32px]">
                                    0</div>
                                <div
                                    class="bg-[#272E3B] ml-[4px] h-[60px] w-[45px] rounded-[4px] flex items-center justify-center text-[#fff] text-[32px]">
                                    4</div>

                                <span class="text-[#909195] text-[35px] mx-[5px]">:</span>

                                <div
                                    class="bg-[#272E3B] h-[60px] w-[45px] rounded-[4px] flex items-center justify-center text-[#fff] text-[32px]">
                                    4</div>
                                <div
                                    class="bg-[#272E3B] ml-[4px] h-[60px] w-[45px] rounded-[4px] flex items-center justify-center text-[#fff] text-[32px]">
                                    3</div>
                            </div>
                            <div class="textP ml-[24px]">
                                <p class="w-[80%] text-[14px] text-[#fff]">У вас есть 5 минут на подтверждение сделки
                                    через Steam. Если вы не успеете сделать подтверждение за это время — сделка будет
                                    отменена автоматически</p>
                            </div>

                        </div>

                        <div class="flex-col mt-[32px] h-[max-content] w-[100%]">

                            <h3 class="text-[#fff]">Предложение обмена поступит от бота <span
                                    class="text-[#F4C038]">YobaBooba</span></h3>
                            <h3 class="text-[#909195] mt-[24px]">Вы обмениваете <span class="text-[white]">3
                                    предмета</span> на сумму <span class="text-[white]">12,240.65 ₽</span></h3>

                            <div class="flex mt-[16px]">
                                <div class="h-[56px] mr-[8px] w-[56px] bg-[#272E3B] rounded-[8px] pt-[10px] px-[4px]">
                                    <img src="../static/img/ima.png" alt="">

                                </div>
                            </div>
                            <div @click="nextLvl" class="btns flex mt-[32px]">
                                <button
                                    class="flex items-center py-[14px] rounded-[48px] text-center bg-[#F4C038] px-[24px]">Подтвердить
                                    в браузере</button>

                                <button @click="nextLvl"
                                    class="flex items-center py-[14px] rounded-[48px] text-center bg-[transparent] border-[1px] border-solid border-[#F4C038] text-[#F4C038] px-[24px] ml-[24px]">Подтвердить
                                    в клиенте Steam</button>
                            </div>

                        </div>

                    </div>
                    <div class="block2 ml-[78px] pb-[48px] disabledBlock duration-[1s] after relative">
                        <h2 class="text-[24px] text-[#909195] w-[100%]">Подтвердите предложение обмена, проверив данные
                        </h2>
                        <div
                            class="time flex mt-[32px] h-[100px] border-b-[1px] border-solid border-[#3D4554] w-[100%] duration-[.4s] text-[#F4C038]">

                            <div class="h-[100%] w-[max-content] flex">
                                <div
                                    class="bg-[#272E3B] h-[60px] w-[45px] rounded-[4px] flex items-center justify-center text-[#fff] text-[32px]">
                                    0</div>
                                <div
                                    class="bg-[#272E3B] ml-[4px] h-[60px] w-[45px] rounded-[4px] flex items-center justify-center text-[#fff] text-[32px]">
                                    4</div>

                                <span class="text-[#909195] text-[35px] mx-[5px]">:</span>

                                <div
                                    class="bg-[#272E3B] h-[60px] w-[45px] rounded-[4px] flex items-center justify-center text-[#fff] text-[32px]">
                                    4</div>
                                <div
                                    class="bg-[#272E3B] ml-[4px] h-[60px] w-[45px] rounded-[4px] flex items-center justify-center text-[#fff] text-[32px]">
                                    3</div>
                            </div>
                            <div class="textP ml-[24px]">
                                <p class="w-[80%] text-[14px] text-[#fff]">У вас есть 5 минут на подтверждение сделки
                                    через Steam. Если вы не успеете сделать подтверждение за это время — сделка будет
                                    отменена автоматически</p>
                            </div>

                        </div>

                        <div class="yodo flex mt-[32px] h-[max-content]">

                            <div class="textYobo flex-col h-[100%] w-[50%]">
                                <h3 class="text-[white]">Ещё раз проверьте имя бота перед подтверждением!
                                    Его зовут <span class="text-[#F4C038]">YobaBooba</span></h3>
                                <h3 class="mt-[24px] text-[#909195]">Если вам не пришло push-уведомление
                                    о подтверждении, вы сможете найти предложение в мобильном приложении Steam
                                    в разделе «Подтверждение»</h3>
                            </div>
                            <div @click="nextLvlPush" class="ml-[23px] img">
                                <img src="../static/icons/Frame 413.png" alt="">
                            </div>

                        </div>

                    </div>

                    <div class="block4 ml-[78px] pb-[48px] bor disabledBlock duration-[1s] after relative">
                        <h2 class="text-[24px] text-[#909195]">После всех подтверждений средства поступят на ваш баланс
                            Tastygo.gg</h2>
                    </div>


                </div>


            </div>
        </div>


        <Footer />
    </div>
</template>
<!-- <div class="flex mt-[32px]">

    <div class="textYobo flex-col h-[100%] w-[50%]">
        <h3 class="text-[white]">Ещё раз проверьте имя бота перед подтверждением!
            Его зовут <span class="text-[#F4C038]">YobaBooba</span></h3>
        <h3 class="mt-[24px] text-[#909195]">Если вам не пришло push-уведомление
            о подтверждении, вы сможете найти предложение в мобильном приложении Steam
            в разделе «Подтверждение»</h3>
    </div>
    <div @click="nextLvlPush" class="ml-[23px] img">
        <img  src="../static/icons/Frame 413.png" alt="">
    </div>

</div> -->

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: { Navbar, Footer, },
    methods: {
        nextLvl() {
            event.currentTarget.parentNode.parentNode.classList.add('disabledBlock')
            event.currentTarget.parentNode.parentNode.nextSibling.classList.remove('disabledBlock')
            event.currentTarget.parentNode.parentNode.nextSibling.classList.add('text')
            console.log(event.currentTarget.parentNode);
        },
        nextLvlPush() {
            this.$router.push('/checkNext')
        },
        endLvl() {
            event.currentTarget.parentNode.parentNode.classList.add('disabledBlock')
        }
    }
}
</script>

<style>
.hiddenBtn :nth-child(3) :nth-child(3) {
    display: none !important;
}

.dashedBorder {
    border-left: 2px dashed yellow;
}

.text h2 {
    color: white !important;
    font-size: 32px;
}

.disabledBlock {
    height: 100px;
}

.disabledBlock h2 {
    color: #909195 !important;
    /* background: #000 !important; */
    font-size: 24px !important;
}

.disabledBlock div {
    opacity: 0;
}

.disabledBlock div button {
    background-color: red !important;
}

.disabledBlock::after {
    color: #F4C038 !important;
    border: 1px solid #F4C038 !important;
    background-color: #20222A !important;

}


.after::after {
    content: '1';
    position: absolute;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 40px;
    background: yellow;
    left: -7%;
    transform: translateX(-50%);
    top: 0;
    border-radius: 14px 14px 14px 14px;
}

.after:last-child::after {
    content: '4';
}

.after:nth-child(2):after {
    content: '2';
}

.after:nth-child(3):after {
    content: '3';
}
</style>