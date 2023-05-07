import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormModal({ showModal, handleModal }) {
  const [categories, setCategories] = useState([
    { id: 1, name: "El dorado" },
  ]);
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const resetForm = () => {
    setWord("");
    setDefinition("");
    setCategory("");
    setNewCategory("");
    setShowCategoryInput(false);
  };

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleDefinitionChange = (e) => {
    setDefinition(e.target.value);
  };

  const handleCategoryChange = (e) => {
    if (e.target.value === "new") {
      setShowCategoryInput(true);
      setCategory("");
    } else {
      setShowCategoryInput(false);
      setCategory(e.target.value);
    }
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const isFormValid = () => {
    if (!word || !definition || (!category && !showCategoryInput)) {
      return false;
    }
    if (showCategoryInput && !newCategory) {
      return false;
    }
    return true;
  };

  return (
    <>
      <Modal show={showModal} onHide={() => {resetForm(); handleModal();}}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Añadir palabra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Palabra</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la palabra"
                value={word}
                onChange={handleWordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Definición</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la definición"
                value={definition}
                onChange={handleDefinitionChange}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Select
                aria-label="Default select example"
                value={category}
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
                  value={newCategory}
                  onChange={handleNewCategoryChange}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {resetForm(); handleModal();}}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={() => {resetForm(); handleModal();}}
            disabled={!isFormValid()}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

