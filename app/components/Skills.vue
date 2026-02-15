<template>
    <section ref="skills" id="skills" class="relative w-full py-24 bg-slate-950 text-white">
        <div class="skills container mx-auto px-6 md:px-12 relative z-10">
            <h2 class="text-center text-4xl md:text-5xl font-bold mb-16 tracking-wider">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Skills
                </span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div v-for="(skill, index) in skillList" :key="index"
                    class="group relative bg-slate-900/80 border border-white/10 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/20">
                    <h3 class="text-xl font-bold mb-2 text-blue-200 group-hover:text-blue-400 transition-colors">
                        {{ skill.category }}
                    </h3>

                    <p class="text-sm text-slate-400 mb-6 min-h-[2.5em]">
                        {{ skill.description }}
                    </p>

                    <div class="flex flex-wrap gap-2">
                        <span v-for="item in skill.items" :key="item"
                            class="px-3 py-1 text-xs font-mono bg-slate-800 border border-slate-700 rounded-full text-slate-300 group-hover:border-blue-500/50 group-hover:text-white transition-colors">
                            {{ item }}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useGsapFromTo, SKILLS_OPTIONS, SKILLS_OPTIONS2 } from '#imports';

const skills = ref()
const skillList = [
    {
        category: "Languages & Core",
        description: "堅牢な型定義と効率的なマークアップ",
        items: ["TypeScript", "JavaScript (ES6+)", "HTML5 / Pug / EJS", "CSS3 / Sass (SCSS)"]
    },
    {
        category: "Frameworks & Libraries",
        description: "モダンなエコシステムと状態管理",
        items: ["Nuxt.js", "Vue.js", "Vuetify", "Tailwind CSS", "Pinia", "LIFF"]
    },
    {
        category: "API & Data Architecture", // ← 名前からして「設計できます」感！
        description: "型安全な通信と効率的なデータ取得", // TypeScriptとの相性をアピール
        items: ["REST API", "GraphQL", "Apollo Client", "Axios / Fetch API", "Swagger (OpenAPI)"]
    },
    {
        category: "Infrastructure & CMS",
        description: "ヘッドレスからエンタープライズCMSまで",
        items: ["Firebase", "Netlify", "Vercel", "WordPress", "Adobe AEM", "MovableType", "Sentry"]
    },
    {
        category: "Tools & Workflow",
        description: "高速な開発環境とタスク自動化",
        items: ["Git (GitHub / GitLab)", "pnpm", "Bun", "Gulp", "VS Code"]
    },
    {
        category: "Communication & Management",
        description: "リモート環境下でもスムーズな意思疎通と進捗管理",
        items: ["Slack", "Teams", "Chatwork", "Backlog", "Notion", "Zoom", "Obsidian"]
    },
    {
        category: "Design & Creative",
        description: "デザイン制作やUI設計",
        items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "CLIP STUDIO PAINT"]
    },
    {
        category: "3D & Interactive (Hobby)",
        description: "没入感のある表現を追求（学習中・趣味）",
        items: ["Blender (Learning)", "Unity (Learning)", "React / Next.js (Learning)", "Premiere Pro (Learning)"]
    }
]
onMounted(async () => {
    const isReady = await waitForElement(skills.value)
    if (isReady) {
        useGsapFromTo({ target: skills.value, options: SKILLS_OPTIONS, options2: SKILLS_OPTIONS2 })
    }
})
</script>