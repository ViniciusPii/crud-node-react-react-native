import React from 'react';
import { FormGroup, Label, Input, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const CreateUser = () => {
  return (
    <div className="container mt-5 col-md-5">
      <Card>
        <CardHeader>Cadastrar Usuário</CardHeader>
        <CardBody>
          <form>
            <FormGroup>
              <Label for="nome">Nome</Label>
              <Input type="text" name="name" placeholder="Nome do Funcionário" />
            </FormGroup>
            <FormGroup>
              <Label for="cargo">Cargo</Label>
              <Input type="text" name="office" placeholder="Ex: Desenvolvedor Java" />
            </FormGroup>
            <FormGroup>
              <Label for="idade">Idade</Label>
              <Input type="number" name="agr" placeholder="Ex: 25" />
            </FormGroup>
            <div className="text-right">
              <Link className="btn btn-link mr-2" >Voltar</Link>
              <Link className="btn btn-primary" >Cadastrar</Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default CreateUser;