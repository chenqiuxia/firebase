import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "firebase/auth";
import "./email.css";
const Email = (props) => {
  // const db = getFirestore();
  // useEffect(() => {
  //   const querySnapshot = getDocs(collection(db, "users")).then((res) => {
  //     console.log(res, "res ");
  //   });
  // }, [db]);
  const onFinish = (values) => {
    const { email, password } = values;
    console.log("onFinish", values);
    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this URL
      // must be whitelisted in the Firebase Console.
      url: window.location.href, // Here we redirect back to this same page.
      handleCodeInApp: true, // This must be true.
    };
    // const citiesCol = collection(db, 'cities');
    const auth = getAuth();
    sendSignInLinkToEmail(email, actionCodeSettings)
      .then((e) => {
        console.log(auth.currentUser, "auth currentUser");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const onFinishFailed = () => {
    console.log("onFinishFailed");
  };

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Email;
