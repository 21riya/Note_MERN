import { Badge, Button, Card, Accordion} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import MainScreen from "../../Component/MainScreen";
import { Link } from "react-router-dom";
import axios from "axios"

const Notes = () => {

  const [data, setData] = useState([])

  const deleteHandler = (id) => {
    window.alert(`Are you sure you want to delete ${id}`);
  };

  const fetchData = async() => {
    let  {data}  = await axios.get("/api/notes");
    setData(data)
  }

  useEffect(() => {
    fetchData();
  }, [...data])

  return (
    <MainScreen title="Welcome Riya Shah.....">
      <Link to="/createNotes">
        <Button size="lg" style={{ marginTop: "10px", marginBottom: "20px" }}>
          Create New Notes
        </Button>
      </Link>
      {data &&
        data.map((notesData) => (
          <Accordion key={notesData._id}>
            <Card style={{ margin: "13px" }}>
              <Card.Header
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                >
                  <Accordion.Toggle
                    as={Card.Text}
                    variant="link"
                    eventKey="0"
                  >
                    {notesData.title}
                  </Accordion.Toggle>
                </span>
                <div>
                  <Button href={`/mynotes/${notesData._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(notesData._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">
                      Category - {notesData.category}
                    </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{notesData.content}</p>
                    <footer className="blockquote-footer">
                      created on date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default Notes;
