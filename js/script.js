//Filters
const Burger = document.getElementById('burger');
const Combos = document.getElementById('combos');
const Kid = document.getElementById('kid');
const Drink = document.getElementById('drink');
const AllProducts = document.getElementById('allProducts');
const SearchSelect = document.getElementById('searchSelect');
const SearchBurgerText = document.getElementById('searchBurgerText');


//Products
const TexasBurger = document.getElementById('TexasBurger');
const EarthyBite = document.getElementById('EarthyBite');
const SmokyGrill = document.getElementById('SmokyGrill');
const SpicyBliss = document.getElementById('SpicyBliss');
const CocaCola = document.getElementById('cocaCola');
const Guarana = document.getElementById('guarana');
const CocaColaZero = document.getElementById('cocaZero');
const Pepsi = document.getElementById('pepsi');
const Agua = document.getElementById('agua');
const ComboBurgerA = document.getElementById('comboA');
const ComboBurgerB = document.getElementById('comboB');
const TexasKid = document.getElementById('texasKid');
const SpaceKid = document.getElementById('spaceKid');

//Filtro de Hamburguer Normal
function filterDrewBurgerNormal() {
    CocaCola.style.display = "none";
    Guarana.style.display = "none";
    CocaColaZero.style.display = "none";
    Pepsi.style.display = "none";
    Agua.style.display = "none";
    TexasKid.style.display = "none";
    SpaceKid.style.display = "none";
    ComboBurgerA.style.display = "none";
    ComboBurgerB.style.display = "none";
}

//Filtro de Hamburguer Kid
function filterDrewBurgerKids() {
    TexasBurger.style.display = "none";
    EarthyBite.style.display = "none";
    SmokyGrill.style.display = "none";
    SpicyBliss.style.display = "none";
    CocaCola.style.display = "none";
    Guarana.style.display = "none";
    CocaColaZero.style.display = "none";
    Pepsi.style.display = "none";
    Agua.style.display = "none";
    ComboBurgerA.style.display = "none";
    ComboBurgerB.style.display = "none";

}

//Filtro de Bebidas
function filterDrewBurgerDrinks() {
    TexasBurger.style.display = "none";
    EarthyBite.style.display = "none";
    SmokyGrill.style.display = "none";
    SpicyBliss.style.display = "none";
    TexasKid.style.display = "none";
    SpaceKid.style.display = "none";
    ComboBurgerA.style.display = "none";
    ComboBurgerB.style.display = "none";
}

//Filtro de Combos
function filterDrewBurgerCombos() {
        TexasBurger.style.display = "none";
        EarthyBite.style.display = "none";
        SmokyGrill.style.display = "none";
        SpicyBliss.style.display = "none";
        CocaCola.style.display = "none";
        Guarana.style.display = "none";
        CocaColaZero.style.display = "none";
        Pepsi.style.display = "none";
        Agua.style.display = "none";
        TexasKid.style.display = "none";
        SpaceKid.style.display = "none";
}

//Filtro de todos os produtos
function filterAllProducts(){
    
    TexasBurger.style.display = "block";
    EarthyBite.style.display = "block";
    SmokyGrill.style.display = "block";
    SpicyBliss.style.display = "block";
    CocaCola.style.display = "block";
    Guarana.style.display = "block";
    CocaColaZero.style.display = "block";
    Pepsi.style.display = "block";
    Agua.style.display = "block";
    TexasKid.style.display = "block";
    SpaceKid.style.display = "block";
    ComboBurgerA.style.display = "block";
    ComboBurgerB.style.display = "block";
}


//Função que filtra
function SearchSelectFilter() {

    filterAllProducts(); 

    switch(SearchSelect.value){
        case Combos.value:
            filterDrewBurgerCombos();
            break;
        case Drink.value:
            filterDrewBurgerDrinks();
            break;
        case Burger.value:
            filterDrewBurgerNormal();
            break;
        case Kid.value:
            filterDrewBurgerKids();
            break;
    }

}

//Evento que faz a função de filtro funcionar
SearchSelect.addEventListener('change', function(){
    SearchSelectFilter(SearchSelect.value);
}
)

// Filtro por pesquisa de nome
function filterSearchNameProduct(){

    resetFilterSearchNameProduct();

    const searchValue = SearchBurgerText.value.toLowerCase();

    if(searchValue) {
        filterProductSearchName(TexasBurger, searchValue);
        filterProductSearchName(EarthyBite, searchValue);
        filterProductSearchName(SmokyGrill, searchValue);
        filterProductSearchName(SpicyBliss, searchValue);
        filterProductSearchName(CocaCola, searchValue);
        filterProductSearchName(Guarana, searchValue);
        filterProductSearchName(CocaColaZero, searchValue);
        filterProductSearchName(Pepsi, searchValue);
        filterProductSearchName(Agua, searchValue);
        filterProductSearchName(TexasKid, searchValue);
        filterProductSearchName(SpaceKid, searchValue);
        filterProductSearchName(ComboBurgerA, searchValue);
        filterProductSearchName(ComboBurgerB, searchValue);
    }


}

// Função que vai reconhecendo o produto para fazer aparecer ou sumir
function filterProductSearchName(product, searchValue) {
    if(product.textContent.toLowerCase().includes(searchValue)){
        product.style.display = "block";
    } else {
        product.style.display = "none";
    }
}

// Função que deixa todos os produtos visiveis
function resetFilterSearchNameProduct(){
    TexasBurger.style.display = "block";
        EarthyBite.style.display = "block";
        SmokyGrill.style.display = "block";
        SpicyBliss.style.display = "block";
        CocaCola.style.display = "block";
        Guarana.style.display = "block";
        CocaColaZero.style.display = "block";
        Pepsi.style.display = "block";
        Agua.style.display = "block";
        TexasKid.style.display = "block";
        SpaceKid.style.display = "block";
        ComboBurgerA.style.display = "block";
        ComboBurgerB.style.display = "block";
}

// Evento que faz o filtro por pesquisa funcionar
SearchBurgerText.addEventListener('input', filterSearchNameProduct);





