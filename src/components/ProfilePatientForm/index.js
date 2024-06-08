import React, { memo } from "react";
import { Form, Space, Input, InputNumber } from "antd";
import { useGlobalContext } from "../../modules/context/index.js";
import { SimpleGrid } from "@chakra-ui/react";
import useSavePatient from "../../modules/hooks/useSavePatient.js";
import { useStore } from "../../modules/store/index.js";

function ProfilePatientForm({ inViewPatient }) {
    const { patientForm } = useGlobalContext();

    const { handleSave } = useSavePatient();

    const { onFieldsChange } = useStore((store) => ({
        onFieldsChange: store.onFieldsChange,
    }));

    const handleSubmit = async () => {
        try {
            await patientForm.validateFields()
            handleSave();
        } catch (error) {
            console.error("Validation Failed:", error);
        }
    };
    const onFinishFailed = async () => {
            const element = document.getElementById("Patient");
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
    };

    return (
        <>
            <Form
                id="patientForm"
                onFinish={handleSubmit}
                form={patientForm}
                labelWrap
                labelAlign="right"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFieldsChange={onFieldsChange}
                onFinishFailed={onFinishFailed}
            >
                <SimpleGrid
                    gap={[1, 2]}
                    columns={[2, 3]}
                    p="2"
                    my="2"
                    boxShadow="xl"
                    bg="pink.50"
                    borderRadius="15px"
                >
                    <Form.Item name="patientId" hidden>
                        <InputNumber readOnly prefix="№" />
                    </Form.Item>
                    <Form.Item
                        key="patientName"
                        name="patientName"
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        key="patientSurName"
                        name="patientSurName"
                        label="Surname"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        key="patientPatronymic"
                        label="Patronymic"
                        name="patientPatronymic"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </SimpleGrid>
            </Form>
        </>
    );
}

export default memo(ProfilePatientForm);
