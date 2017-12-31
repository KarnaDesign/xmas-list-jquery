import $ from "jquery";
import {
    handleClick,
    handleAddWishItem
} from "./actionHandler";

$("#createButton").on("click", handleClick);

$(".wishlistItem").on("keydown", handleAddWishItem);