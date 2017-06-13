'use strict';

const Login = () => {
	const login 			= $('<div class="login"></div>');
	const title				= $('<h1>Log into Laboratoria</h1>');
	const email				= $('<input type="email" class="username" placeholder="Correo electrónico"/>');
	const password			= $('<input type="password" class="password" placeholder="Contraseña"/>');
	const loginButton		= $('<button>Ingresar</button>');
	const facebookButton	= $('<button>Ingresar con Facebook</button>');

	login.append(title);
	login.append(email);
	login.append(password);
	login.append(loginButton);
	login.append(facebookButton);

	loginButton.on('click',(e) => {
		e.preventDefault();
		alert('Not implement yet');
	});

	facebookButton.on('click', (e) => {
		e.preventDefault();
		doLogin();
	});
	return login;
}