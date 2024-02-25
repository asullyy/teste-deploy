class MobileNavbar{
    constructor(iconeMenu, itensMenu, menuLinks){
        this.iconeMenu = document.querySelector(iconeMenu);
        this.itensMenu = document.querySelector(itensMenu);
        this.menuLinks = document.querySelectorAll(menuLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.iconeMenu.addEventListener("click", () => console.log("Hey"));
    }

    init(){
        if (this.iconeMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const itensMenu = new itensMenu(
    ".icone-menu",
    ".itens-menu",
    ".itens-menu li",
);