import React from "react";
import "../../styles/layout.scss";

export default function Layout({ children }) {
  return <section className="layout_container">{children}</section>;
}
