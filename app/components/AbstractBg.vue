<template>
    <div class="fixed inset-0 w-full h-full overflow-hidden bg-slate-900 -z-10">
        <div
            class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob">
        </div>
        <div
            class="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000">
        </div>
        <div
            class="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000">
        </div>
        <div
            class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.1]">
        </div>
    </div>
</template>
<script setup lang="ts"></script>