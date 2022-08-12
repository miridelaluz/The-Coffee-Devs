const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");  /* Añade la clase que mueve el panel al boton de registro */
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active"); /* Remueve la clase que mueve el panel al boton de entrar */
});


