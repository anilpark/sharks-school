<script lang="ts">
	import telegramIcon from '$lib/assets/telegram.svg';
	import sharkLogo from '$lib/assets/uniqueShark.svg';
	import {
		formatOptions,
		languageOptions,
		pricingContent,
		type Format,
		type Language
	} from '$lib/content/pricing';

	let selectedLanguage = $state<Language>('english');
	let selectedFormat = $state<Format>('individual');

	let currentBlock = $derived(pricingContent[selectedLanguage][selectedFormat]);
	let plans = $derived(currentBlock.plans);
	let customRequest = $derived(currentBlock.customRequest);
</script>

<section
  id="pricing"
  class="w-full bg-[#f5f5f5] py-10 xl:bg-transparent xl:px-8 xl:py-20"
>
  <div class="pricing-content-column mx-auto w-full max-w-[min(480px,calc(100vw-48px))] max-[380px]:max-w-[calc(100vw-32px)] xl:max-w-[1440px]">
    
    <div class="mb-6 flex flex-col items-center gap-3 xl:mb-10 xl:gap-4">
      <h2 class="section-title w-full max-w-full px-1 text-center text-balance text-[#1d1d1d] max-xl:!text-[clamp(36px,6.2vw,32px)] max-xl:!leading-[1.08] max-xl:!tracking-[-0.035em] xl:max-w-[1066px] xl:text-gradient-dark">
        Тарифи для кожного, обери свій
      </h2>
      <p class="section-subtitle w-full max-w-full px-0.5 text-center sm:max-w-[520px] xl:max-w-[760px]">
        Оберіть нижче мову та тип занять з простим ціноутворенням для своїх цілей
      </p>

      <div class="mt-2 flex w-full flex-col items-stretch gap-3 xl:mt-4 xl:flex-row xl:flex-wrap xl:justify-center xl:gap-3">
        <div class="flex w-full gap-1 rounded-full bg-[#e0e0e0] p-1.5 xl:w-auto xl:justify-center xl:gap-2 xl:rounded-[24px] xl:bg-[#e9e9e9] xl:p-2">
          {#each languageOptions as option}
            <button
              type="button"
              class="min-h-[44px] flex-1 rounded-full px-4 py-2.5 text-[15px] max-[380px]:px-2 max-[380px]:text-[13px] transition-all xl:flex-none xl:rounded-[68px] xl:px-10 xl:text-[24px] 
              {selectedLanguage === option.value ? 'bg-white font-medium shadow-md' : 'bg-transparent'}"
              onclick={() => (selectedLanguage = option.value)}
            >
              {option.label}
            </button>
          {/each}
        </div>

        <div class="flex w-full gap-1 rounded-full bg-[#e0e0e0] p-1.5 xl:w-auto xl:justify-center xl:gap-2 xl:rounded-[24px] xl:bg-[#e9e9e9] xl:p-2">
          {#each formatOptions as option}
            <button
              type="button"
              class="min-h-[44px] flex-1 rounded-full px-2.5 py-2.5 text-[12px] leading-tight max-[380px]:px-1.5 max-[380px]:text-[11px] transition-all xl:flex-none xl:rounded-[68px] xl:px-10 xl:text-[24px] {selectedFormat === option.value ? 'bg-white font-medium shadow-md' : 'bg-transparent'}"
              onclick={() => (selectedFormat = option.value)}
            >
              {option.label}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5 xl:gap-7">
      <div
        class="pricing-plans-scroller scrollbar-hide relative left-1/2 flex w-screen max-w-[100vw] -translate-x-1/2 snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-4 pl-6 max-[380px]:pl-4 scroll-pl-6 max-[380px]:scroll-pl-4 xl:static xl:left-auto xl:w-full xl:max-w-none xl:translate-x-0 xl:grid xl:grid-cols-4 xl:justify-items-center xl:gap-4 xl:overflow-visible xl:pb-0 xl:snap-none"
      >
        {#each plans as plan, i (i)}
          <div
            class="pricing-plan-slide relative flex w-[min(300px,calc(100%-3.25rem))] shrink-0 snap-start flex-col justify-between rounded-[32px] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.055)] xl:h-[340px] xl:w-[338px] xl:rounded-[32px] xl:px-[14px] xl:pt-[22px] xl:pb-[14px]"
            style={plan.highlight ? 'background: linear-gradient(to bottom, #fde1e4 0%, white 40%)' : ''}
          >
            {#if plan.popular}
              <div class="absolute top-2 right-4 z-10 xl:-top-3 xl:left-[68%] xl:right-auto xl:-translate-x-1/2">
                <span
                  class="block text-[34px] leading-none whitespace-nowrap text-[#ef6a78] xl:text-[62px]"
                  style="font-family: 'Caveat', cursive; transform: rotate(5deg);"
                >
                  Популярно
                </span>
              </div>
            {/if}

            <div class="flex flex-col gap-4 lg:gap-2">
              <h3 class="text-[21px] font-bold text-black xl:text-[20px] xl:font-medium xl:leading-[1.15] xl:tracking-[-0.02em]">{plan.title}</h3>
              <div class="flex items-end gap-1">
                <span class="text-[52px] font-bold tracking-tight text-black xl:text-[44px] xl:font-medium xl:leading-[1.1] xl:tracking-[-0.025em]">{plan.price}</span>
                <span class="mb-1.5 text-[15px] font-bold text-black xl:text-[19px] xl:font-medium xl:leading-[1.1] xl:tracking-[-0.02em]">грн</span>
              </div>
              {#if plan.perLesson}
                <p class="text-[13px] leading-[1.25] font-medium italic text-[#5b5b5b] xl:text-[15px] xl:leading-[1.2]">
                  {plan.perLesson}
                </p>
              {/if}
              <div class="h-[1px] w-full bg-[#d9d9d9] [clip-path:polygon(0%_50%,5%_0%,95%_0%,100%_50%,95%_100%,5%_100%)]"></div>
              <p class="text-[15px] italic text-[#5c5c5c] xl:text-[18px] xl:leading-[1.2] xl:font-normal xl:italic">{plan.description}</p>
            </div>
            <button class="mt-8 h-[54px] w-full rounded-2xl border-t-[3px] border-white/40 text-[15px] font-bold text-white xl:mt-6 xl:h-[64px] xl:w-full xl:rounded-[18px] xl:px-6 xl:py-4 xl:text-[18px]" style="background: linear-gradient(180deg, #3b7cff 0%, #2568f6 45%, #1f5ae6 100%)">
              {plan.cta}
            </button>
          </div>
        {/each}
        <div class="w-2 shrink-0 xl:hidden"></div>
      </div>

      <div
        class="mx-auto flex w-full flex-col gap-6 rounded-[28px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] xl:max-w-[1070px] xl:rounded-[48px] xl:p-10 xl:flex-row xl:items-center xl:justify-between"
        style="background: linear-gradient(to bottom right, white, #def0ff)"
      >
        <div class="flex flex-col gap-4 xl:gap-6 xl:items-start">
          <div class="flex  items-center gap-4 xl:flex-row xl:items-center">
            <div class="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-[14px] bg-[#d1e9ff] xl:h-[72px] xl:w-[72px] xl:rounded-[18px]">
              <img
                src={sharkLogo}
                alt=""
                class="absolute"
                style="width: 135%; height: auto; top: -8%; left: -18%;"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h3
              class="text-center text-[28px] leading-[1.1] font-bold xl:text-left xl:text-[40px] 2xl:text-[48px]"
              style="background: linear-gradient(to bottom, #37a2ff 0%, #0450fb 80%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text"
            >
              {customRequest.title}
            </h3>
          </div>

          <p class="text-center text-[15px] leading-[1.4] font-medium text-[#515151] xl:text-left xl:text-[18px] xl:max-w-[700px]">
             {customRequest.description}
          </p>
        </div>

        <a
          href="#contact"
          class="flex h-[58px] w-full shrink-0 items-center justify-center gap-3 rounded-[18px] border-t-[3px] border-white/40 px-6 text-[16px] font-bold text-white transition-all hover:brightness-110 active:scale-[0.98] sm:w-auto xl:h-[72px] xl:rounded-[20px] xl:px-10 xl:text-[18px] shadow-[0_8px_20px_rgba(4,80,251,0.15)]"
          style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
        >
          <img src={telegramIcon} alt="" class="h-6 w-6 xl:h-7 xl:w-7" decoding="async" />
          {customRequest.cta}
        </a>
      </div>
    </div>
  </div>
</section>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
