const btnOpen = document.querySelector("#openmodal");
const overlayBg = document.querySelector(".overlay__wrapper");
const modalOverlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close");
const openSearch = document.querySelector("#search__btn");
const submitSearch = document.querySelector(".modal__submit");
const modalSearch = document.querySelector(".modal__wrap");
const modalCheck = document.querySelector(".modal__checkbox");
openSearch.addEventListener("click", ()=>{
    modalSearch.classList.remove("modal__wrap");
    modalSearch.classList.add("modal__wrap_active");
});
submitSearch.addEventListener("click", ()=>{
    modalSearch.classList.remove("modal__wrap_active");
    modalSearch.classList.add("modal__wrap");
});
modalCheck.addEventListener("click", (e)=>{
    if (e.target != e.currentTarget) return;
    modalCheck.classList.toggle("modal__checkbox_active");
});
function openModalOverlay() {
    modalOverlay.classList.remove("hidden_overlay");
    overlayBg.classList.remove("hidden_overlay");
}
btnOpen && btnOpen.addEventListener("click", openModalOverlay);
btnClose.addEventListener("click", ()=>{
    modalOverlay.classList.add("hidden_overlay");
    overlayBg.classList.add("hidden_overlay");
});

//# sourceMappingURL=index.f67df751.js.map
