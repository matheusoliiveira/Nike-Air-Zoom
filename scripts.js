let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");

function mudarVisual(cor, imagem) {
  body.style.backgroundColor = cor;

  tenis.style.animation = "none";
  tenis.offsetHeight;
  tenis.style.animation =
    "cairDoCeu 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards";

  setTimeout(() => {
    tenis.src = imagem;
    tenis.style.animation =
      "cairDoCeu 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards";
  }, 100);

  setTimeout(() => {
    tenis.style.animation =
      "flutuar 3s ease-in-out infinite, sombra 3s ease-in-out infinite";
  }, 1700);

  const botaoCarrinho = document.querySelector(".botao-carrinho");
  botaoCarrinho.style.backgroundColor = cor;
  botaoCarrinho.style.color = "#000";
}

tenis.style.animation =
  "cairDoCeu 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards";

const botaoCarrinho = document.querySelector(".botao-carrinho");

botaoCarrinho.addEventListener("click", () => {
  botaoCarrinho.style.animation = "none";
  botaoCarrinho.offsetHeight;
  botaoCarrinho.style.animation = "pulo 0.4s ease";

  botaoCarrinho.addEventListener(
    "animationend",
    () => {
      botaoCarrinho.style.animation = "";
    },
    { once: true }
  );
});
