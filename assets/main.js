function continuar() {
    const floatingSelect = document.getElementById('floatingSelect').value;
    const floatingText = document.getElementById('floatingText').value
    if (floatingText == '') {
        return;
    } else {
        window.location.href = `./dashboard/index.html?type=${floatingSelect}&user=${floatingText}`;
    }
};