import eraseTemplateCode from "/src/erase_utility.js";

export function main() {
    const $textArea = document.querySelector("#id_source_mirrorized textarea");

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
