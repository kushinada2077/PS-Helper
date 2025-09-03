(function setupAlgospotInputDownloader() {
    const sampleInputs = document.querySelector("section.problem_sample_input pre").textContent;

    const handleKeyDown = async (e) => {
        const key = Number(e.key);

        if (e.key && Number.isInteger(key)) {
            const data = sampleInputs;
            const fileBlob = new Blob([data], { type: "text/plain" });
            const fileUrl = URL.createObjectURL(fileBlob);

            await chrome.runtime.sendMessage({ fileUrl });
        }
    };

    document.addEventListener("keydown", handleKeyDown);
})();
