import { ReactNode } from "react";
import "./styles.css";

interface PageContentProps {
  title: string;
  label: string;
  isVideo: boolean;
  Component: ReactNode;
}

export default function PageContent({
  title,
  label,
  isVideo,
  Component,
}: PageContentProps) {
  return (
    <div className="page-content">
      <div className={`page-content-wrapper ${isVideo ? "" : "row-reversed"}`}>
        <div className="left-content">
          <span className="first-row">{title}</span>
          <div className="second-row">
            <span>{label}</span>
          </div>
        </div>
        <div className={`right-content ${isVideo ? "" : "images"}`}>
          {Component}
        </div>
      </div>
    </div>
  );
}
