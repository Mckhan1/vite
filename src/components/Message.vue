<template>
    <div>
        <div class="shadow fixed w-[653px] h-[270px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
         bg-[#20222A] flex py-[30px] px-[40px] items-start justify-center">
            <img v-if="status == 'true'" class="h-[70px] w-[70px]" src="../static/icons/Group 4.svg" alt="">
            <img v-if="status == 'false'" class="h-[70px] w-[70px]" src="../static/icons/Group 5.svg" alt="">
            <div class="flex-column ml-[50px] items-center justify-center">
                <h2 class="text-[white] mb-[20px] text-[30px] ">Заявка на подключение отправлена</h2>
                <button @click="this.$router.push('/')" v-if="status == 'true'" class="bg-[#F4C038] rounded-[48px] text-[#20222A] h-[48px] w-[391px] mb-[11px]">окейшен</button>
                <button v-if="status == 'false'" class="bg-[#F4C038] rounded-[48px] text-[#20222A] h-[48px] w-[391px] mb-[11px]">вернуться на
                    главный экран</button>
                <button v-if="status == 'false'" class="bg-[#F4C038] rounded-[48px] text-[#20222A] h-[48px] w-[391px] mb-[11px]">попробовать
                    заново</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: { type: String, required: true },
    status: { type: Boolean, required: true },
});
</script>

<script>
export default {

}
</script>

<style>
.shadow {
    border-radius: 8px;
    box-shadow: 0px 10px 10px #5d687b !important;

}
</style>