import React, { useEffect } from "react";
import styled from "styled-components";

const Contatiner = styled.div`
display: flex;
width: 100%;
height:100vh;
justify-content: center;
align-items: center;
`;

export default function Chatbot() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = { "appId": "11aeb4ef494c425706e0c880f595cb1f", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, [])

  return (
    <Contatiner>

    </Contatiner>
  )
};