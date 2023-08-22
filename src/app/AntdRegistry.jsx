"use client";
import React, { useState } from "react";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { useServerInsertedHTML } from "next/navigation";

const StyledComponentsRegistry = ({ children }) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8992E5",
        },
      }}
    >
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </ConfigProvider>
  );
};

export default StyledComponentsRegistry;
