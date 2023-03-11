import React from "react";

import { Notification as Not } from "./Notification.component";

export function useNotification() {
  const [state, setState] = React.useState<any>(null);

  function showMessage(type: "info", title: string, action: any) {
    setState({
      type,
      title,
      action,
    });
  }

  const Notification = () => (
    <Not type={state?.type} title={state?.title} action={state?.action} />
  );

  return { showMessage, Notification };
}
