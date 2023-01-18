<script>
export default {
    name: 'Footer',
}
</script>

<template>
    <footer class="footer h-[max-content] w-[100%] bg-[#20222A] flex border-t-[1px] border-solid border-[#272E3B]">
        <div class="footer__wrapper h-[100%] w-[85%] mt-[10px] mb-[10px] m-auto flex items-center justify-between">
            <span class="text-[14px] text-[#909195] ">Copyright © Skincash.ru</span>
            <div class="footer__text flex items-center justify-center ">
                <li class="list-none text-[14px] text-[#909195] "><a href="#">Помощь</a></li>
                <li class="list-none text-[14px] text-[#909195] ml-[32px]"><a href="">Контакты</a></li>
                <li class="list-none text-[14px] text-[#909195] ml-[32px]"><a href="">Пользовательское соглашение</a></li>
            </div>
        </div>
    </footer>
</template>