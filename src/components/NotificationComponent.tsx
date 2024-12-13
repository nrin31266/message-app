import * as React from "react";
import { Snackbar, Alert, Box } from "@mui/material";

// Component thông báo đẩy có thể tái sử dụng
interface NotificationProps {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
  autoHideDuration?: number;
  onClose: () => void;
  
}

const NotificationComponent: React.FC<NotificationProps> = ({
  open,
  message,
  severity,
  autoHideDuration = 2000,
  onClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationComponent;
