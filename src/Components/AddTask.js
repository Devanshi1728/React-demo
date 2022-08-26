import { Button, Input, Modal, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import axios from "axios";

const AddTask = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({
    taskName: "",
    taskDesc: "",
  });

  const success = () => {
    message.success('Task added successfully');
  };

  const error = () => {
    message.error('Something went wrong');
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const handleOk = () => {
    setIsModalVisible(false);
    const payload = {
      ...data,
      userName: user.userName
    }
    axios
      .patch("http://localhost:3000/addTask", payload)
      .then((res) => {
        success();
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
      taskName: "",
      taskDesc: "",
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
        Add Your Task
      </Button>
      <Modal
        title="Add Task"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <Input
          type="text"
          name="userName"
          value={data.userName}
          placeholder="Enter Name"
          onChange={handleChange}
          className="inputField"
        /> */}
        <br />
        <Input
          type="text"
          name="taskName"
          value={data.taskName}
          placeholder="Enter Task"
          onChange={handleChange}
          className="inputField"
        />
        <br />
        <TextArea
          type="text"
          name="taskDesc"
          value={data.taskDesc}
          rows={4}
          placeholder="Enter Task Description"
          onChange={handleChange}
          className="inputField"
        />
      </Modal>
    </div>
  );
};

export default AddTask;
