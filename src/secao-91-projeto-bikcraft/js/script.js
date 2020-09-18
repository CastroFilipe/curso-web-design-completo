//verificação para evitar que páginas que possuem apenas animações e não possuem slide apresentem erro no console.
if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote", // nome do atributo data-slide="quote"
        time: 5000, // tempo de transição dos slides
    });

    new SimpleSlide({
        slide: 'galeria', // nome do atributo data-slide="principal"
        nav: true, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 5000, // tempo de transição dos slides
        pauseOnHover: true, // pausa a transição automática ao passar o mouse
    });
}

if (window.SimpleAnime) {
    new SimpleAnime();
}
