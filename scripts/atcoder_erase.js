(async () => {
    const src = chrome.runtime.getURL("/src/atcoder_erase_main.js");
    const contentMain = await import(src);
    contentMain.main();
})();
