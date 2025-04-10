// components/SummaryModal.jsx
import { Dialog } from "@headlessui/react";
// import { useState } from "react";
import { Fragment } from "react";

export default function SummaryModal({ isOpen, onClose, summaryText }) {
  return (
    // <div>H</div>
    <>
      <div>Ai Summarizer</div>
      <div>{summaryText}</div>
    </>
  );
}
