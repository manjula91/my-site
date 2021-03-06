import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import { FancyH1 } from "../components/FancyHeader/FancyHeader";

import config from "../../config";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    return (
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <FancyH1>About {toTitleCase(tag)}</FancyH1>
      </div>
    );
  }
}
