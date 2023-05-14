import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      console.log(error);
      alert(error.error_description || error.message);
    } else {
      alert("¡Revisa tu correo electrónico para el enlace de inicio de sesión!");
    }
    setLoading(false);
  };

  return (
    <Container className="mt-3 pt-3">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="header">Diccionario de Ignacio</h1>
          <p className="description">
            Inicia sesión a través de un enlace mágico con tu correo electrónico:
          </p>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button
                className="w-100"
                variant="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span>Cargando</span>
                ) : (
                  <span>Enviar enlace mágico</span>
                )}
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
