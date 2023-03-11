import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

type NotificationProps = {
  type: NotificationType;
  title: string;
  description?: string;
  action?: (() => void) | null;
};

type NotificationType = "error" | "info" | "success";

function getWrapper(type: NotificationType): React.ReactNode {
  switch (type) {
    case "error":
      return ErrorWrapper;
    case "info":
      return InfoWrapper;
    case "success":
      return SuccessWrapper;
    default:
      return DefaultWrapper;
  }
}

export function Notification({
  type,
  title,
  description,
  action,
}: NotificationProps) {
  const Wrapper = getWrapper(type) as any;

  const [opacity, setOpacity] = React.useState(0);
  const [cb, setCb] = React.useState<any>(action);

  function close() {
    setOpacity(0);
    setCb(null);
  }

  function open() {
    action?.();
    setOpacity(1);
  }

  React.useEffect(() => {
    if (cb) {
      open();
      cb?.();
    } else {
      const id = setTimeout(() => {
        close();
      }, 1000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [cb, type, title]);

  // React.useEffect(() => {
  //   if (action) {
  //     open();
  //   }

  //   const id = setTimeout(() => close(), 1000);

  //   return () => {
  //     clearTimeout(id);
  //   };
  // }, [action, type, title]);

  return (
    <Wrapper opacity={opacity}>
      <Title description={description}>{title}</Title>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
}

const Title = styled.h3<{ description?: string }>`
  font-size: 16px;
  padding: 10px;
  border-bottom: ${(props) => (props.description ? "2px solid #555" : 0)};
`;

const Description = styled.span`
  color: ${(props) => props.theme.text.default};
  padding: 10px;
`;

const DefaultWrapper = styled.div<{ opacity?: number }>`
  width: 200px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: ${(props) => props.opacity};

  transition: 0.2s opacity;

  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background.default};
`;

const ErrorWrapper = styled(DefaultWrapper)`
  ${Title} {
    color: red;
  }
`;

const InfoWrapper = styled(DefaultWrapper)`
  ${Title} {
    color: blue;
  }
`;

const SuccessWrapper = styled(DefaultWrapper)`
  ${Title} {
    color: green;
  }
`;
