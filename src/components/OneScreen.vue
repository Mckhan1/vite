<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
export default {
    name: 'OneScreen',
    components:{
        Navbar,
        Footer
    }

}
</script>

<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="wrapper h-[100%] z-[1] w-[85%] m-auto flex-column py-[120px]">
                <h1 class="text-[56px] leading-[4rem]  w-[55%] text-[#fff] font-bold mb-[40px]">Принимайте платежи
                    от пользователей
                    с помощью скинов CS:GO и DOTA 2</h1>
                <router-link to="/connection">
                    <button
                        class="h-[64px] w-[240px] bg-[#F4C038] rounded-[48px] text-[#20222A] font-medium py-[22px] px-[40px]">Подключить
                        проект</button>
                </router-link>
            </div>
        </div>
        <Footer />

    </div>
</template>

<style>
.container {
    background: #000;
    height: 780px;
    min-width: 100%;
    margin-top: 72px;
    background-image: url('../static/img/hot skins test shot 11.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>