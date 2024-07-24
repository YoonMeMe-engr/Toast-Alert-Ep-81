const buttonTag = document.querySelector(".btn");
const parentTag = document.querySelector(".parent");

const openToastAlert = () => {
    parentTag.innerHTML = "";
    const toastAlertTag = document.createElement("div");
    toastAlertTag.append("Your file was successfully uploaded");
    parentTag.append(toastAlertTag);
    toastAlertTag.classList.add("toastAlert");
    toastAlertTag.style.bottom = `-${toastAlertTag.offsetHeight}px`;
    setTimeout(() => {
        toastAlertTag.style.bottom = `0px`;
    }, 100); // 100 ဆိုတာ 1s ရဲ့ 10 ပုံ 1ပုံ
    setTimeout(() => {
        toastAlertTag.style.bottom = `-${toastAlertTag.offsetHeight}px`;
    }, 2000);
};

buttonTag.addEventListener("click", () => {
    openToastAlert();
});