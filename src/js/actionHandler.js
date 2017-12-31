import $ from "jquery";

export function handleClick() {
    const name = $("#inputName").val();
    $("#outputName").text(name);
    $(".wishlistCreator").slideDown();
    $(".listCreator").slideUp();
}