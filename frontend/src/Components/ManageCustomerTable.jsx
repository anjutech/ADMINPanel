import { useState } from 'react';
import { Tabs, Tab, Table, Button, Modal, Form } from 'react-bootstrap';

const App = () => {
  const [activeTab, setActiveTab] = useState('View');
  const [search, setSearch] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [data, setData] = useState({
    View : [
        { id: 1, name: 'Alice Brown', age: 25 ,Budget:"100k"},
        { id: 2, name: 'Bob Johnson', age: 40,Budget:"100k" },
      ],
    Create: [
      { id: 1, name: 'John Doe', age: 28 ,Budget:"100k"},
      { id: 2, name: 'Jane Smith', age: 34 ,Budget:"100k"},
    ],
    Update: [
      { id: 1, name: 'Alice Brown', age: 25,Budget:"100k" },
      { id: 2, name: 'Bob Johnson', age: 40,Budget:"100k" },
    ],
    Delete: [
        { id: 1, name: 'John Doe', age: 28 ,Budget:"100k"},
        { id: 2, name: 'Jane Smith', age: 34 ,Budget:"100k"},
      ]
  });

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredData = data[activeTab].filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (row) => {
    setSelectedRow(row);
    setModalShow(true);
  };

  const handleDelete = (id) => {
    const updatedData = data[activeTab].filter((row) => row.id !== id);
    setData({ ...data, [activeTab]: updatedData });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedData = data[activeTab].map((row) =>
      row.id === selectedRow.id ? selectedRow : row
    );
    setData({ ...data, [activeTab]: updatedData });
    setModalShow(false);
  };

  return (
    <div className="container m-5">
      
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => {
          setActiveTab(k);
          setSearch('');
        }}
        className="mb-3"
      >
        {Object.keys(data).map((tab) => (
          <Tab eventKey={tab} title={tab.toUpperCase()} key={tab}>
            <div>
              <div className="row">
                <div className="col">
                <Form.Control
                type="text"
                placeholder="Search Name..."
                value={search}
                onChange={handleSearch}
                className="mb-3"
              />
              </div>
              <div className="col">
              <Form.Control
                type="text"
                placeholder="Search Age..."
                value={search}
                onChange={handleSearch}
                className="mb-3"
              />
                </div>
                <div className="col">
              <Form.Control
                type="text"
                placeholder="Search Budget..."
                value={search}
                onChange={handleSearch}
                className="mb-3"
              />
                </div>
                <div className="col">
              <Form.Control
                type="text"
                placeholder="Search Address..."
                value={search}
                onChange={handleSearch}
                className="mb-3"
              />
                </div>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Budget</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.age}</td>
                      <td>{row.Budget }</td>
                      <td>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleEdit(row)}
                        >
                          Edit
                        </Button>{' '}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(row.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Tab>
        ))}
      </Tabs>

      {/* Modal for Edit */}
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRow && (
            <Form onSubmit={handleSave}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedRow.name}
                  onChange={(e) =>
                    setSelectedRow({ ...selectedRow, name: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedRow.age}
                  onChange={(e) =>
                    setSelectedRow({ ...selectedRow, age: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Button type="submit" variant="success">
                Save
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;
