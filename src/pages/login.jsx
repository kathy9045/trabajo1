import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';
import '../css/logreg.css';
import Cookies from 'universal-cookie';
import NavBar from '../components/Navbar';

const baseUrl = "http://localhost:3001/users";
const cookies = new Cookies();

class Login extends Component {
    state = {
        form: {
            email: '',
            password: ''
        },
        error: '',
        redirect: null // Propiedad de estado para manejar la redirección
    }

    async componentDidMount() {
        const role = cookies.get('role');
        if (role) {
            // Redirige automáticamente si el usuario ya está autenticado
            switch (role) {
                case 'Administrador':
                    this.setState({ redirect: '/Adminmenu' });
                    break;
                case 'Cliente':
                    this.setState({ redirect: '/Clientmenu' });
                    break;
                case 'user':
                    this.setState({ redirect: '/Menu' });
                    break;
                default:
                    this.setState({ error: 'Rol desconocido' });
            }
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        try {
            const response = await axios.get(baseUrl, { params: { email: this.state.form.email, password: md5(this.state.form.password) } });
            if (response.data.length > 0) {
                const respuesta = response.data[0]; // Accede al primer elemento del array
                cookies.set('id', respuesta.id, { path: "/" });
                cookies.set('username', respuesta.username, { path: "/" });
                cookies.set('email', respuesta.email, { path: "/" });
                cookies.set('role', respuesta.role, { path: "/" });

                // Determina la redirección basada en el rol del usuario
                switch (respuesta.role) {
                    case 'Administrador':
                        this.setState({ redirect: '/Adminmenu' });
                        break;
                    case 'Cliente':
                        this.setState({ redirect: '/Clientmenu' });
                        break;
                    case 'Usuario':
                        this.setState({ redirect: '/Menu' });
                        break;
                    default:
                        this.setState({ error: 'Rol desconocido' });
                }
            } else {
                this.setState({ error: 'Correo electrónico o contraseña incorrectos' });
            }
        } catch (error) {
            this.setState({ error: 'Error al intentar iniciar sesión' });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />;
        }

        return (
            <div className='n'><NavBar/>
            <div className="form-container">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={this.iniciarSesion}>
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="text" id="email" name="email" onChange={this.handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} required />
                    </div>
                    {this.state.error && <p className="error">{this.state.error}</p>}
                    <button type="submit" className="btn">Iniciar Sesión</button>
                </form>
                <p>¿No tienes una cuenta? <Link to="/Register">Regístrate aquí</Link></p>
            </div>
            </div>
        );
    }
}

export default Login;
