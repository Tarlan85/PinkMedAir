import { Box, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { Button, Form, Input, InputNumber, Radio, Select, Space } from "antd";
import React, { memo, useState } from "react";
import { useStore } from "../../../../../modules/store";
import PathologistFormItem from "../../../../../components/FormItems/PathologistFormItem";

function DiseaseHistoryFormBloke(props) {
    const { selectedRowKey, setSelectedRowKey, form } = props;

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

    const [isChangeForm, setIsChangeForm] = useState(false);

    const dataSourceDiseaseHistoryTable = useStore(
        (store) => store.dataSourceDiseaseHistoryTable
    );
    const setDataSourceDiseaseHistoryTable = useStore(
        (store) => store.setDataSourceDiseaseHistoryTable
    );
    const setIsFieldsChange = useStore((store) => store.setIsFieldsChange);

    const onFinish = (values) => {
        setIsChangeForm(false);
        setIsFieldsChange(true);
        if (selectedRowKey) {
            let newData = dataSourceDiseaseHistoryTable.map((i) => {
                if (i.id === values.id) return values;
                else return i;
            });
            setDataSourceDiseaseHistoryTable(newData);
        } else {
            let id = new Date().getTime();
            values.id = id;
            values.key = id;
            setDataSourceDiseaseHistoryTable([
                ...dataSourceDiseaseHistoryTable,
                values,
            ]);
        }
        form.resetFields();
        setSelectedRowKey();
    };

    const handleClear = () => {
        form.resetFields();
        setSelectedRowKey();
    };

    const onFieldsChange = () => {
        setIsChangeForm(true);
    };
    // Функция для проверки ввода значений от 1 до 8 или плюса
    const handleKeyDown = (event) => {
        const { key } = event;
        if (!/[1-8+]/.test(key) && key !== "Backspace") {
            event.preventDefault();
        }
    };
    const onBeforeInput_erN = (event) => {
        if (event.data === "+") {
            event.preventDefault();
            form.setFieldsValue({ erN: "+" });
        }
    };
    const onBeforeInput_prN = (event) => {
        if (event.data === "+") {
            event.preventDefault();
            form.setFieldsValue({ prN: "+" });
        }
    };

    return (
        <Form
            onFinish={onFinish}
            id="diseaseHistoryFormBloke"
            form={form}
            labelWrap
            labelAlign="right"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                her2: 0,
                k67: 0,
            }}
            onFieldsChange={onFieldsChange}
        >
            <SimpleGrid columns={["1", "2"]}>
                <Box maxW="600px">
                    <Form.Item hidden name="id">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Breast" name="complaintBreastType">
                        <Select allowClear>
                            <Select.Option value="no">Missing</Select.Option>
                            <Select.Option value="right">Right</Select.Option>
                            <Select.Option value="left">Left</Select.Option>
                            <Select.Option value="both">Both</Select.Option>
                            <Select.Option value="postmastektR">
                                Post mastectomy right
                            </Select.Option>
                            <Select.Option value="postmastektL">
                                Post mastectomy left
                            </Select.Option>
                            <Select.Option value="axilaR">
                                Axilla right
                            </Select.Option>
                            <Select.Option value="axilaL">
                                Axilla left
                            </Select.Option>
                            <Select.Option value="anotherBrestR">
                                Extra breast right
                            </Select.Option>
                            <Select.Option value="anotherBrestL">
                                Extra breast left
                            </Select.Option>
                            <Select.Option value="anotherBrestBoth">
                                Both extra breasts
                            </Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Duration of illness"
                        name="durationOfIllness"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Complaints" name="complaintDescription">
                        <Input.TextArea showCount maxLength={3000} rows={3} />
                    </Form.Item>
                </Box>

                <Box maxW="600px">
                    <Form.Item label="ER">
                        <Form.Item noStyle name="ihkEr">
                            <Radio.Group>
                                <Space direction="vertical">
                                    <Radio value={1}>Positive</Radio>
                                    <Radio value={2}>Negative</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.ihkEr !== currentValues.ihkEr
                            }
                        >
                            {({ getFieldValue }) => {
                                if (getFieldValue("ihkEr") === 1) {
                                    if (!getFieldValue("erN"))
                                        form.setFieldsValue?.({ erN: "1" });
                                    return (
                                        <Form.Item noStyle name="erN">
                                            <InputNumber
                                                autoFocus
                                                min={1}
                                                max={8}
                                                defaultValue={1}
                                                onKeyDown={handleKeyDown}
                                                onBeforeInput={onBeforeInput_erN}
                                            />
                                        </Form.Item>
                                    );
                                } else return "";
                            }}
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label="PR">
                        <Form.Item noStyle name="ihkPr">
                            <Radio.Group>
                                <Space direction="vertical">
                                    <Radio value={1}>Positive</Radio>
                                    <Radio value={2}>Negative</Radio>
                                </Space>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.ihkPr !== currentValues.ihkPr
                            }
                        >
                            {({ getFieldValue }) => {
                                if (getFieldValue("ihkPr") === 1) {
                                    if (!getFieldValue("prN"))
                                        form.setFieldsValue?.({ prN: "1" });
                                    return (
                                        <Form.Item noStyle name="prN">
                                        <InputNumber
                                            autoFocus
                                            min={1}
                                            max={8}
                                            defaultValue={1}
                                            onKeyDown={handleKeyDown}
                                            onBeforeInput={onBeforeInput_prN}
                                        />
                                        </Form.Item>
                                    );
                                } else return "";
                            }}
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label="HER2">
                        <Form.Item noStyle name="her2">
                            <InputNumber min={0} max={3} />
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.her2 !== currentValues.her2
                            }
                        >
                            {({ getFieldValue }) => {
                                if (getFieldValue("her2") === 2) {
                                    return (
                                        <Form.Item noStyle name="her2FT">
                                            <InputNumber addonBefore="FT" />
                                        </Form.Item>
                                    );
                                } else {
                                    form.setFieldValue?.({ her2FT: "" });
                                    return "";
                                }
                            }}
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label="K67" name="k67">
                        <InputNumber min={0} />
                    </Form.Item>

                    <PathologistFormItem
                        label="Pathologist"
                        name="pathologist"
                    />

                    <Form.Item wrapperCol={isLargerThan400 ?{ offset: 8, span: 16 } : { span: 24 }}>
                        <Space>
                            <Button
                                form="diseaseHistoryFormBloke"
                                htmlType="submit"
                                type="primary"
                                disabled={!isChangeForm}
                            >
                                {selectedRowKey ? "Edit" : "Add"}
                            </Button>

                            <Button onClick={handleClear} danger>
                                {selectedRowKey ? "Close" : "Clear"}
                            </Button>
                        </Space>
                    </Form.Item>
                </Box>
            </SimpleGrid>
        </Form>
    );
}

export default memo(DiseaseHistoryFormBloke);
