import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {
  Card, Button, CardHeader, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ListUsers = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/list')
      .then((res) => {
        setData(res.data)
      })
  }, []);

  const deleteUser = id => {
    axios
      .delete(`http://localhost:3000/user/${id}`)
      .then(res => {
        const filter = data.filter(item => item._id !== id);
        setData(filter);
      });
  }

  const renderCard = user => {
    return (
      <Card className="mb-3" key={user._id}>
        <CardHeader>Usuário</CardHeader>
        <CardBody>
          <CardTitle>Nome: {user.name}</CardTitle>
          <CardText>Cargo: {user.office}</CardText>
          <CardText>Idade: {user.age}</CardText>
          <div className="text-right">
            <Button className="btn btn-danger mr-2" onClick={() => deleteUser(user._id)} >Remover</Button>
            <Button className="btn btn-warning" >Editar</Button>
          </div>
        </CardBody>
      </Card>
    );
  }

  if (data.length === 0) {
    return (
      <div className="container col-md-6 mt-5">
        <div className="text-right mb-5">
          <Link to={'/user/create'} className="btn btn-success">Novo Usuário</Link>
        </div>
        <div className="alert alert-warning" role="alert">
          Voce não tem usuários cadastrados!
        </div>
      </div>
    )
  };

  return (
    <div className="container mt-5 col-md-4">
      <div className="text-right mb-5">
        <Link to={'/user/create'} className="btn btn-success">Novo Usuário</Link>
      </div>
      {data.map(renderCard)}
    </div>
  );
}

export default ListUsers