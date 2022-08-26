import { Button, Input, Modal, message } from "antd";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({
    userName: "",
  });

  const success = () => {
    message.success('Successfully connect');
  };

  const error = () => {
    message.error('Something went wrong');
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    axios
      .post("http://localhost:3000/register", data)
      .then((res) => {
        success();
        localStorage.setItem("user",JSON.stringify(res.data));
        navigate('/addtask')
      })
      .catch((err) => {
        error();
      });
    handleClear();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    handleClear();
  };

  const handleClear = () => {
    setData({
      userName: "",
    });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="box">
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="Registration"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          type="text"
          name="userName"
          value={data.userName}
          placeholder="Enter Name"
          onChange={handleChange}
          className="inputField"
        />
        <br />
      </Modal>
    </div>
  );
};

export default Register;
