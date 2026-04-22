<script lang="ts">
	import telegramIcon from '$lib/assets/telegram.svg';
	import plusIcon from '$lib/assets/plus-icon.svg';
	import { faqItems } from '$lib/content/faq';

	let openIndex: number | null = null;
</script>

<section id="faq" class="relative w-full overflow-hidden bg-transparent section-pad lg:px-6">
	<!-- Header -->
	<div class="mx-auto mb-9 flex w-[min(480px,calc(100vw-48px))] max-[380px]:w-[calc(100vw-32px)] max-w-[1149px] flex-col items-center gap-3 text-center lg:mb-16 lg:w-auto lg:gap-4">
		<h2 class="section-title text-gradient-dark">Поширені запитання</h2>
		<p class="section-subtitle max-w-[781px] px-1">
			Основні запитання та принципи, які дадуть вам відповіді на поширені запитання
		</p>
	</div>

	<!-- FAQ accordion -->
  <div class="mx-auto mb-10 flex w-[min(480px,calc(100vw-48px))] max-[380px]:w-[calc(100vw-32px)] max-w-[720px] flex-col gap-3 lg:mb-12 lg:w-full lg:max-w-[1275px] lg:gap-3">
    {#each faqItems as faq, i}
      <div class="overflow-hidden rounded-[24px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.045)] ring-1 ring-[rgba(0,0,0,0.05)] lg:shadow-[0_2.8px_2.8px_0_rgba(0,0,0,0.05)] lg:ring-0">
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 px-5 py-[1.125rem] text-left sm:px-5 sm:py-5 lg:gap-5 lg:p-6"
          onclick={() => (openIndex = openIndex === i ? null : i)}
        >
          <span class="flex min-w-0 flex-1 items-start gap-2 text-left text-[16px] leading-[1.4] font-bold tracking-[-0.015em] text-[#1d1d1d] sm:text-[17px] lg:text-[24px] lg:font-medium lg:leading-[1.22] lg:tracking-[-0.96px]">
            <span class="shrink-0">{i + 1}.</span>
            <span>{faq.q}</span>
          </span>

          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1d1d1d] transition-transform lg:h-14 lg:w-14"
            class:rotate-45={openIndex === i}
          >
            <img src={plusIcon} alt="" class="h-5 w-5 lg:h-6 lg:w-6" decoding="async" />
          </div>
        </button>

        {#if openIndex === i}
          <div class="border-t border-[#e5e5e5] px-5 pb-6 lg:border-[rgba(16,16,16,0.1)] lg:px-6">
            <p class="pt-4 text-left text-[15px] leading-[1.6] font-normal text-[#555] antialiased whitespace-pre-line lg:pt-5 lg:text-[18px] lg:font-medium lg:leading-[1.28] lg:text-[#616161]">
              {@html faq.a}
            </p>
          </div>
        {/if}
      </div>
    {/each}
  </div>

	<!-- CTA card -->
  <div
    id="contact"
    class="mx-auto flex w-[min(480px,calc(100vw-48px))] max-[380px]:w-[calc(100vw-32px)] max-w-[1280px] flex-col items-center gap-6 rounded-[28px] bg-white p-5 text-center shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]
    sm:p-6 lg:w-full lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-8 lg:rounded-[36px] lg:px-7 lg:py-5 lg:text-left"
  >
    <p class="max-w-[723px] text-[28px] leading-[1.2] font-medium tracking-[-0.04em]
    sm:text-[34px] md:text-[40px] lg:max-w-[900px] lg:flex-1 lg:text-[48px] lg:leading-[1.1] lg:tracking-[-0.04em]"
    style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <span class="text-[#4f4f4f]">
        Залиш свій запит — менеджер
      </span>
      <br class="hidden lg:block" />
      <span class="text-[#4f4f4f]">
        чекає на твоє
      </span>

      <span
        class="text-[32px] leading-[1.2] tracking-[-0.04em] font-playfair font-bold italic lg:text-[48px] lg:leading-[1.1]"
        style="font-family: 'Playfair Display', serif; background: linear-gradient(180deg, #2b83ff 0%, #0450fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
      >
        повідомлення
      </span>
    </p>

    <a
      href="https://t.me/sharksschool"
      target="_blank"
      rel="noopener noreferrer"
      class="flex h-[56px] w-full items-center justify-center gap-3 rounded-[16px] border-t-[3px] border-white/40 px-6 text-[16px] font-medium text-white transition-opacity hover:opacity-90
      sm:h-[64px] sm:text-[18px]
      lg:h-[73px] lg:w-[386px] lg:shrink-0 lg:gap-4 lg:rounded-[20px] lg:px-9 lg:text-[22px]"
      style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
    >
      <img src={telegramIcon} alt="" class="h-5 w-5 lg:h-6 lg:w-6" decoding="async" />
      Написати менеджеру
    </a>
  </div>

</section>