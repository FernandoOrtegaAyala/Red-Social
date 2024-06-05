function handleSubmitSearchForm(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputValue = formData.get('searchInput');
    console.log('Valor del campo:', inputValue);
}

export default handleSubmitSearchForm