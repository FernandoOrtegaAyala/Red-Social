function handleBorrarTexto(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  const inputElement = document.querySelector<HTMLInputElement>(
    'input[name="searchInput"]'
  );

  if (inputElement) {
    inputElement.value = "";
  }
}

export default handleBorrarTexto;
