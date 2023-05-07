import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormModal({ showModal, handleModal }) {
  const [categories, setCategories] = useState([
    { id: 1, name: "El dorado" },
  ]);
  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const handleCategoryChange = (e) => {
    if (e.target.value === "new") {
      setShowCategoryInput(true);
    } else {
      setShowCategoryInput(false);
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Añadir palabra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Palabra</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la palabra" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Definición</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la definición"
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Select
                aria-label="Default select example"
                onChange={handleCategoryChange}
              >
                <option>Guarda la palabra en una categoría</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
                <option value="new">Nueva categoría</option>
              </Form.Select>
            </Form.Group>
            {showCategoryInput && (
              <Form.Group className="mb-3">
                <Form.Label>Nueva categoría</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre de la nueva categoría"
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleModal}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


