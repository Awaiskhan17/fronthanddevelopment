const Input = document.getElementById('input');

Input.addEventListener('input', function () {
    if (Input.value.length >= 4) {
        Input.value = Input.value.slice(0, 2) + '/';
    }
});
