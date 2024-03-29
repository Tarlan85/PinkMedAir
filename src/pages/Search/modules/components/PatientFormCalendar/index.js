import { Button, Form, Input, Space, InputNumber, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { memo, useState } from "react";
import { useGlobalContext } from "../../../../../modules/context/index.js";
import sendRequest from "../../../../../modules/api/sendRequest";
import { useStore } from "../../../../../modules/store";
import { Box, useMediaQuery } from "@chakra-ui/react";

const PatientFormCalendar = () => {

    const [loading, setLoading] = useState(false)

    const { searchPatientForm } = useGlobalContext()

    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    const setDataSourceSearchTable = useStore((store) => store.setDataSourceSearchTable)

    const handleSearch = async () => {
        setLoading(true)
        const form = searchPatientForm.getFieldsValue()
        const searchObj = { ...form }
        let res = await sendRequest("search", searchObj, "post");
        if (res?.data) {
            setDataSourceSearchTable(res.data)
        } else {
            message.info({
                key: 'search_patient',
                content: 'Patient not found...',
            })
            setDataSourceSearchTable([])
        }
        setLoading(false)
    }

    const handleClear = () => {
        searchPatientForm.resetFields()
    }

    return (
        <>
            <Form
                onFinish={handleSearch}
                id='searchPatientForm'
                form={searchPatientForm}
                layout={isLargerThan600 ? "inline" : "vertical"}
            >
                <Form.Item
                    label="Name"
                >
                    <Space.Compact>

                        <Form.Item
                            noStyle
                            key="patientName"
                            name="patientName"
                        >
                            <Input placeholder="Name" allowClear />
                        </Form.Item>

                        <Form.Item
                            name="patientId"
                            noStyle
                        >
                            <InputNumber min={0} addonBefore='№' placeholder="Patient №" allowClear />
                        </Form.Item>

                    </Space.Compact>
                </Form.Item>

                <Form.Item key="patientSurName" name="patientSurName" label="Suriname">
                    <Input placeholder="Suriname" allowClear />
                </Form.Item>

                <Form.Item key="phoneNumber" name="phoneNumber" label="Phone number">
                    <Input type="number" placeholder="Phone number" allowClear />
                </Form.Item>

                <Form.Item >
                    <Space>
                        <Button
                            onClick={handleSearch}
                            type='primary'
                            form='searchPatientForm'
                            htmlType='submit'
                            icon={<SearchOutlined />}
                            loading={loading}
                        >
                            Search
                        </Button>

                        <Button onClick={handleClear} danger>
                            Clear
                        </Button>
                    </Space>
                </Form.Item>


            </Form>
        </>
    );
};

export default memo(PatientFormCalendar);
