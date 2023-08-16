"use client";
import React from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { useServerInsertedHTML } from "next/navigation";

const StyledComponentsRegistry = ({ children }) => {
  const cache = createCache();
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#8992E5",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};

export default StyledComponentsRegistry;
