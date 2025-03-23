// Esperar o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function () {
  // Elementos do DOM
  const addForm = document.querySelector(".add-form");
  const addInput = document.querySelector(".add-input");
  const addButton = document.querySelector(".add-button");
  const shoppingList = document.querySelector(".shopping-list");
  const notification = document.querySelector(".notification");
  const closeButton = document.querySelector(".close-button");

  // Esconder a notificação inicialmente
  notification.style.display = "none";

  // Função para adicionar um novo item
  function addItem(e) {
    // Prevenir o comportamento padrão do formulário
    if (e) e.preventDefault();

    // Obter o texto do input
    const itemText = addInput.value.trim();

    // Verificar se o input não está vazio
    if (itemText !== "") {
      // Criar um novo item da lista
      const newItem = document.createElement("div");
      newItem.className = "list-item";

      // HTML interno do item
      newItem.innerHTML = `
                <div class="item-left">
                    <input type="checkbox" class="item-checkbox">
                    <span class="item-text">${itemText}</span>
                </div>
                <button class="delete-button">
                  <img src="assets/icon delete.svg" />
                </button>
            `;

      // Adicionar o novo item à lista
      shoppingList.appendChild(newItem);

      // Limpar o input
      addInput.value = "";

      // Adicionar evento de clique ao botão de exclusão
      const deleteButton = newItem.querySelector(".delete-button");
      deleteButton.addEventListener("click", removeItem);
    }
  }

  // Função para remover um item
  function removeItem(e) {
    // Obter o item pai (list-item)
    const item = e.currentTarget.parentElement;

    // Remover o item da lista
    shoppingList.removeChild(item);

    // Mostrar a notificação
    showNotification();
  }

  // Função para mostrar a notificação
  function showNotification() {
    // Mostrar a notificação
    notification.style.display = "flex";

    // Configurar um temporizador para esconder a notificação após 3 segundos
    setTimeout(function () {
      notification.style.display = "none";
    }, 5000);
  }

  // Função para fechar a notificação
  function closeNotification() {
    notification.style.display = "none";
  }

  // Adicionar eventos
  addForm.addEventListener("submit", addItem);
  addButton.addEventListener("click", addItem);
  closeButton.addEventListener("click", closeNotification);

  // Adicionar eventos aos botões de exclusão existentes
  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", removeItem);
  });
});
