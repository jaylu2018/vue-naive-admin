<template>
  <main class="h-full flex-1 overflow-hidden bg-#f5f6fb dark:bg-#121212">
    <div class="h-full flex-col">
      <AppCard
        v-if="showHeader"
        class="sticky top-0 z-1 min-h-60 flex items-center justify-between px-24"
        border-b="1px solid light_border dark:dark_border"
      >
        <slot v-if="$slots.header" name="header" />
        <template v-else>
          <div class="flex items-center">
            <slot v-if="$slots['title-prefix']" name="title-prefix" />
            <template v-else-if="back">
              <div
                class="mr-16 flex cursor-pointer items-center text-16 opacity-60 transition-all-300 hover:opacity-40"
                @click="router.back()"
              >
                <i class="i-material-symbols:arrow-left-alt" />
                <span class="ml-4">返回</span>
              </div>
            </template>
            <div class="mr-12 h-16 w-4 rounded-l-2 bg-primary" />
            <h2 class="font-normal">
              {{ title ?? route.meta?.title }}
            </h2>
            <slot name="title-suffix" />
          </div>
          <slot name="action" />
        </template>
      </AppCard>
      <transition name="fade-slide" mode="out-in" appear>
        <AppCard class="cus-scroll m-12 h-0 flex-1 rounded-8 p-24" bordered>
          <slot />
        </AppCard>
      </transition>
    </div>
  </main>

  <footer class="bg-#f5f6fb dark:bg-#121212">
    <slot v-if="$slots.footer" name="footer" />
    <AppCard v-else-if="showFooter" class="py-12">
      <TheFooter />
    </AppCard>
  </footer>
</template>

<script setup>
import { AppCard, TheFooter } from '@/components/index.js'

defineProps({
  back: {
    type: Boolean,
    default: false,
  },
  showFooter: {
    type: Boolean,
    default: false,
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: undefined,
  },
})
const route = useRoute()
const router = useRouter()
</script>
