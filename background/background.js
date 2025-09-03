const DEFAULT_DOWNLOAD_PATH = "PS/input.txt";

function downloadTxtFile(fileUrl, filename = DEFAULT_DOWNLOAD_PATH) {
    const fileOptions = {
        url: fileUrl,
        filename: filename,
        conflictAction: "overwrite",
    };

    chrome.downloads.download(fileOptions, () => {
        if (chrome.runtime.lastError) {
            console.error("Download failed:", chrome.runtime.lastError.message);
        }
    });
}

chrome.runtime.onMessage.addListener((req) => {
    if (req.fileUrl) {
        downloadTxtFile(req.fileUrl);
    }
});
