(async () => {
    const src = chrome.runtime.getURL("/src/codeforces_erase_main.js");
    const contentMain = await import(src);
    contentMain.main();
})();
