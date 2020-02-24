import React, { useState, useEffect } from "react";
import {
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";

const EditUser = ({ match }) => {
  const [form, setForm] = useState({
    name: "",
    office: "",
    age: ""
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${match.params.id}`).then(res => {
      setForm(res.data);
    });
  }, [match.params.id]);

  const onChange = field => evt => {
    setForm({
      ...form,
      [field]: evt.target.value
    });
  };

  const editUser = () => {
    axios
      .put(`http://localhost:3000/update/${match.params.id}`, {
        ...form
      })
      .then(res => {
        setSuccess(true);
      });
  };

  if (success) {
    return <Redirect to={"/users"} />;
  }

  return (
    <div className="container mt-5 col-md-5">
      <Card>
        <CardHeader>Cadastrar Usuário</CardHeader>
        <CardBody>
          <form>
            <FormGroup>
              <Label for="nome">Nome</Label>
              <Input
                type="text"
                name="name"
                value={form.name}
                placeholder="Nome do Funcionário"
                onChange={onChange("name")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cargo">Cargo</Label>
              <Input
                type="text"
                name="office"
                value={form.office}
                placeholder="Ex: Desenvolvedor Java"
                onChange={onChange("office")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="idade">Idade</Label>
              <Input
                type="number"
                name="age"
                value={form.age}
                placeholder="Ex: 25"
                onChange={onChange("age")}
              />
            </FormGroup>
            <div className="text-right">
              <Link to="/" className="btn btn-link mr-2">
                Voltar
              </Link>
              <button
                type="button"
                className="btn btn-primary"
                onClick={editUser}
              >
                Editar
              </button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default EditUser;
