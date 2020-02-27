import React, { useState } from "react";
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

const CreateUser = () => {
  const [form, setForm] = useState({});
  const [success, setSuccess] = useState(false);

  const onChange = field => evt => {
    setForm({
      ...form,
      [field]: evt.target.value
    });
  };

  const createUser = () => {
    axios
      .post("http://localhost:3333/create", {
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
                placeholder="Nome do Funcionário"
                onChange={onChange("name")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cargo">Cargo</Label>
              <Input
                type="text"
                name="office"
                placeholder="Ex: Desenvolvedor Java"
                onChange={onChange("office")}
              />
            </FormGroup>
            <FormGroup>
              <Label for="idade">Idade</Label>
              <Input
                type="number"
                name="agr"
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
                disabled={!form}
                onClick={createUser}
              >
                Cadastrar
              </button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default CreateUser;
