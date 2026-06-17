document.addEventListener("DOMContentLoaded", () => {
  const botoesDesc = document.querySelectorAll(".btn-toggle-desc");

  botoesDesc.forEach((botao) => {
    botao.addEventListener("click", function () {
      const container = this.closest(".container-padrao");
      const projetoPrincipal = container.querySelector(".projeto-principal");
      
      let descMobile = container.querySelector(".desc-dinamica-mobile");

      if (descMobile) {
        descMobile.remove();
        this.textContent = "Ver detalhes";
      } else {
        const textoDescricao = this.getAttribute("data-desc");

        descMobile = document.createElement("p");
        descMobile.classList.add("desc-dinamica-mobile");
        descMobile.textContent = textoDescricao;

        // Insere dinamicamente abaixo da estrutura de imagem/botão
        projetoPrincipal.insertAdjacentElement("afterend", descMobile);
        this.textContent = "Fechar";
      }
    });
  });
});