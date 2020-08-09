import React from "react";
import { useFirebase } from "../firebase/useFirebase";
import { Form, Input, Button, message, Layout } from "antd";
import styled from "styled-components";

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

function ResetPassword() {
    const { resetPassword } = useFirebase();

    const onFormFinish = async values => {
        try {
            await resetPassword(values.email);
            message.success("The link to reset your password has been sent to your email!");
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
        <MainLayout>
                <Form onFinish={onFormFinish}>
                    <Form.Item label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "Please input your email!",
                        },
                    ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">
                            Reset Password
                        </Button>
                    </Form.Item>
                </Form>
        </MainLayout>
    );
}

export default ResetPassword;