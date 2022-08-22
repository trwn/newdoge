import React from "react";
import { ScrollingGiF, Video } from "./PreviewElements";

import vid from "../../images/scroll.mp4";

const Preview = () => {
  return (
    <ScrollingGiF>
      <Video autoPlay loop muted src={vid} type="video/mp4"></Video>
    </ScrollingGiF>
  );
};

export default Preview;
