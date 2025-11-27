"use client";

import { useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  message,
  type = "info",
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
  };

  const colors = {
    success: "bg-brand-green",
    error: "bg-red-500",
    info: "bg-brand-blue",
  };

  const Icon = icons[type];

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 ${colors[type]} text-white border-3 border-brutal-border shadow-brutal-lg animate-in slide-in-from-bottom-5 duration-300`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="font-bold text-sm">{message}</span>
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 hover:bg-white/20 transition-colors rounded"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
