import React, { memo } from "react";
import { Form, Input } from "antd";
import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import { useGlobalContext } from "../../../../../modules/context/index.js";
import { useStore } from "../../../../../modules/store/index.js";
import UploadForm from "../UploadForm";

function TreatmentFormBloke() {
    const { treatmentHistoryForm } = useGlobalContext();

    const initialValuesTreatment = useStore(
        (store) => store.initialValuesTreatment
    );

    const onFieldsChange = useStore((store) => store.onFieldsChange);

    return (
        <Form
            form={treatmentHistoryForm}
            labelWrap
            labelAlign="right"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={initialValuesTreatment}
            onFieldsChange={onFieldsChange}
        >
            <SimpleGrid columns={["1", "3"]} gap="1" mb="4">
                <Form.Item name="imageBeforeName" hidden></Form.Item>
                <Form.Item name="imageDuringName" hidden></Form.Item>
                <Form.Item name="imageAfterName" hidden></Form.Item>
                <Form.Item name="imageBeforeUrl" hidden></Form.Item>
                <Form.Item name="imageDuringUrl" hidden></Form.Item>
                <Form.Item name="imageAfterUrl" hidden></Form.Item>
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    maxW="600px"
                >
                    <Box>Photo before</Box>
                    <UploadForm
                        formName="imageBefore"
                        form={treatmentHistoryForm}
                        initialValuesTreatment={initialValuesTreatment}
                    />
                </Flex>
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    maxW="600px"
                >
                    <Box>Photo during</Box>
                    <UploadForm
                        formName="imageDuring"
                        form={treatmentHistoryForm}
                        initialValuesTreatment={initialValuesTreatment}
                    />
                </Flex>
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    maxW="600px"
                >
                    <Box>Photo after</Box>
                    <UploadForm
                        formName="imageAfter"
                        form={treatmentHistoryForm}
                        initialValuesTreatment={initialValuesTreatment}
                    />
                </Flex>
            </SimpleGrid>

            <SimpleGrid columns={["1", "2"]} gap="1">
                <Box maxW="600px">
                    <Form.Item label="Pre menopause" name="preMenopause">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Description" name="treatmentDesc">
                        <Input.TextArea showCount maxLength={3000} rows={3} />
                    </Form.Item>
                </Box>

                <Box maxW="600px">
                    <Form.Item label="Menopause" name="menopause">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Recommendation" name="recommendation">
                        <Input.TextArea showCount maxLength={3000} />
                    </Form.Item>

                    <Form.Item label="Advise" name="advise">
                        <Input.TextArea showCount maxLength={3000} />
                    </Form.Item>
                </Box>
            </SimpleGrid>
        </Form>
    );
}

export default memo(TreatmentFormBloke);
