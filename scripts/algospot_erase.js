(async () => {
    const src = chrome.runtime.getURL("/src/algospot_erase_main.js");
    const contentMain = await import(src);
    contentMain.main();
})();
