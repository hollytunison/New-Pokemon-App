let pokemonRepository = (function() {
    let pokemonList = [{
            name: "Gengar",
            type: ["fighting", "ghost"],
            height: 1.5
        },
        {
            name: "Hypno",
            type: ["psychic"],
            height: 1.6
        },
        {
            name: "Breloom",
            type: ["flying", "grass"],
            height: 1.2
        },
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + " " + "height : " + pokemon.height + " " + pokemon.type + "</br>");
});