import eraseTemplateCode from "/src/erase_utility.js";

export function main() {
    const $textArea = document.querySelector(".CodeMirror textarea");

    if ($textArea) {
        $textArea.addEventListener(
            "paste",
            (e) => {
                e.preventDefault();
                e.stopPropagation();

                const originalCode = e.clipboardData.getData("text");
                $textArea.value = eraseTemplateCode(originalCode);
            },
            true
        );
    }
}
