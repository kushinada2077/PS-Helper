(async () => {
    const src = chrome.runtime.getURL("/src/boj_erase_main.js");
    const contentMain = await import(src);
    contentMain.main();
})();
