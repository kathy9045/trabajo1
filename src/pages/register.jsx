import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';
import '../css/logreg.css';
import NavBar from '../components/Navbar';

const baseUrl = "http://localhost:3001/users";

class Register extends Component {
    state = {
        form: {
            username: '',
            password: '',
            email: '',
            role: 'user' // Por defecto, se asigna el rol de usuario
        },
        error: '',
        success: false
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    handleSubmit = async (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        try {
            const response = await axios.get(baseUrl, { params: { username: this.state.form.username } });

            if (response.data.length > 0) {
                this.setState({ error: 'El nombre de usuario ya está en uso.' });
            } else {
                const newUser = {
                    username: this.state.form.username,
                    email: this.state.form.email,
                    password: md5(this.state.form.password), // Encripta la contraseña
                    role: this.state.form.role
                };

                await axios.post(baseUrl, newUser);
                this.setState({ success: true });
                alert('Usuario registrado con éxito');
                window.location.href = '/'; // Redirige al login
            }
        } catch (error) {
            console.log(error);
            this.setState({ error: 'Error al intentar registrar el usuario' });
        }
    }

    render() {
        return (
            <div className='n'><NavBar/>
            <div className="form-container">
                <h2>Registro</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input type="text" id="username" name="username" onChange={this.handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Correo Electronico</label>
                        <input type="text" id="username" name="email" onChange={this.handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} required />
                    </div>
                    {this.state.error && <p className="error">{this.state.error}</p>}
                    <button type="submit" className="btn">Registrarse</button>
                </form>
                <p>¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link></p>
            </div>
            </div>
        )
    }
}

export default Register;
