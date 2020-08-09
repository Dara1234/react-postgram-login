import React from "react";
import { useFirebase } from "../firebase/useFirebase";
import { Form, Input, Button, message, Collapse } from "antd";
import { KeyOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

function ChangePassword() {
    const { changePassword } = useFirebase();

    const onFormFinish = async values => {
        try {
            await changePassword(values.newPassword);
            message.success("Your password has been updated!");
        } catch (error) {
            message.error(error.message);
        }
    };

    return (
        <Collapse bordered expandIcon={() => <KeyOutlined/>}>
            <Panel header="Change Password">
                <Form onFinish={onFormFinish}>
                    <Form.Item label="New Password" name="newPassword">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">
                            Change Password
                        </Button>
                    </Form.Item>
                </Form>
            </Panel>
        </Collapse>
    );
}

export default ChangePassword;