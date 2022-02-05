
import { Breadcrumbs } from '@mui/material';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = () => {
  return <div className="blog">
    <div className="top-img"></div>
      <Breadcrumbs className="bread d-flex mt-8" aria-label="breadcrumb">
        <Link className="text-uppercase" to="/">
          Home
        </Link>
        <Link className="text-uppercase" to="/blog">
          Blog
        </Link>
      </Breadcrumbs>
      <h1 className="my-3 ms-5">Our Blog</h1>
      <Container className="my-5">
       
      </Container>
  </div>;
};

export default Blog;
