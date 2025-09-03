(function setupAtCoderInputDownloader() {
    const sampleInputs = Array.from(document.querySelectorAll("pre[id^='pre-sample']"))
        .filter((pre) => {
            const num = Number(pre.id.replace("pre-sample", ""));
            return !isNaN(num) && num % 2 == 0;
        })
        .map((pre) => pre.textContent);

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
