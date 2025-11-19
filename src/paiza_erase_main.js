import erase_my_info from "/src/erase_utility.js";

export function main() {
    const $text_area = document.querySelector("#editor-div > textarea");
    console.log("hi");
    $text_area.addEventListener(
        "paste",
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            $text_area.value = erase_my_info(e.clipboardData.getData("text"));
            const inputE = new Event("input", {
                bubbles: true,
                cancelable: true,
            });
            $text_area.dispatchEvent(inputE);
        },
        true
    );
}
