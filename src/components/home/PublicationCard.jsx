import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";


const PublicationCard = ({ value }) => {
  const {
    title,
    abstract,
    pdf,
    authors,
    thumbnail,
    year,
    github,
    page,
  } = value;

  const [showFullAbstract, setShowFullAbstract] = useState(false);

  const toggleAbstract = () => {
    setShowFullAbstract(!showFullAbstract);
  };

  return (
    <Col md={12}>
      
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        
        <Card.Body>
        {thumbnail && (
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  style={{ width: "12rem", height: "12rem", float: "left", marginRight: "15px" }}
                />
              )}
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>
            {abstract ? (
              <>
                {showFullAbstract ? abstract : `${abstract.substring(0, 500)}...`}
                
              
              </>
            ) : (
              <Skeleton count={3} />
            )}
          </Card.Text>
          {pdf ? <CardButtons urls={
            {
              "PDF": pdf,
              ...(page && { "Page": page }),
              ...(github && { "GitHub": github }),
            }
          } /> : <Skeleton count={2} />}
          
          
          {value ? (
            <CardFooter authors={authors} year={year} />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ urls }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      {
        Object.keys(urls).map((key, index) => {
          return <a
            href={urls[key]}
            className="btn btn-outline-secondary mx-2"
            key={`url-${index}`}
          >
            {
              key === "PDF" && <i className="fa fa-book" /> 
            }
            {
              key === "Page" && <i className="fa fa-external-link-alt" />
            }
            {
              key === "GitHub" && <i className="fa fa-github" />
            }
            {key}
          </a>
        })
      }
    </div>
  );
};


const CardFooter = ({ authors, year }) => {
  return (
    <p className="card-text">
      <a
        target="_blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab" /> {
            authors ? authors.map(author => 
              author === "Jinnyeong Kim" ? <b key={author}>{author}</b> : <span key={author}>{author}</span>
            ).reduce((prev, curr) => [prev, ', ', curr]) : <Skeleton count={2} />
          }
        </span>
      </a>
      <br />
      <small className="text-muted">Published {year}</small>
    </p>
  );
};

const Publications = ({ heading, publications }) => {

  return (
    <Jumbotron fluid id="publications" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row className= "" style={{display: 'block',}}>
          {publications.map((project, index) => {
                 return (
                 <Col key={`project-col-${index}`}  className="d-flex justify-content-center">
                   <PublicationCard
                   id={`project-card-${index}`}
                   value={project}
                   />
                 </Col>
                 );
          })}
        </Row>
      </Container>
    </Jumbotron>
  );
};


export default Publications;
