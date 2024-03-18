import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';
import authService from '../services/authService';


const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  //const history = useHistory();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      // Lógica de inicio de sesión con el servicio de autenticación
      //const token = await authService.login(values);

      // Si la autenticación es exitosa, redirige a la página de dashboard
      message.success('Inicio de sesión exitoso');
      //history.push('/dashboard');
    } catch (error) {
      // Manejar errores de inicio de sesión
      message.error('Error al iniciar sesión. Verifica tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', marginTop: '100px' }}>
      <h2>Iniciar Sesión</h2>
      <Form
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Por favor, ingresa tu nombre de usuario.' }]}
        >
          <Input placeholder="Nombre de Usuario" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor, ingresa tu contraseña.' }]}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>

          <Link to="/forgot-password" style={{ float: 'right' }}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Iniciar Sesión
          </Button>
          O <Link to="/register">registrarse ahora</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;