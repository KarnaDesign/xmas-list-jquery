import $ from "jquery";
import {
    suffixName
} from "./suffixName";

export function handleClick() {
    const name = $("#inputName").val();
    const suffixedName = suffixName(name);
    $("#outputName").text(suffixedName);
    $(".wishlistCreator").slideDown();
    $(".listCreator").slideUp();
}

export function handleAddWishItem(e) {
    if (e.keyCode === 13) {
        const wish = $(".wishlistItem").val();
        const trashSpan = $("<span></span>").addClass("fa fa-trash");
        const wishSpan = $("<span></span>").text(wish);
        const li = $("<li></li>")
            .append(wishSpan)
            .append(trashSpan)
            .appendTo("#wishlist");

        trashSpan.on("click", () => {
            li.remove();
        });

        $(".input").appendTo("#wishlist");
        $(".wishlistItem")
            .val("")
            .focus();

    }
}