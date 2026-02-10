const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper flex items-center justify-center">
      <video
        style={{ width: "50%" }}
        data-testid="videoBackground"
        aria-hidden="true"
        tabIndex={-1}
        preload="metadata"
        playsInline
        autoPlay
        muted
        loop
      >
        <source
          src="https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13LH8-4x5.mp4"
          type="video/mp4"
        />
        <source
          src="https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13LH8-2x3.mp4"
          type="video/mp4"
        />
      </video>
      <picture className="b9b55e" style={{ width: "50%" }}>
        {/* <img media="(max-width: 767px)" srcset="https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-2x3-Startpage-wk03.jpg?imwidth=320 320w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-2x3-Startpage-wk03.jpg?imwidth=425 425w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-2x3-Startpage-wk03.jpg?imwidth=640 640w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-2x3-Startpage-wk03.jpg?imwidth=768 768w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-2x3-Startpage-wk03.jpg?imwidth=1024 1024w" sizes="100vw" /> */}
        {/* <img media="(min-width: 767.1px)" srcset="https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=1024 1024w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=1150 1150w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=1366 1366w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=1430 1430w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=1660 1660w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=1870 1870w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=1920 1920w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=2048 2048w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=2560 2560w, https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=4800 4800w" sizes="(min-width: 767.1px) 50vw, 100vw" /> */}
        <img
          loading="lazy"
          alt=" "
          class="d1e110 e5ac9a"
          fetchpriority="auto"
          src="https://image.hm.com/content/dam/global_campaigns/season_03/men/start-page-assets/wk03/MS13E5-4x5-Startpage-wk03.jpg?imwidth=4800"
        />
      </picture>
    </div>
  );
};

export default HeroBanner;
