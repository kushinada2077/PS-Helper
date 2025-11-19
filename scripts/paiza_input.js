(function setupAtCoderInputDownloader() {
    const sampleInputs = Array.from(document.querySelectorAll(".sample-container > .sample-content"))
        .filter((div) => div.querySelector(".sample-content__title").textContent.startsWith("入力"))
        .map((elem) => elem.querySelector("code").textContent);

    const handleKeyDown = async (e) => {
        const key = Number(e.key);

        if (e.key && Number.isInteger(key) && sampleInputs[key - 1]) {
            const data = sampleInputs[key - 1];
            const fileBlob = new Blob([data], { type: "text/plain" });
            const fileUrl = URL.createObjectURL(fileBlob);

            await chrome.runtime.sendMessage({ fileUrl });
        }
    };

    document.addEventListener("keydown", handleKeyDown);
})();
