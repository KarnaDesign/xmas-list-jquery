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

}