import { Button, Image, Spin, Upload } from "antd";
import React, { memo, useEffect, useState } from "react";
import {
    UploadOutlined,
    CloseCircleOutlined,
    LoadingOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import sendRequest from "../../../../../modules/api/sendRequest";
import { Box, Flex } from "@chakra-ui/react";

const UploadForm = ({ form, formName, initialValuesTreatment }) => {
    const [imageUrl, setImageUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const showImage = (url) => {
        if (url) {
            setImageUrl(url);
        } else {
            setImageUrl(null);
        }
    };

    useEffect(() => {
        const url = initialValuesTreatment?.[`${formName}Url`];
        if (url) {
            showImage(url);
        }

        return () => {
            setImageUrl(null);
        };
    }, [initialValuesTreatment]);

    const beforeUpload = async (file) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        let res = await sendRequest("treatmentImage", formData, "post");
        if (res?.data) {
            const url = res.data;
            showImage(url);
            form.setFieldsValue({ [`${formName}Name`]: file.name });
            form.setFieldsValue({ [`${formName}Url`]: url });
        }
        setIsLoading(false);
        return false;
    };

    const handleDeleteImg = () => {
        try {
            setImageUrl(null);
            form.setFieldsValue({
                [`${formName}Name`]: "",
                [`${formName}Url`]: "",
            });
        } catch (error) {
            console.log("%c error", "background: red; color: dark", error);
        }
    };

    return (
        <Spin spinning={isLoading}>
            {imageUrl ? (
                <Flex
                    gap="1"
                    m="3"
                    width={["100%", "200px"]}
                    position={"relative"}
                >
                    <Image
                        style={{ width: "200px", height: "200px" }}
                        objectFit="cover"
                        alt={formName}
                        src={imageUrl}
                    />
                    <Box
                        onClick={handleDeleteImg}
                        _hover={{ color: "red" }}
                        top="-6"
                        right="1"
                        cursor="pointer"
                        position={"absolute"}
                    >
                        <CloseCircleOutlined />
                    </Box>
                </Flex>
            ) : (
                <>
                    <Upload
                        accept=".png,.jpeg,.jpg"
                        listType="picture-card"
                        beforeUpload={beforeUpload}
                        showUploadList={false}
                    >
                        {!imageUrl && (
                            <button
                                style={{ border: 0, background: "none" }}
                                type="button"
                            >
                                {isLoading ? (
                                    <LoadingOutlined />
                                ) : (
                                    <PlusOutlined />
                                )}
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                        )}
                    </Upload>

                    {/* <Upload
                        accept=".png,.jpeg,.jpg"
                        listType="picture"
                        beforeUpload={beforeUpload}
                    >
                        {!imageUrl ? (
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        ) : (
                            ""
                        )}
                    </Upload> */}
                </>
            )}
        </Spin>
    );
};
export default memo(UploadForm);
