(function setupBojInputDownloader() {
    const sampleInputs = Array.from(document.querySelectorAll("pre[id^='sample-input-']")).map(
        (pre) => pre.textContent
    );

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
